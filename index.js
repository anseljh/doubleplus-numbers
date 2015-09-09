var expressions = require('./redundancies').map(function(element) {
  return new RegExp(element);
});

function message(form, path, expression, match) {
  var word = match[0];
  return {
    message: '"' + word + '" repeats a written number and numeral, which is redundant and error-prone',
    level: "info",
    path: path,
    source: 'doubleplus-numbers',
    url: null
  };
}

var annotator = require('commonform-regexp-annotator')(expressions, message);

module.exports = annotator;
