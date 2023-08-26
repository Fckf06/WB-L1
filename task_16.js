'use strict'
import moment from 'https://cdn.jsdelivr.net/npm/moment@2.29.0/+esm'

export default class CustomDate {
  static getTime() {
    return moment().format('LTS')
  }
  static getDate() {
    return moment().format('LL')
  }
}
