import animate from './animate';

const companyNums = () => {
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const num3 = document.getElementById('num3');
  const num4 = document.getElementById('num4');

  console.log(num1);
  console.log(num1.value);

  animate({
    duration: 1500,
    timing(timeFraction) {
      return timeFraction;
    },
    draw(progress) {
      num1.textContent = Math.floor(progress * +num1);
      num2.textContent = Math.floor(progress * +num2);
      num3.textContent = Math.floor(progress * +num3);
      num4.textContent = Math.floor(progress * +num4);
    },
  });
};

export default companyNums;
