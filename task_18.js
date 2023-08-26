'use strict'

function calcLocal() {
  let n = ''
  let total = ''
  for (let i = 0; i < 1024 * 20; i++) n += 1
    try {
      for (let j = 0; j < 10500; j += 20) {
        total += n
        localStorage.setItem('total size', total)
        console.log('calculating...');
      } 
    }  catch (e) {
      localStorage.setItem('total size', Math.round((total.length - 20) / 1024) + ' KB')
      console.log(localStorage.getItem('total size'));
      return localStorage.getItem('total size')
    }
}
calcLocal()