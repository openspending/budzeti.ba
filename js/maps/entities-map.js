$(function() {
    var width = $('#map').attr('data-width') || 320;
    var height = $('#map').attr('data-height') || 240;
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
		switch (dd['id-1']) {
		case '1': window.location="/brcko-distrikt/";
		    break;
		case '2': window.location="/federacija-bih/";
		    break;
		    case '3': window.location="/republika-srpska/";
		    break;
		}
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

