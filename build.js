var range = require('array-range');
var numberStringRepresentation = require('number-string-representation');
var RANGEMAX = 100;

function deDollarize(dollary) {
  // Unfortunately, number-string-representation alawys returns stuff about
  // dollars at the end of its output. This function trims it off.
  // TODO: Account for decimals instead of lopping them off.
  // Example `dollary` input string: "two thousand five hundred twenty-three and 00/100 dollars"
  var reNoDollars = /(.+)(\sand \d\d\/100 dollars)/i;
  if (reNoDollars.test(dollary)) {
    return reNoDollars.exec(dollary)[1];
  } else {
    return dollary;
  }
}

function getNumberWords(input) {
  /*
    Returns a string containing words for the numeral `input`
  */
  dollarWords = numberStringRepresentation(input);
  words = deDollarize(dollarWords);
  return words.toLowerCase();
}

function getRedundancy(input) {
  /*
    Given an integer, makes a redundant string like "two (2)"
  */
  return getNumberWords(input) + " (" + input + ")";
}

var escapeRegExp = require('escape-regexp');

var integerRange = range(1,RANGEMAX+1);
var redundancies = integerRange.map(getRedundancy).map(escapeRegExp);

console.log(JSON.stringify(redundancies, null, 2));
