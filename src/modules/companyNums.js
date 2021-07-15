import animate from './animate';

const companyNums = () => {
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const num3 = document.getElementById('num3');
  const num4 = document.getElementById('num4');

  animate({
    duration: 2000,
    timing(timeFraction) {
      return timeFraction;
    },
    draw(progress) {
      num1.textContent = Math.floor(progress * 5000);
      num2.textContent = Math.floor(progress * 50);
      num3.textContent = Math.floor(progress * 30);
      num4.textContent = Math.floor(progress * 3000);
    },
  });
};

export default companyNums;
