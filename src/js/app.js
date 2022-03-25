"use strict";

function closeModal() {
  let first_modal = document.querySelector('.first')
  first_modal.style.display = 'none'
}

function openError() {
  let second_modal = document.querySelector('.second')
    second_modal.style.display = 'block'
    second_modal.style.opacity = '1'
}

function openFinish() {
  let third_modal = document.querySelector('.third')
  third_modal.style.display = 'block'
  third_modal.style.opacity = '1'
}

function sendForm() {
  let name = document.querySelector('.name').value
  let tel = document.querySelector('.tel').value
  // let detail = document.querySelector(".detail").value
  let email = 'harazduyk@mailto.plus'

  let data = {
    name,
    tel,
    // detail,
    email
  }

  fetch('https://cars-test-bd.herokuapp.com/mails/send', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      closeModal()
      if (res.status === "ok") {
        openFinish()
      } else {
        openError()
      }
    })
}

