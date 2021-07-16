import animate from './animate';

const companyNums = () => {
  const sectionCompanyNums = document.getElementById('nums');
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const num3 = document.getElementById('num3');
  const num4 = document.getElementById('num4');

  const companyNum1 = +num1.textContent;
  const companyNum2 = +num2.textContent;
  const companyNum3 = +num3.textContent;
  const companyNum4 = +num4.textContent;

  num1.textContent = 5000;
  num2.textContent = 50;
  num3.textContent = 30;
  num4.textContent = 3000;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;

    if (
      scrollTop >= sectionCompanyNums.offsetTop - 150 &&
      scrollTop < sectionCompanyNums.offsetTop - 100
    ) {
      setTimeout(() => {
        animate({
          duration: 1500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            if (progress > 0) {
              num1.textContent = Math.floor(progress * companyNum1);
              num2.textContent = Math.floor(progress * companyNum2);
              num3.textContent = Math.floor(progress * companyNum3);
              num4.textContent = Math.floor(progress * companyNum4);
            }
          },
        });
      }, 200);
    }
  });
};

export default companyNums;
