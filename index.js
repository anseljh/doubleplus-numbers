// TODO: Build this list programmatically
var expressions = [
  /one \(1\)/,
  /two \(2\)/,
  /three \(3\)/,
  /four \(4\)/,
  /five \(5\)/ ]

function message(form, path, expression, match) {
  var word = match[0]
  return {
    message: "'" + word + "' repeats a written number and numeral, which is redundant and error-prone'",
    level: "info",
    path: path,
    source: 'doubleplus-numbers',
    url: null } }

var annotator = require('commonform-regexp-annotator')(expressions, message)

module.exports = annotator
