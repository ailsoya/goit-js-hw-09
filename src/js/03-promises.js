import Notiflix from 'notiflix'

const firstDelay = document.querySelector('[name="delay"]')
const delayStep = document.querySelector('[name="step"]')
const Amount = document.querySelector('[name="amount"]')
const form = document.querySelector('.form')

form.addEventListener('submit', (evt) => {
  evt.preventDefault()
  let delay = Number(firstDelay.value)
  const step = Number(delayStep.value)
  const amount = Number(Amount.value)
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
    delay += step
  }
})

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  })

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
    })
}
