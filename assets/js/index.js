let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let ms = document.querySelector('.ms');

let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let resetBtn = document.querySelector('.reset');

let msCount = 0, secCount = 0, minCount = 0, hourCount = 0;
let intervalId = null;

// Start Timer
startBtn.addEventListener('click', () => {
  if (intervalId) return; // avoid multiple intervals

  intervalId = setInterval(() => {
    msCount++;

    if (msCount == 100) {
      msCount = 0;
      secCount++;
    }

    if (secCount == 60) {
      secCount = 0;
      minCount++;
    }

    if (minCount == 60) {
      minCount = 0;
      hourCount++;
    }

    ms.textContent = msCount;
    sec.textContent = secCount;
    min.textContent = minCount;
    hour.textContent = hourCount;
  }, 10); // 1000 = 1s
});

// Stop Timer
stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
});

// Reset Timer
resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;

  msCount = 0;
  secCount = 0;
  minCount = 0;
  hourCount = 0;

  // Reset display with 2-digit formatting
  ms.textContent = '00';
  sec.textContent = '00';
  min.textContent = '00';
  hour.textContent = '00';
});
