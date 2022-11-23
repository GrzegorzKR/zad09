import Notiflix from 'notiflix';

const $submitBtn = document.querySelector('button');
const $delayInput = document.querySelector('input[name="delay"]');
const $stepInput = document.querySelector('input[name="step"]');
const $amountInput = document.querySelector('input[name="amount"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

const generatePromises = event => {
  event.preventDefault();

  let acc = Number($delayInput.value - $stepInput.value);
  console.log(acc);

  for (let i = 1; i <= $amountInput.value; i++) {
    createPromise(i, (acc += Number($stepInput.value)))
      .then(value => Notiflix.Notify.success(value))
      .catch(error => Notiflix.Notify.failure(error));
  }
};

$submitBtn.addEventListener('click', generatePromises);
