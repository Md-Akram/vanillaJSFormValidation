const nameInput = document.getElementById('name')
const password = document.getElementById('password')
const errorItem = document.getElementById('error')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  let messeges = []
  if (nameInput.value === '' || nameInput.value === null) {
    messeges.push('please enter your name')
  }

  if (password.value.length < 6) {
    messeges.push('password must be longer than 6 characters')
  }

  if (password.value.length > 20) {
    messeges.push('password should be less than 20 charachters')
  }

  if (messeges.length > 0) {
    e.preventDefault()
    errorItem.innerText = messeges.join(',')
  }
})
