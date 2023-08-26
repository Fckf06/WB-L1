'use strict'

function getClosure(arr) {
  return (() => arr.map(f => f()))()
}
