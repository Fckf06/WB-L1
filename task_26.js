'use strict'

function recDOM(target) {
  let elem = target.children[0]

  while (elem) {
    console.log(elem);
    if (elem) recDOM(elem) 
    elem = elem.nextElementSibling
  }
  }

recDOM(document.body)