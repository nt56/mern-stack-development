let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let mSeconds = document.getElementById("milliseconds");
let timer;

const handleStart = () => {
  timer = setInterval(() => {
    //every 10ms it will add 1 to the mSeconds
    mSeconds.innerHTML = parseInt(mSeconds.innerHTML) + 1;

    //if mSeconds is 100, it will reset to 0 and add 1 to seconds
    if (parseInt(mSeconds.innerHTML) === 100) {
      mSeconds.innerHTML = 0;
      seconds.innerHTML = parseInt(seconds.innerHTML) + 1;
    }

    //if seconds is 60, it will reset to 0 and add 1 to minutes
    if (parseInt(seconds.innerHTML) === 60) {
      seconds.innerHTML = 0;
      minutes.innerHTML = parseInt(minutes.innerHTML) + 1;
    }

    //if minutes is 60, it will reset to 0 and add 1 to hours
    if (parseInt(minutes.innerHTML) === 60) {
      minutes.innerHTML = 0;
      hours.innerHTML = parseInt(hours.innerHTML) + 1;
    }
  }, 10);
};

//clearInterval will stop the timer
const handleStop = () => {
  clearInterval(timer);
};

//clearInterval will stop the timer and reset the values to 0
const handleReset = () => {
  clearInterval(timer);
  hours.innerHTML = 0;
  minutes.innerHTML = 0;
  seconds.innerHTML = 0;
  mSeconds.innerHTML = 0;
};
