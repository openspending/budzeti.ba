/*! openspending.amounts.js - Amount formatting for OpenSpending
 * ------------------------------------------------------------------------
 *
 * Copyright 2013 Open Knowledge Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* REQUIREMENTS
 * accounting.js
 */

// Define OpenSpending object (if used as a separate module)
var OpenSpending = OpenSpending || {};
// Define Amounts property
OpenSpending.Amounts = OpenSpending.Amounts || {};

// Give a short hand version of the amount (with bn, m, k abbreviations)
OpenSpending.Amounts.shorthand = function (amount) {
    // Define supported amounts
    var billion = 1000000000;
    var million = 1000000;
    var thousand = 1000;

    // Get the absolute value (since negative numbers should work as well
    var absolute_amount = Math.abs(amount);

    // Billions get 'bn'
    if (absolute_amount > billion) {
	return OpenSpending.Amounts.format(amount / billion) + 'bn';
    }
    // Millions get 'm'
    else if (absolute_amount > million) {
	return OpenSpending.Amounts.format(amount / million) + 'm';
    }
    // Thousands get 'k'
    else if (absolute_amount > thousand) {
	return OpenSpending.Amounts.format(amount / thousand) + 'k';
    }
    // Anything less just returns the amount with two decimal places
    else {
	return OpenSpending.Amounts.format(amount, 2);
    }
};

// Format amount using accounting
OpenSpending.Amounts.format = function (amount, precision, currency) {
    // Get the currency symbol
    currency = OpenSpending.Amounts.currencySymbol(currency);
    // Use accounting.js to format the amount (default precision is 0)
    return accounting.formatMoney(amount, currency.symbol, precision||0,
				  OpenSpending.localeGroupSeparator,
				  OpenSpending.localeDecimalSeparator,
				  currency.format);
};

// Get the currency symbol
OpenSpending.Amounts.currencySymbol = function (currency) {
    // If currency is defined return currency symbol or currency
    if(currency) {
	return OpenSpending.Amounts.currencySymbols[currency] || {symbol: currency};
    } else { // If not we just return an empty string
	return '';
    }
};

// All known currency symbols in openspendingjs
OpenSpending.Amounts.currencySymbols = {
    "AED": {symbol: "د.إ"}, 
    "AFN": {symbol: "؋"},
    "ALL": {symbol: "L"},
    "AMD": {symbol: "դր."},
    "ANG": {symbol: "ƒ"},
    "AOA": {symbol: "Kz"},
    "ARS": {symbol: "$"},
    "AUD": {symbol: "$"},
    "AWG": {symbol: "ƒ"},
    "AZN": {symbol: "m"},
    "BAM": {symbol: "KM", format: "%v%s"},
    "BBD": {symbol: "$"},
    "BDT": {symbol: "৳"},
    "BGN": {symbol: "лв"},
    "BHD": {symbol: "ب.د"},
    "BIF": {symbol: "Fr"},
    "BMD": {symbol: "$"},
    "BND": {symbol: "$"},
    "BOB": {symbol: "Bs."},
    "BRL": {symbol: "R$"},
    "BSD": {symbol: "$"},
    "BTN": {symbol: "Nu"},
    "BWP": {symbol: "P"},
    "BYR": {symbol: "Br"},
    "BZD": {symbol: "$"},
    "CAD": {symbol: "$"},
    "CDF": {symbol: "Fr"},
    "CHF": {symbol: "Fr"},
    "CLP": {symbol: "$"},
    "CNY": {symbol: "¥"},
    "COP": {symbol: "$"},
    "CRC": {symbol: "₡"},
    "CUP": {symbol: "$"},
    "CVE": {symbol: "$, Esc"},
    "CZK": {symbol: "Kč"},
    "DJF": {symbol: "Fr"},
    "DKK": {symbol: "kr"},
    "DOP": {symbol: "$"},
    "DZD": {symbol: "د.ج"},
    "EEK": {symbol: "KR"},
    "EGP": {symbol: "£,ج.م"},
    "ERN": {symbol: "Nfk"},
    "ETB": {symbol: "Br"},
    "EUR": {symbol: "€"},
    "FJD": {symbol: "$"},
    "FKP": {symbol: "£"},
    "GBP": {symbol: "£"},
    "GEL": {symbol: "ლ"},
    "GHS": {symbol: "₵"},
    "GIP": {symbol: "£"},
    "GMD": {symbol: "D"},
    "GNF": {symbol: "Fr"},
    "GTQ": {symbol: "Q"},
    "GYD": {symbol: "$"},
    "HKD": {symbol: "$"},
    "HNL": {symbol: "L"},
    "HRK": {symbol: "kn"},
    "HTG": {symbol: "G"},
    "HUF": {symbol: "Ft"},
    "IDR": {symbol: "Rp"},
    "ILS": {symbol: "₪"},
    "INR": {symbol: "₨"},
    "IQD": {symbol: "ع.د"},
    "IRR": {symbol: "﷼"},
    "ISK": {symbol: "kr.", format: "%v %s"},
    "JMD": {symbol: "$"},
    "JOD": {symbol: "د.ا"},
    "JPY": {symbol: "¥"},
    "KES": {symbol: "KSh"},
    "KGS": {symbol: "лв"},
    "KHR": {symbol: "៛"},
    "KMF": {symbol: "Fr"},
    "KPW": {symbol: "₩"},
    "KRW": {symbol: "₩"},
    "KWD": {symbol: "د.ك"},
    "KYD": {symbol: "$"},
    "KZT": {symbol: "Т"},
    "LAK": {symbol: "₭"},
    "LBP": {symbol: "ل.ل"},
    "LKR": {symbol: "ரூ"},
    "LRD": {symbol: "$"},
    "LSL": {symbol: "L"},
    "LTL": {symbol: "Lt"},
    "LVL": {symbol: "Ls"},
    "LYD": {symbol: "ل.د"},
    "MAD": {symbol: "د.م."},
    "MDL": {symbol: "MDL"},
    "MGA": {symbol: "Ar"},
    "MKD": {symbol: "ден"},
    "MMK": {symbol: "K"},
    "MNT": {symbol: "₮"},
    "MOP": {symbol: "P"},
    "MRO": {symbol: "UM"},
    "MUR": {symbol: "₨"},
    "MVR": {symbol: "ރ."},
    "MWK": {symbol: "MK"},
    "MXN": {symbol: "$"},
    "MYR": {symbol: "RM"},
    "MZN": {symbol: "MT"},
    "NAD": {symbol: "$"},
    "NGN": {symbol: "₦"},
    "NIO": {symbol: "C$"},
    "NOK": {symbol: "kr"},
    "NPR": {symbol: "₨"},
    "NZD": {symbol: "$"},
    "OMR": {symbol: "ر.ع."},
    "PAB": {symbol: "B/."},
    "PEN": {symbol: "S/."},
    "PGK": {symbol: "K"},
    "PHP": {symbol: "₱"},
    "PKR": {symbol: "₨"},
    "PLN": {symbol: "zł"},
    "PYG": {symbol: "₲"},
    "QAR": {symbol: "ر.ق"},
    "RON": {symbol: "RON"},
    "RSD": {symbol: "RSD"},
    "RUB": {symbol: "р."},
    "RWF": {symbol: "Fr"},
    "SAR": {symbol: "ر.س"},
    "SBD": {symbol: "$"},
    "SCR": {symbol: "₨"},
    "SDG": {symbol: "S$"},
    "SEK": {symbol: "kr"},
    "SGD": {symbol: "$"},
    "SHP": {symbol: "£"},
    "SLL": {symbol: "Le"},
    "SOS": {symbol: "Sh"},
    "SRD": {symbol: "$"},
    "STD": {symbol: "Db"},
    "SYP": {symbol: "£, ل.س"},
    "SZL": {symbol: "L"},
    "THB": {symbol: "฿"},
    "TJS": {symbol: "ЅМ"},
    "TMT": {symbol: "m"},
    "TND": {symbol: "د.ت"},
    "TOP": {symbol: "T$"},
    "TRY": {symbol: "₤"},
    "TTD": {symbol: "$"},
    "TWD": {symbol: "$"},
    "TZS": {symbol: "Sh"},
    "UAH": {symbol: "₴"},
    "UGX": {symbol: "Sh"},
    "USD": {symbol: "$"},
    "UYU": {symbol: "$"},
    "UZS": {symbol: "лв"},
    "VEF": {symbol: "Bs"},
    "VND": {symbol: "₫"},
    "VUV": {symbol: "Vt"},
    "WST": {symbol: "T"},
    "XAF": {symbol: "Fr"},
    "XCD": {symbol: "$"},
    "XOF": {symbol: "Fr"},
    "XPF": {symbol: "Fr"},
    "YER": {symbol: "﷼"},
    "ZAR": {symbol: "R"},
    "ZMK": {symbol: "ZK"},
    "ZWL": {symbol: "$"}
};

