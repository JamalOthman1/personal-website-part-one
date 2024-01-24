console.log('hello world');
const form = document.querySelector('#form')
const submitbutton = document.querySelector('#submit')

form.addEventListener('submit',(e) => {submitbutton.disabled - true e.preventDefault()window.location.href = window.location.origin+ '/succes.html'})