window.addEventListener('DOMContentLoaded', () => {
  // Timer
  function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60) % 24;
      // day = Math.floor(timeRemaining / 60 / 60 / 24);
      return {
        timeRemaining,
        hours,
        minutes,
        seconds,
      };
    }

    // timerHours.textContent = hours;
    // timerMinutes.textContent = minutes;
    // timerSeconds.textContent = seconds;

    console.log(getTimeRemaining());
    // console.log(seconds);
    // console.log(minutes);
    // console.log(hours);
    // console.log(day);
  }

  // countTimer();
  // setInterval(countTimer, 1000, '01 july 2021');
});
