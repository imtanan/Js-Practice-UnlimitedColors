let intervalId;

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

function randomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
}

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
      console.log(document.body.style.backgroundColor);
    }, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

startBtn.addEventListener('click', startChangingColor);
stopBtn.addEventListener('click', stopChangingColor);
