export function showMask() {
  if (document.body.querySelectorAll('.nil-mask').length === 0) {
    const div = document.createElement('div')
    div.classList.add('nil-mask', 'animate__opcity120')
    document.body.appendChild(div)
    setTimeout(function () {
      div.classList.remove('animate__opcity120')
    }, 300)
  }
}

export function closeMask() {
  if (document.body.querySelectorAll('.nil-mask').length > 0) {
    const div = document.body.querySelector('.nil-mask')
    div.classList.add('animate__opcity021')
    setTimeout(function () {
      div.remove()
    }, 300)
  }
}
