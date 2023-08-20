import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
import Notiflix from 'notiflix'

const datePick = document.querySelector("#datetime-picker")
const startBtn = document.querySelector("button[data-start]")

const daysTimer = document.querySelector("span[data-days]")
const hoursTimer = document.querySelector("span[data-hours]")
const minutesTimer = document.querySelector("span[data-minutes]")
const secondsTimer = document.querySelector("span[data-seconds]")

const currentDate = new Date()
startBtn.disabled = true

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

const userTime = flatpickr(datePick, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        if (selectedDates[0].getTime() < currentDate.getTime()) {
            Notiflix.Report.warning(
                'WARNING!',
                'Please choose a date in the future',
                'Ok'
            )
        } else {
            startBtn.disabled = false
            startBtn.addEventListener('click', () => {
                const timerId = setInterval(() => {
                    let nowTime = new Date()
                    let ms = selectedDates[0].getTime() - nowTime.getTime()

                    daysTimer.textContent = String(convertMs(ms).days).padStart(2, '0')
                    hoursTimer.textContent = String(convertMs(ms).hours).padStart(2, '0')
                    minutesTimer.textContent = String(convertMs(ms).minutes).padStart(2, '0')
                    secondsTimer.textContent = String(convertMs(ms).seconds).padStart(2, '0')

                    if (ms < 1000) {
                        clearInterval(timerId)
                        hoursTimer.textContent = '00'
                        minutesTimer.textContent = '00'
                    }
                }, 1000)
            })
        }
    },
})