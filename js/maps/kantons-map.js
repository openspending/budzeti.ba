// cantons
$(document).ready(function() {
var cmap = Kartograph.map('#map',360,240);
    cmap.loadCSS('/css/style.css', function() {
	cmap.loadMap('/maps/cantons.svg', function() {
	    cmap.addLayer("cantons", {
		title: function(d) {
		    //return d['name-2']
		    return d['name-2']
		} ,
		styles: {
		    fill: '#EFEFEF',
		    'stroke-width': 0.5
		}
	    }); // layer added
	    
	    cmap.getLayer('cantons')
		.on('mouseenter', function(dd,path) {
		    path.attr('fill', '#B2B2B2');
		});

	    cmap.getLayer('cantons')
		.on('mouseleave', function(dd,path) {
		    path.attr('fill', '#EFEFEF');
		});

	    cmap.getLayer('cantons')
		.on('click', function(ddd) {		    
		    switch (ddd['id-2']) {
		    case '2': window.location="/federacija-bih/kantons/bpk.html";
			break;
		    case '3': window.location="/federacija-bih/kantons/k10.html";
			break;
		    case '4': window.location="/federacija-bih/kantons/sbk.html";
			break;
		    case '5': window.location="/federacija-bih/kantons/hnk.html";
			break;
		    case '6': window.location="/federacija-bih/kantons/pk.html";	
			break;
		    case '7': window.location="/federacija-bih/kantons/sarajevo.html";	
			break;
		    case '8': window.location="/federacija-bih/kantons/tk.html";	
			break;
		    case '9': window.location="/federacija-bih/kantons/usk.html";	
			break;
		    case '10': window.location="/federacija-bih/kantons/zhk.html";	
			break;
		    case '11': window.location="/federacija-bih/kantons/ze-do.html";	
			break;
		    }
		});
	});
    });
});
