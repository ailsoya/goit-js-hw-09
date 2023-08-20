const backround = document.querySelector("body")
const startButton = document.querySelector("button[data-start]");
const stopButton = document.querySelector("button[data-stop]");

startButton.addEventListener('click', changingColors)

stopButton.disabled = true

function changingColors() {
    backround.style.backgroundColor = getRandomHexColor()
    startButton.disabled = true
    stopButton.disabled = false
    timerId = setInterval(() => {
        backround.style.backgroundColor = getRandomHexColor()
    }, 1000)

    stopButton.addEventListener('click', () => {
        stopButton.disabled = true
        startButton.disabled = false
        clearInterval(timerId)
    })
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}