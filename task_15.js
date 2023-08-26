'use strict'

const url ='https://jsonplaceholder.typicode.com/posts'

async function getAwait(url) { 
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch(e) {
    return e
  }
}
