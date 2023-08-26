'use strict'

class Shape {
  constructor(name, width, height) {
    this.name = name
    this.width = width
    this.height = height
  }
  calculateArea() {
    return "Shapes's area "
  }
  calculateSquare() {
    return "Shapes's square "
  }
}

class Circle extends Shape {
  constructor(name, width, height) {
    super(name, width, height)
  }
  calculateArea() {
    return super.calculateArea() + 2 * Math.PI * this.width / 2
  }
  calculateSquare() {
    return super.calculateSquare() + Math.pow(this.width / 2, 2) * Math.PI
  }
}
class Triangle extends Shape {
  constructor(name, width, height, sideA, sideB) {
    super(name, width, height)
    this.sideA = sideA
    this.sideB = sideB
  }
  
  calculateArea() {
    return super.calculateArea() + this.width + this.sideB+ this.sideA
  }
  calculateSquare() {
    return super.calculateSquare() + this.height * this.width / 2
  }
}

class Square extends Shape {
  constructor(name, width, height) {
    super(name, width, height)
  }
  
  calculateArea() {
    return super.calculateArea() + this.width * 4
  }
  calculateSquare() {
    return super.calculateSquare() + Math.pow(this.width, 2) 
  }
}
