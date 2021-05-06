// import './styles.css';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttonStartEl = document.querySelector('button[data-action="start"]');
const buttonStopEl = document.querySelector('button[data-action="stop"]');

buttonStartEl.addEventListener('click', onButtonStartClick);
buttonStopEl.addEventListener('click', onButtonStopClick);

let timerId;
function onButtonStartClick() {
  timerId = setInterval(
    () =>
      (document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)]),
    1000,
  );
  // console.log('start!');
  buttonStartEl.removeEventListener('click', onButtonStartClick);
}

function onButtonStopClick() {
  // console.log('stop!');
  clearInterval(timerId);
  buttonStartEl.addEventListener('click', onButtonStartClick);
}
