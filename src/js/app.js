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

function sendFormFirst() {
  let nameError = document.querySelector('.name_error')
  let phoneError = document.querySelector('.phone_error')
  nameError.style.display = 'none'
  phoneError.style.display = 'none'

  let name = document.querySelector('.name').value
  let tel = document.querySelector('.telephone').value
  let email = 'tatuyana.harazduyk@gmail.com'

  let data = {
    name,
    tel,
    email
  }
  if (name.length < 3 || tel.length < 4) {
    if (name.length < 3) {
      nameError.style.display = 'block'
    }
    if (tel.length < 4) {
      phoneError.style.display = 'block'

    }
  } else {
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

}

function sendFormSecond() {
  let namesError = document.querySelector('.nameS_error')
  let phonesError = document.querySelector('.phoneS_error')
  namesError.style.display = 'none'
  phonesError.style.display = 'none'

  let name = document.querySelector('.nameS').value
  let tel = document.querySelector('.telephoneS').value
  let detail = document.querySelector('.detail').value
  let email = 'tatuyana.harazduyk@gmail.com'

  let data = {
    name,
    tel,
    detail,
    email
  }

  if (name < 3 || tel < 4) {
    if (name.length < 3) {
      namesError.style.display = 'block'
    }
    if (tel.length < 4) {
      phonesError.style.display = 'block'
    }
  } else {
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
}

function sendFormThird() {
  let nametError = document.querySelector('.nameT_error')
  let phonetError = document.querySelector('.phoneT_error')
  nametError.style.display = 'none'
  phonetError.style.display = 'none'

  let name = document.querySelector('.nameT').value
  let tel = document.querySelector('.telephoneT').value
  let email = 'tatuyana.harazduyk@gmail.com'

  let data = {
    name,
    tel,
    email
  }
  if (name < 3 || tel < 4) {
    if (name.length < 3) {
      nametError.style.display = 'block'
    }
    if (tel.length < 4) {
      phonetError.style.display = 'block'
    }
  } else {
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
}


