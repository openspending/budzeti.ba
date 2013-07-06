OpenSpending = "OpenSpending" in window ? OpenSpending : {};

(function ($) {

//var TAXMAN_URL = 'http://taxman.openspending.org';
var TAXMAN_URL = 'http://127.0.0.1:3000';

var formatCurrency = function (val, prec, sym, dec, sep) {
  prec = prec === undefined ? 2 : prec
  sym = sym || 'KM'
  dec = dec || '.'
  sep = sep || ','

  var str
  var valAry = val.toFixed(prec).split('.')
  var sepAry = []

  for(var i = valAry[0].length; i > 2; i -= 3) {
    sepAry.unshift(valAry[0].slice(i-3, i))
  }
  if (i !== 0) { sepAry.unshift(valAry[0].slice(0, i)) }

  str = sym + sepAry.join(sep)
  if (prec > 0) str += dec + valAry[1]

  return str
}

OpenSpending.DailyBread = function (elem) {
  var self = this

  this.$e = $(elem)
  this.$e.data('wdmmg.dailybread', this)

  this.tiers = []
  this.areas = []
  this.iconLookup = function (name) { return undefined; };

  this.init = function () {
    this.setSalary(800); // default starting salary

    this.$e.find('.wdmmg-slider').slider({
      value: this.salaryVal,
      min: 340,
      max: 3000,
      step: 1,
      animate: true,
      slide: function () { self.sliderSlide.apply(self, arguments) },
      change: function () { self.sliderChange.apply(self, arguments) }
    })

    this.$e.delegate('.db-area-col', 'click', self.handleClick)
  }

    var vat_checkbox = this.$e.find('input[name="vat"]')
    vat_checkbox.change(function() {
	self.draw(true);
    })

  this.sliderSlide = function (evt, sld) {
    self.setSalary(sld.value);
    self.drawTotals();
  }

  this.sliderChange = function (evt, sld) {
    self.setSalary(sld.value);
    self.draw(true);
  }

  this.handleClick = function () {
    var tier = $(this).closest('.db-tier')
    var tierId = parseInt(tier.attr('data-db-tier'), 10) 
    var areaId = $(this).attr('data-db-area');
    // Update current selected area
    self.areas[tierId] = areaId
    // Slice off more specific selections
    self.areas = self.areas.slice(0, tierId + 1)

    tier
      .find('.db-area-col')
      .removeClass('active')
    .end()
      .find('[data-db-area='+areaId+']')
      .addClass('active')

    self.drawTier(tierId + 1)

    // Hide old tiers
      self.$e.find('.db-tier').each(function () {
	  if ($(this).attr('data-db-tier') > tierId + 1) {
	      $(this).hide()
	  }
      });

    // Simulate a click so that auto resize can happen on
    // wheredoesmymoneygo.com. Sadly custom events won't work here, and only
    // click appears to do the trick.
    $(self.$e).click();
  }

    this.setData = function (data) {
	self.original_data = data;
    }

    this.setDataFromAggregator = function (data, skip) {
	var createData = function(node, absolute) {
	    var obj = {}
	    for (var idx in node.children) {
		var child = node.children[idx];
		var daily = (child.amount / node.amount);
		if (absolute) daily = daily;
		obj[child.name] = {
		    label: child.label,
		    type: child.type || 'budget',
		    ratio: daily,
		    amount: 0,
		    fixed: 0,
		    children: createData(child, false)
		}
	    }
	    return obj;
	}

	self.setData(createData(data, true));
  }

    this.setEntity = function(entity) {
	self.entity = entity;
    }

  this.setIconLookup = function(lookup) {
    self.iconLookup = lookup;
  }

    this.setExtraContributions = function(contributions) {
	self.extras = contributions;
    }

  this.setColorLookup = function(lookup) {
      self.colorLookup = lookup;
  }

  this.setSalary = function (salary) {
    self.salaryVal = salary;
  }

  this.getTaxVal = function () {
      OpenSpending.Taxman.URL = 'http://127.0.0.1:3000';
      var tax_deferred = 
	  OpenSpending.Taxman.get('ba', { year: 2012,
					  net_income: self.salaryVal,
					  income: self.salaryVal,
					  entity: self.entity
					});

      tax_deferred.then(function(taxes) {
	  self.income_tax = taxes.income_tax;
	  self.combined_tax = taxes.combined_tax;
	  self.taxVal = self.$e.find('input[name="vat"]').attr('checked') ? 
	      self.combined_tax : self.income_tax;
	  self.extraTax = taxes.extra;
      });

      return tax_deferred;
  }

  this.draw = function (sliderUpdate) {
      var _draw = function _draw () {
	  self.drawTotals();
	  self.data = self.combine(self.original_data, self.extras);
	  if (self.tiers.length === 0) {
              self.drawTier(0, sliderUpdate);
	  } else {
              for (var i = 0, tot = self.tiers.length; i < tot; i += 1) {
		  self.drawTier(i, sliderUpdate);
              }
	  }
      };

    var taxUndef = (typeof self.taxVal === 'undefined' || self.taxVal == null);

    if (sliderUpdate || taxUndef) {
	self.getTaxVal().then(_draw);
    } else {
      _draw();
    }
  }

    this.drawTotals = function () {
	$('#db-salary p').text(formatCurrency(self.salaryVal, 0))
	$('#db-tax p').text(formatCurrency(self.taxVal+self.extraTax.total, 0))
    };

    this.combine = function(data, extra) {
	var budget = $.extend(true, {}, data);

	for (var idx in extra) {
	    var item = _.clone(extra[idx]);
	    var amount = self.extraTax[item.code].total;
	    var cofog = item.name.split('-');
	    if (budget[cofog[0]]) {
		budget[cofog[0]].fixed += amount;
	    }
	    var cofog1 = cofog[0]+'-'+cofog[1];
	    if (budget[cofog[0]].children && budget[cofog[0]].children[cofog1]) {
		budget[cofog[0]].children[cofog1].fixed += amount;
	    }
	    else {
		budget[cofog[0]].children[cofog1] = {
		    name: cofog1,
		    label: item.label,
		    fixed: amount,
		    amount: 0
		};
	    }
	    var cofog2 = cofog1+'-'+cofog[2];
	    if (budget[cofog[0]].children[cofog1].children && budget[cofog[0]].children[cofog1].children[cofog2]) {
		budget[cofog[0]].children[cofog1].children[cofog2].fixed += amount;
	    }
	    else {
		if (budget[cofog[0]].children[cofog1].children) {
		    budget[cofog[0]].children[cofog1].children[cofog2] = item;
		}
		else {
		    budget[cofog[0]].children[cofog1].children = {}
		    budget[cofog[0]].children[cofog1].children[cofog2] = item;
		}
		budget[cofog[0]].children[cofog1].children[cofog2].fixed = amount;
		budget[cofog[0]].children[cofog1].children[cofog2].amount = 0;
	    }
	}
	return budget;
    };

    this.drawTier = function (tierId, sliderUpdate) {
	var tdAry = self.taxAndDataForTier(tierId);
	if (!tdAry) { return } // No child tier for selected area.
	var tax = tdAry.tax, budget = tdAry.data

	var t = self.tiers[tierId] = self.tiers[tierId] || $("<div class='db-tier' data-db-tier='" + tierId + "'></div>").appendTo(self.$e);
	
	var n_budget = budget.length;
	var w_budget = 100.0 / n_budget;

      var icons = _.map(budget, function(d) { return self.iconLookup(d[0]); });
      var colors = _.map(budget, function(d) { return self.colorLookup(d[0]); });

    if (!sliderUpdate) {
      var tpl = "<div class='db-area-row'>" +
                "<% _.each(areas, function(area, idx) { %>" +
                "  <div class='db-area-col db-area-title' style='width: <%= width %>%;' data-db-area='<%= area[0] %>'>" +
                "    <h3><%= area[1] %></h3>" +
                "  </div>" +
                "<% }); %>" +
                "</div>" +
                "<div class='db-area-row'>" +
                "<% _.each(areas, function(area, idx) { %>" +
                "  <div class='db-area-col' style='width: <%= width %>%;' data-db-area='<%= area[0] %>'>" +
                "    <div class='db-area-icon' data-color='<%= colors[idx]%>' data-svg-url='<%= icons[idx] %>'></div>" +
                "    <div class='db-area-value'></div>" +
                "  </div>" +
                "<% }); %>" +
                "</div>"
	t.html(_.template(tpl, { activeArea: self.areas[tierId], areas: budget, width: w_budget, icons: icons, colors: colors }))

	OpenSpending.DailyBread.drawIcons(t);
    }

    // Update values
      var valEls_b = t.find('.db-area-value');
      _.each(budget, function (area, idx) {
          valEls_b.eq(idx).text(formatCurrency(area[3], 2))
      });
      t.show();
  }

    this.taxAndDataForTier = function (tierId) {
	var data = self.data;
      var tax = self.taxVal;
      var areaId

      if (tierId === 0) {
	  for (var key_idx in _.keys(data)) {
	      var key = _.keys(data)[key_idx];
	      if (data[key].ratio) {
		  data[key].amount = data[key].ratio * tax;
	      }
	  }
      };

      for (var i = 0, tot = tierId; i < tierId; i += 1) {
	  areaId = self.areas[i];
	  if (data[areaId]) {
              tax = data[areaId].amount;
              data = data[areaId].children;
	      for (var key_idx in _.keys(data)) {
		  var key = _.keys(data)[key_idx];
		  if (data[key].ratio) {
		      data[key].amount = data[key].ratio * tax;
		  }
	      }
	  } else {
              return null
	  }
      }

      var createArray = function(spending_object) {
	  var spending_array = [];
	  if (spending_object) {
	      for (var key_idx in _.keys(spending_object)) {
		  var key = _.keys(spending_object)[key_idx];
		  var child = [key, spending_object[key].label, 'budget',
			       spending_object[key].amount+spending_object[key].fixed]
		  var grandchildren = createArray(spending_object[key].children);
		  if (grandchildren.length) child.push(grandchildren);
		  spending_array.push(child);
	      }
	  }
	  spending_array = _.sortBy(spending_array, function(item) { return -item[3]; });
	  return spending_array;
      };

      data = createArray(data);
      
      return {tax: tax, data: data}
  }

  this.init()
  return this
}

})(jQuery)

