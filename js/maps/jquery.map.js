!function($) {
    $.cartograph = function( element, options ) {

	var $element = $(element);
	var config = $.extend(true, {}, $.cartograph.defaults,
			      $.cartograph.domopts(element), options);

	var mymap = $K.map($element, config.width, config.height);
	mymap.loadMap(config.map.svg, function() {
	    mymap.addLayer(config.map.group, {
		title: function(elem) {
		    return config.title(elem, config.map.key);
		},
		styles: {
		    fill: config.style.background,
		    'stroke-width': 0.5
		}
	    });
	    
	    mymap.getLayer(config.map.group)
		.on('click', function(elem) { 
		    config.click(elem, config.map.key);
		});
	    
	    mymap.getLayer(config.map.group)
		.on('mouseenter', function(elem, path) {
		    path.attr('fill', config.style.foreground);
		});
	    
	    mymap.getLayer(config.map.group)
		.on('mouseleave', function(elem, path) {
		    path.attr('fill', config.style.background);
		});  
	});
    };
    
    $.cartograph.defaults = {
	map: {
	    svg: '',
	    group: '',
	    links: {},
	    key: ''
	},
	title: function(elem, key) { 
              return elem[key];
	},
	click: function (elem, id) { },
	width: 460,
	height: 345,
	style: {
	    foreground: '#b2b2b2',
	    background: '#fff'
	}
    };

    $.cartograph.domopts = function(element) {
	
        var $element = $(element);
	return {
	    map: {
		svg: $element.attr('data-map'),
		group: $element.attr('data-group'),
		key: $element.attr('data-key'),
	    },
	    width: $element.attr('data-width'),
	    height: $element.attr('data-height'),
	    style: {
		foreground: $element.attr('data-foreground'),
		background: $element.attr('data-background')
	    }
	};
    };

    // Extend jquery's prototype with the dailybread function that runs through
    // all dom elements and passes them, along with the options to the
    // dailybread function
    $.fn.extend({
        cartograph: function(options) {
            if(options == undefined) options = {};
            this.each(function() {
                $.cartograph( this, options);
            });
        }
    });

    // On load we automatically create a dailybread for all dom elments that
    // have the 'dailybread' class and a dataset attribute set and a country
    $('.map').cartograph();
}(jQuery);
