'use strict'

const url ='https://fckf06.github.io/WB-L0/src/img/item-1.png'

function getImg(url) {
  return fetch(url).then(res => res).catch(e => e)
}

