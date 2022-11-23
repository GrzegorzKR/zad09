const $btnStart = document.querySelector("button[data-start]");
const $btnStop = document.querySelector("button[data-stop]");
const $body = document.querySelector("body");

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let timer = null;

const colorMixerStart = () => {
  timer = setInterval(() => {
    console.log(getRandomHexColor());
    $body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  $btnStart.disabled = true;
  $btnStop.disabled = false;
};

const colorMixerStop = () => {
  clearInterval(timer);
  $btnStart.disabled = false;
  $btnStop.disabled = true;
};

$btnStart.addEventListener("click", colorMixerStart);
$btnStop.addEventListener("click", colorMixerStop);