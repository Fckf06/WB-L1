'use strict'

const elem = document.createElement('div')
elem.style.cssText = 'width:100px; height:100px; border: 2px dashed black; border-radius: 50%; margin: 200px auto;'
document.body.append(elem)

function setAnim(elem) {
  let deg = 0
  let sca = 10
  let opa = 100
  let toggle = true
  setInterval(rotateFunc, 30)

  const setOpa = (opa) => opa < 10 && opa >= 0 ? `0.0${opa}` : opa < 100 ? `0.${opa}` : opa

  function rotateFunc() {
    deg === 360 ? deg = 0 : ++deg
    opa === 20 ? toggle = false : opa === 100 ? toggle = true : ''
    if (toggle) {
      elem.style.transform = `rotate(${deg}deg) scale(1.${++sca})`
      elem.style.opacity = setOpa(--opa)
    } else if (!toggle) {
      elem.style.transform = `rotate(${deg}deg) scale(1.${--sca})`
      elem.style.opacity = setOpa(++opa)
    }
  }
}
setAnim(elem)  