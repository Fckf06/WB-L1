'use strict'

const book = {
  _name: "Book",
  _author: "Wrighter",
  _year: 2023,

  setProtection() {
    for (let key in this) {
      Object.defineProperty(this, key, {writable: false, configurable: false, enumerable: false})
      if (key.startsWith('_')) {
        Object.defineProperty(this, key.slice(1), {
          get() {
            return this[key]
          },
          set(value) {
            this[key] = value
          }, 
          enumerable: true,
        })
      }
    }
  }
}
book.setProtection()