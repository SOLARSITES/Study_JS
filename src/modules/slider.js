const slider = () => {
  const topSlider = document.querySelector('.top-slider');
  const slide = document.querySelectorAll('.top-slider-item');
  const topSliderDots = document.querySelector('.top-slider-dots');

  const newDot = document.createElement('li');

  let currentSlide = 0;
  let interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };
  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlider = () => {
    prevSlide(slide, currentSlide, 'top-slider-item-active');
    prevSlide(topSliderDots.childNodes, currentSlide, 'dot-active');
    currentSlide++;
    if (currentSlide >= slide.length) currentSlide = 0;
    nextSlide(slide, currentSlide, 'top-slider-item-active');
    nextSlide(topSliderDots.childNodes, currentSlide, 'dot-active');
  };

  const startSlider = (time = 3000) => {
    interval = setInterval(autoPlaySlider, time);
  };
  const stopSlider = () => {
    clearInterval(interval);
  };

  topSlider.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;

    if (!target.matches('.top-slider-btn, .dot')) {
      return;
    }
    prevSlide(slide, currentSlide, 'top-slider-item-active');
    prevSlide(topSliderDots.childNodes, currentSlide, 'dot-active');

    if (target.matches('#arrow_right')) {
      currentSlide++;
    } else if (target.matches('#arrow_left')) {
      currentSlide--;
    } else if (target.matches('.dot')) {
      topSliderDots.childNodes.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide, 'top-slider-item-active');
    nextSlide(topSliderDots.childNodes, currentSlide, 'dot-active');
  });

  topSlider.addEventListener('mouseover', (e) => {
    if (e.target.matches('.top-slider-btn, .dot')) {
      stopSlider();
    }
  });
  topSlider.addEventListener('mouseout', (e) => {
    if (e.target.matches('.top-slider-btn, .dot')) {
      startSlider(3000);
    }
  });

  newDot.className = 'dot';
  for (let i = 0; i < slide.length; i++) {
    const cloneDot = newDot.cloneNode();
    topSliderDots.append(cloneDot);
  }
  topSliderDots.childNodes[currentSlide].classList.add('dot-active');

  startSlider(3000);
};

export default slider;
