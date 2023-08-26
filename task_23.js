'use state'

function checkPswrd(str) {
  let difficult = 0
  let weak = ''
  str.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/) ? difficult++ : weak+=' спецсимволы,'
  str.match(/[0-9]/g) ? difficult++ : weak+=' цифры,'
  str.match(/[A-Z]/g) ? difficult++ : weak+=' заглавные буквы,'
  str.match(/[a-z]/g) ? difficult++ : weak+=' буквы,'
  str.length > 4 ? difficult++ : weak+=' длину,'
  return `Сложность пароля: ${difficult}/5; ${weak ? `Добавьте: ${weak.substring(1,weak.length-1)};`: ''}`
}
