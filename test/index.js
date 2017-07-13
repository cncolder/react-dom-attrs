var assert = require('assert')
var domAttrs = require('../lib')

var expect = {
  color: 1,
  width: 1,
  height: 1
}

var props = Object.assign({}, expect, {
  unknown: 'react unknown prop',
  lol: 'a cat jump on my keyboard'
})

assert.deepEqual(domAttrs(props), expect)

console.log('ok')
