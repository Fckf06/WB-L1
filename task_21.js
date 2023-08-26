'use state'

let count = 0

function calcCs() {
  count++
  calcCs()
}
try {
  calcCs()
} catch(e) {
  console.log(count);
}