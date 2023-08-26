'use strict'

function convertJSON(obj) {
  return new Function('return ' + obj)()
}
