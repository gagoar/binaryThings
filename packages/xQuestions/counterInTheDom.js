// / Add your javascript here
// Input -> 5sec -> 5 ,4..0
// Puause, resume
var seconds = 0;
var killerCounter;

let input = document.getElementById('seconds');
let button = document.getElementById('control');
let counter = document.getElementById('counter');


const decrementCounter = () => {
  if (seconds) {
    seconds -= 1;
    counter.innerHTML = seconds;
  } else {
    window.clearInterval(killerCounter);
  }
}

const start = () => {
  seconds = seconds ||  Number(input.value);
  if (seconds) {
    killerCounter = window.setInterval(decrementCounter, 1000);
  }
};

const stop = () => {
  window.clearInterval(killerCounter);
  killerCounter = undefined;
};

const handleChange = (e) => {
  if (killerCounter) {
    stop();
    seconds = e.currentTarget.value;
  }
  start();
};

const handlePasueStart = (e) => {
  if (killerCounter) {
    stop();
  } else {
    start();
  }
}

input.addEventListener('change', handleChange);
button.addEventListener('click', handlePasueStart);
