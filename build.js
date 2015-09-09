var range = require('array-range');
var numberStringRepresentation = require('number-string-representation');
var RANGEMAX = 100;

// Regex for detecting numerals:
//    \d+       First numerals
//    (,\d+)*   Optionally, a comma and some more numerals (may be repeated)
//    (\.\d+)?  Optionally, a decimal point followed by more numerals
var reNumerals = /\d+(,\d+)*(\.\d+)?/i;

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

function getAllNumerals(input) {
  /*
    returns a list of all numerals (as strings) in the input string

    good test string: "one 234.56 three 456 five 67.89 foo"

    more test strings:
      two (2) things
      three (3) more
      five dollars and twenty cents (5.20)!
      four thousand (4,000)!!!
      some more (1,234.567)
      billions and billions (1,234,567,890.10)
      one 234.56 three 456 five 67.89 foo

    Test at http://regexpal.com/
  */

  r = [];
  var matches = input.match(reNumerals);
  console.log("reNumerals: " + reNumerals);
  console.log("matches: " + matches);
  for (i=0; i < matches.length; i++) {
    var match = matches[i];
    console.log("i=" + i + "; match: " + match);
    r.push(match);
    console.log("r: " +r);
  }
  return r;
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
