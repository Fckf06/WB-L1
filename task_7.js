'use strict'

function callFuctions1(arr) {
  arr.forEach((e,i) => console.log(`${e.name} call result: ${e()}, index: ${i} `))
}

function callFuctions2(arr, count = 0) {
  if (arr.length) {
    console.log(`${arr.slice(0,1)[0].name} call result: ${arr.slice(0,1)[0]()}, index: ${count} `)
    callFuctions2(arr.slice(1), ++count)
  } return
}