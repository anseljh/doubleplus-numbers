# doubleplus-numbers

`doubleplus-numbers` provides a [Common Form](https://github.com/commonform) [annotator](https://github.com/commonform/commonform-annotations) to find and identify redundant and repeated number(s) and numeral(s).

[![Build Status](https://travis-ci.org/anseljh/doubleplus-numbers.svg)](https://travis-ci.org/anseljh/doubleplus-numbers)

```javascript
var assert = require('assert')
var annotator = require('doubleplus-numbers')

assert.deepEqual(
  annotator({ content: [ 'Give me two (2) of those and four (4) of the other one.' ] }),
  [ { message: '"two (2)" repeats a written number and numeral, which is redundant and error-prone',
      level: "info",
      path: [ 'content', 0 ],
      source: 'doubleplus-numbers',
      url: null },
    { message: '"four (4)" repeats a written number and numeral, which is redundant and error-prone',
      level: "info",
      path: [ 'content', 0 ],
      source: 'doubleplus-numbers',
      url: null } ])
```
