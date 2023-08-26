'use strict'
function checkPolindrom(str) {
  str = str.replace(/[\s-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '').toLowerCase()
  return str === str.split('').reverse().join('')
}
