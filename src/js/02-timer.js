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

const addLeadingZero = fieldValue => {
  if (fieldValue.length === 1) {
    return fieldValue.padStart(2, '0');
  } else {
    return fieldValue;
  }
};

const timeCounter = () => {
  let timerId = setInterval(() => {
    const timeObject = convertMs(userSelectedDate - new Date());
    console.log(timeObject);
    $seconds.innerHTML = addLeadingZero(timeObject.seconds);
    $minutes.innerHTML = addLeadingZero(timeObject.minutes);
    $hours.innerHTML = addLeadingZero(timeObject.hours);
    $days.innerHTML = addLeadingZero(timeObject.days);
  }, 1000);
};

$btnDataStart.addEventListener('click', timeCounter);