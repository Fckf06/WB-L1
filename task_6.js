'use strict'

function sortArrObj(arr) {
 return arr.sort((a, b) => a.age - b.age).sort((a, b) => {
    if (a.age === b.age && a.name > b.name) return 1
    if (a.age === b.age && a.name < b.name) return -1 
    if (a.age !== b.age) return 0
  })
}
