const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcCount = document.querySelector('.calc-count'),
    calcDay = document.querySelector('.calc-day'),
    totalValue = document.getElementById('total');

  const animate = ({ timing, draw, duration }) => {
    const start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;

      if (timeFraction > 1) timeFraction = 1;

      const progress = timing(timeFraction);

      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  };

  const countSum = () => {
    let total = 0;
    let countValue = 1;
    let dayValue = 10;

    const typeValue = calcType.options[calcType.selectedIndex].value;
    const squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (!!typeValue && !!squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
    }

    animate({
      duration: 1500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        totalValue.textContent = Math.floor(progress * +total);
      },
    });
  };

  calcBlock.addEventListener('change', (event) => {
    const target = event.target;

    if (
      target.matches('.calc-type') ||
      target.matches('.calc-square') ||
      target.matches('.calc-count') ||
      target.matches('.calc-day')
    ) {
      countSum();
    }
  });
};

export default calc;
