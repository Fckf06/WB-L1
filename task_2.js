'use strict'

export function checkStrangeNum(num) {
  let sum = [];
  for (let i = 0; i < num; i++) {
    if (num % i === 0) sum.push(i)
  }
  return sum.reduce((p, c) => p + c, 0) === num ? true : false
}

