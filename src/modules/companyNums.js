import animate from './animate';

const companyNums = () => {
  const sectionCompanyNums = document.getElementById('nums');
  const sectionWorkScheme = document.getElementById('scheme');
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const num3 = document.getElementById('num3');
  const num4 = document.getElementById('num4');

  const companyNum1 = +num1.textContent;
  const companyNum2 = +num2.textContent;
  const companyNum3 = +num3.textContent;
  const companyNum4 = +num4.textContent;

  num1.textContent = 0;
  num2.textContent = 0;
  num3.textContent = 0;
  num4.textContent = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;

    if (
      scrollTop >= sectionCompanyNums.offsetTop - 110 &&
      scrollTop < sectionWorkScheme.offsetTop
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
      }, 300);
    }
  });
};

export default companyNums;
