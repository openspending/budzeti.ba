$(function() {
    var entities = {
	'1': { url: '/brcko-distrikt/' },
	'2': { url: '/federacija-bih/' },
	'3': { url: '/republika-srpska/' }
    };

    var width = $('#map').attr('data-width') || 460;
    var height = $('#map').attr('data-height') || 345;

    var mymap = $K.map('#map', width, height);
    mymap.loadMap('/maps/entiteti.svg', function() {
	mymap.addLayer("entities", {
	    title: function(d) {
		return d['name-1']
	    } ,
	    styles: {
		fill: '#EFEFEF',
		'stroke-width': 0.5
	    }
	});
	
	mymap.getLayer('entities')
	    .on('click', function(dd) {
		window.location = entities[dd['id-1']].url;
	    });
	
	mymap.getLayer('entities')
	    .on('mouseenter', function(dd,path) {
		path.attr('fill', '#B2B2B2');
	    });
	
	mymap.getLayer('entities')
	    .on('mouseleave', function(dd,path) {
		path.attr('fill', '#EFEFEF');
	    });  
    });
});

