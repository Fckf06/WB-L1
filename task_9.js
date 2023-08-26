'use strict'

function convertJson(obj) {
  let str = ''
  if (typeof obj === 'string') return`"${obj}"`
  if (typeof obj === 'number' || typeof obj === 'boolean') return `${obj}`
  if (obj === null) return null
  if (obj === undefined) return ''
  if (Array.isArray(obj)) {
    obj.forEach(e => str += `${convertJson(e)},`)
    return str = `[${str.replace(/,$/, '')}]`
  }
    Object.keys(obj).forEach(e => {
      if (typeof obj[e] !== 'function' && obj[e] !== undefined) return str += `"${e}":${convertJson(obj[e])},` 
    })
    return str = `{${str.replace(/,$/, '')}}`
}


