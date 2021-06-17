// const countTimer = (deadline) => {
//   let timerHours = document.querySelector('#timer-hours'),
//     timerMinutes = document.querySelector('#timer-minutes'),
//     timerSeconds = document.querySelector('#timer-seconds');
//
//   const getTimeRemaining = () => {
//     let dateStop = new Date(deadline).getTime(),
//       dateNow = new Date().getTime(),
//       timeRemaining = (dateStop - dateNow) / 1000,
//       seconds = Math.floor(timeRemaining % 60),
//       minutes = Math.floor((timeRemaining / 60) % 60),
//       hours = Math.floor(timeRemaining / 60 / 60) % 24;
//     // day = Math.floor(timeRemaining / 60 / 60 / 24);
//     return {
//       timeRemaining,
//       hours,
//       minutes,
//       seconds,
//     };
//   };
//
//   const updateClock = () => {
//     let timer = getTimeRemaining();
//
//     timerHours.textContent = timer.hours;
//     timerMinutes.textContent = timer.minutes;
//     timerSeconds.textContent = timer.seconds;
//
//     if (timer.timeRemaining > 0) {
//       setTimeout(updateClock, 1000);
//     }
//   };
//
//   updateClock();
//
//   // console.log(seconds);
//   // console.log(minutes);
//   // console.log(hours);
//   // console.log(day);
// };
//
// countTimer('01 july 2021');
// // setInterval(countTimer, 1000, '01 july 2021');

// Timer
const countTimer = (deadline) => {
  const timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

  let idInterval = 0;

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000;

    let seconds = 0,
      minutes = 0,
      hours = 0;

    if (timeRemaining > 0) {
      seconds = Math.floor(timeRemaining % 60);
      minutes = Math.floor((timeRemaining / 60) % 60);
      hours = Math.floor(timeRemaining / 60 / 60);
    }
    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const addZero = (elem) => {
    if (String(elem).length === 1) {
      return '0' + elem;
    } else {
      return String(elem);
    }
  };

  const updateClock = () => {
    const timer = getTimeRemaining();

    timerHours.textContent = addZero(timer.hours);
    timerMinutes.textContent = addZero(timer.minutes);
    timerSeconds.textContent = addZero(timer.seconds);

    if (timer.timeRemaining < 0) {
      const dateStop = new Date(deadline);

      clearInterval(idInterval);
      dateStop.setDate(dateStop.getDate() + 1);
      countTimer(dateStop);
    }
  };

  idInterval = setInterval(updateClock, 1000);

  setTimeout(updateClock, 0);
};

countTimer('17 Jun 2021');
