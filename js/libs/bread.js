var OpenSpending = OpenSpending || {};
OpenSpending.DailyBread = OpenSpending.DailyBread || {};

OpenSpending.DailyBread.drawIcons = function(elem, radius) {
    var iconRad = radius || 35;
    elem.find('.db-area-icon svg').remove();
    elem.find('.db-area-icon').each(function(i,e) {
	var iconUrl, paper;
	iconUrl = $(e).data('svg-url');
	paper = Raphael(e, iconRad+iconRad,iconRad+iconRad+5);
	paper.circle(iconRad,iconRad,iconRad).attr({ 
	    fill: $(e).data('color'),
	    opacity: $(e).data('opacity'),
	    stroke: 'none' });

	paper.circle(iconRad,iconRad,iconRad-2).attr({ fill: 'none', stroke: '#eee', opacity: .8, 'stroke-dasharray': '- ' });

	$.get(iconUrl, function(svg) {
            if (typeof(svg) == "string") {
		svg = $(svg);
		svg = svg[svg.length-1];
            }
            if (!svg.getElementsByTagName) return;
            var j, icon,
            joined='',
            paths = svg.getElementsByTagName('path');
            for (j=0;j<paths.length;j++) joined += paths[j].getAttribute('d')+' ';
            icon = paper.path(joined);
            icon.attr({ fill: 'white', stroke: 'none' });
            icon.scale(iconRad/50, iconRad/50, 0, 0);
	});
    });
};