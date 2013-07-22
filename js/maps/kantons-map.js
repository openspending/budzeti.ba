// cantons
$(function() {
    var kantons = {
	'2': { url: '/federacija-bih/kantons/bpk.html' },
	'3': { url: '/federacija-bih/kantons/k10.html' },
	'4': { url: '/federacija-bih/kantons/sbk.html' },
	'5': { url: '/federacija-bih/kantons/hnk.html' },
	'6': { url: '/federacija-bih/kantons/pk.html' },
	'7': { url: '/federacija-bih/kantons/sarajevo.html' },
	'8': { url: '/federacija-bih/kantons/tk.html' },
	'9': { url: '/federacija-bih/kantons/usk.html' },
	'10': { url: '/federacija-bih/kantons/zhk.html' },
	'11': { url: '/federacija-bih/kantons/ze-do.html' }
    };

    var width = $('#map').attr('data-width') || 400;
    var height = $('#map').attr('data-height') || 335;
		$("#map").addClass("kantons");

    var map = $K.map('#map', width, height);
    map.loadMap('/maps/cantons.svg', function() {
	map.addLayer("cantons", {
	    title: function(d) {
		return d['name-2']
	    } ,
	    styles: {
		fill: '#FFF',
		'stroke-width': 0.5
	    }
	}); // layer added
	
	map.getLayer('cantons')
	    .on('mouseenter', function(dd,path) {
		path.attr('fill', '#B2B2B2');
	    });
	
	map.getLayer('cantons')
	    .on('mouseleave', function(dd,path) {
		path.attr('fill', '#FFF');
	    });
	
	map.getLayer('cantons')
	    .on('click', function(ddd) {
		window.location = kantons[ddd['id-2']].url;
	    });
    });
});
