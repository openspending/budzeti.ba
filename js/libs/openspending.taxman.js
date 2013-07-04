// Define OpenSpending object
var OpenSpending = OpenSpending || {};
// Define Taxman property
OpenSpending.Taxman = OpenSpending.Taxman || {};

OpenSpending.Taxman.URL = 'http://taxman.openspending.org';

OpenSpending.Taxman.get = function(country_code, opts) {
    var rq = $.getJSON(this.URL + '/'+country_code+'?callback=?', opts);
    var tax_deferred = rq.pipe(function(data) {
	return {
	    combined_tax: data.calculation.income_tax + data.calculation.vat,
	    income_tax: data.calculation.income_tax,
	    extra: data.calculation.contributions
	}
    });
	    
    return tax_deferred;
};