'use strict'

function createElem(content) {
  const temp = document.createElement('template')
  temp.innerHTML = content
  const elem = temp.content.cloneNode(true)
  document.body.append(elem)
}

createElem('div')