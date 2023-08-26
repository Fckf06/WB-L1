'use strict'

document.write(`<div>
<script>
  document.write(document.querySelector('div').innerHTML);
</script>
</div>`)

console.log(document.querySelectorAll('div > script').length);