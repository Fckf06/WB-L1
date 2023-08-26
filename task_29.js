'use strict'

document.body.insertAdjacentHTML('beforeend', `
  <forM id="form">
    <input name="user"/>
    <input name="pswrd"/>
    <input type="submit"/>
  </form>
`)

function submit(form) {
  const data = new FormData(form)
  fetch(`http://127.0.0.1:5500/index.html?user=${data.get('user')}&pswrd=${data.get('pswrd')}`)
  alert('Данные отправлены')
}

form.addEventListener('submit', () => submit(form))