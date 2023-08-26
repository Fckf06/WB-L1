'use strict'

function getClosure() {
  const value = 50
  return () => value
}
const innerFunc = getClosure()

innerFunc()