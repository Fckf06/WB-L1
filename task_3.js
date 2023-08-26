'use strict'

export class MathX {
  static getFib(n) {
    return n <= 1 ? n : this.getFib(n - 1) + this.getFib(n - 2);
  }
  static getAllFib(n) {
    let arr = [1, 1]
    for (let i = 1; i < n; i++) {
      arr.push(arr[arr.length-1] + arr[arr.length-2])
    } return arr
  }
  static getSimple(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false
    } return true
  }
  static getAllSimple(n) {
    let arr = []
    for (let i = 2; i <= n; i++) {
      let isSimple = true
      for (let j = 2; j < i; j++) {
        if (i % j === 0) isSimple = false
      }
      isSimple && arr.push(i) 
    }
    return arr
  }
}
