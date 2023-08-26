'use strict'

function correctWord(num, one, four, five) {

  if (!isFinite(num)) return 'Invalid num'
  const rest100 = num % 100
  const rest10 = rest100 % 10
  if (rest100 > 10 && rest100 < 20) return `${num} ${five}`
  if (rest10 > 1 && rest10 < 5) return `${num} ${four}`
  if (rest10 === 1) return `${num} ${one}`
  return `${num} ${five}`
} 
export default correctWord

let r = correctWord('1101', 'день', 'дня', 'дней')

console.log(r);


