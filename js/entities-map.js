$(function() {
    var mymap = $K.map('#map',320,240);
    mymap.loadCSS('css/cra-map.css', function() {
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
		    case '1': window.location="bd.html";
			break;
		    case '2': window.location="federation.html";
			break;
		    case '3': window.location="rs.html";
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
	})
    });
});