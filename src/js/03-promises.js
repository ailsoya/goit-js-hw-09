import Notiflix from 'notiflix'

const firstDelay = document.querySelector('[name="delay"]')
const delayStep = document.querySelector('[name="step"]')
const amount = document.querySelector('[name="amount"]')
const startBtn = document.querySelector('button')

startBtn.addEventListener('submit', createPromise)

function createPromise(position, delay) {
  preventDefault()
  console.log('лох')
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
