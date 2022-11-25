import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const $btnDataStart = document.querySelector('button[data-start]');
$btnDataStart.disabled = true;

const $days = document.querySelector('span[data-days]');
const $hours = document.querySelector('span[data-hours]');
const $minutes = document.querySelector('span[data-minutes]');
const $seconds = document.querySelector('span[data-seconds]');

let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (selectedDates[0] <= new Date()) {
      $btnDataStart.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      $btnDataStart.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => {
  if (value.length === 1) {
    return value.padStart(2, '0');
  } else {
    return value;
  }
};

const timeCounter = () => {
  $btnDataStart.disabled = true;
  let timerId = setInterval(() => {
    const timeObject = convertMs(userSelectedDate - new Date());
    if (
      timeObject.days >= 0 &&
      timeObject.hours >= 0 &&
      timeObject.minutes >= 0 &&
      timeObject.seconds >= 0
    ) {
      $seconds.innerHTML = addLeadingZero(String(timeObject.seconds));
      $minutes.innerHTML = addLeadingZero(String(timeObject.minutes));
      $hours.innerHTML = addLeadingZero(String(timeObject.hours));
      $days.innerHTML = addLeadingZero(String(timeObject.days));
    } else {
      clearInterval(timerId);
    }
  }, 1000);
};

$btnDataStart.addEventListener('click', timeCounter);
