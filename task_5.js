'use strict'

function f(arr) {
  arr = JSON.parse(arr)
  let list = {next: null}
  for (let i = 0; i < arr.length; i++) {
    list.value = arr[i]
    list = {next: list}
  }
  return list
}
