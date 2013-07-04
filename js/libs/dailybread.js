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
      max: 5000,
      step: 1,
      animate: true,
      slide: function () { self.sliderSlide.apply(self, arguments) },
      change: function () { self.sliderChange.apply(self, arguments) }
    })

    this.$e.delegate('.db-area-col', 'click', self.handleClick)
  }

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
      if (isNaN(tierId)) {console.log('SOCIAL'); return;}
    var areaId = parseInt($(this).attr('data-db-area'), 10)

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
    self.data = data
  }

  this.setDataFromAggregator = function (data, skip) {
    var handleChildren = function(node, absolute) {
      return _.map(
        _.filter(node.children, function(child) {
          return _.indexOf(skip, child.name);
        }),
        function(child) {
          var daily = (child.amount / node.amount);
          if (absolute) daily = daily / 30.0;
            return [child.name, child.label, child.type || 'budget', daily, handleChildren(child, false)];
        });
    }
    self.setData(handleChildren(data, true));
  }

    this.setEntity = function(entity) {
	self.entity = entity;
    }

  this.setIconLookup = function(lookup) {
    self.iconLookup = lookup;
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
	  self.taxVal = taxes.combined_tax;
	  self.extraTax = taxes.extra;
      });

      return tax_deferred;
  }

  this.draw = function (sliderUpdate) {
    var _draw = function _draw () {
      self.drawTotals();
	self.drawExtra(sliderUpdate);
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
    $('#db-tax p').text(formatCurrency(self.taxVal, 0))
  }

    this.drawExtra = function(sliderUpdate) {
	var tdAry = self.taxAndDataForTier(0)
	if (!tdAry) { return } // No child tier for selected area.
	var tax = tdAry[0], data = tdAry[1]

	var extra = _.filter(data, function(d) { return d[2] === 'extra'});
      var x = self.socials = self.socials || $("<div class='db-tier social-tier'></div>").appendTo($('#db-contributions-bubbles'));

	var n_extra = extra.length;
	var w_extra = 100.0 / n_extra;

	var icons_x = _.map(extra, function(d) { return self.iconLookup(d[0]); });
	var colors_x = _.map(extra, function(d) { return self.colorLookup(d[0]); });
	var opacity_x = _.map(extra, function(d) {return 0.4; });

	if (!sliderUpdate) {
	    var tpl = "<div class='db-area-row'>" +
                "<% _.each(areas, function(area, idx) { %>" +
                "  <div class='db-area-col db-area-title' style='width: <%= width %>%;' data-db-area='<%= idx %>'>" +
                "    <h3><%= area[1] %></h3>" +
                "  </div>" +
                "<% }); %>" +
                "</div>" +
                "<div class='db-area-row'>" +
                "<% _.each(areas, function(area, idx) { %>" +
                "  <div class='db-area-col' style='width: <%= width %>%;' data-db-area='<%= idx %>'>" +
                "    <div class='db-area-icon' data-opacity='<%= opacity[idx] %>' data-color='<%= colors[idx]%>' data-svg-url='<%= icons[idx] %>'></div>" +
                "    <div class='db-area-value'></div>" +
                "  </div>" +
                "<% }); %>" +
                "</div>"
	x.html(_.template(tpl, {areas: extra, width: w_extra, icons: icons_x, opacity: opacity_x, colors: colors_x }))

	OpenSpending.DailyBread.drawIcons(x,25);
	}
      var valEls_x = x.find('.db-area-value');
      _.each(extra, function (area, idx) {
          var extratax = self.extraTax[area[0]] / 30.0;
	  valEls_x.eq(idx).text(formatCurrency(extratax, 2))
      });
      
      x.show();
    };

  this.drawTier = function (tierId, sliderUpdate) {
    var tdAry = self.taxAndDataForTier(tierId)
    if (!tdAry) { return } // No child tier for selected area.
    var tax = tdAry[0], data = tdAry[1]
      var budget = _.filter(data, function(d) { return d[2] === 'budget'});

      var t = self.tiers[tierId] = self.tiers[tierId] || $("<div class='db-tier' data-db-tier='" + tierId + "'></div>").appendTo(self.$e);

      var n_budget = budget.length;
      var w_budget = 100.0 / n_budget;

      var icons_b = _.map(budget, function(d) { return self.iconLookup(d[0]); });
      var colors_b = _.map(budget, function(d) { return self.colorLookup(d[0]); });
      var opacity_b = _.map(budget, function(d) {return 1; });

    if (!sliderUpdate) {
      var tpl = "<div class='db-area-row'>" +
                "<% _.each(areas, function(area, idx) { %>" +
                "  <div class='db-area-col db-area-title' style='width: <%= width %>%;' data-db-area='<%= idx %>'>" +
                "    <h3><%= area[1] %></h3>" +
                "  </div>" +
                "<% }); %>" +
                "</div>" +
                "<div class='db-area-row'>" +
                "<% _.each(areas, function(area, idx) { %>" +
                "  <div class='db-area-col' style='width: <%= width %>%;' data-db-area='<%= idx %>'>" +
                "    <div class='db-area-icon' data-opacity='<%= opacity[idx] %>' data-color='<%= colors[idx]%>' data-svg-url='<%= icons[idx] %>'></div>" +
                "    <div class='db-area-value'></div>" +
                "  </div>" +
                "<% }); %>" +
                "</div>"
	t.html(_.template(tpl, { activeArea: self.areas[tierId], areas: budget, width: w_budget, icons: icons_b, opacity: opacity_b, colors: colors_b }))

	OpenSpending.DailyBread.drawIcons(t);
    }

    // Update values
      var valEls_b = t.find('.db-area-value');
      _.each(budget, function (area, idx) {
          valEls_b.eq(idx).text(formatCurrency(tax * area[3], 2))
      });
      t.show();
  }

  this.taxAndDataForTier = function (tierId) {
      var data = self.data;
      var tax = self.taxVal;
      var areaId

    for (var i = 0, tot = tierId; i < tierId; i += 1) {
      areaId = self.areas[i]
      if (data[areaId]) {
        tax = tax * data[areaId][3]
        data = data[areaId][4]
      } else {
        return null
      }
    }
    return [tax, data]
  }

  this.init()
  return this
}

})(jQuery)

