'use strict'

function createElem1(tag, styleText, inner) {
  const elem = document.createElement(tag)
  inner ? elem.innerHTML = inner : ''
  document.body.prepend(elem)
  elem.style.cssText = styleText
}

function createElem2(tag, styleClass, inner) {
  const elem = document.createElement(tag)
  inner ? elem.innerHTML = inner : ''
  document.body.prepend(elem)
  elem.classList.add(...styleClass)
}
