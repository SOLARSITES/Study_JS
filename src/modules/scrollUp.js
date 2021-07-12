const scrollUp = () => {
  const sectionServices = document.getElementById('services');
  const buttonUp = document.querySelector('.up');

  let scrolled;
  let timer;
  const speedScroll = 20;

  const scrollToTop = () => {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - speedScroll;
      timer = setTimeout(() => {
        scrollToTop();
      });
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  };

  buttonUp.style.display = 'none';

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= sectionServices.offsetTop - 100) {
      buttonUp.style.display = 'block';
    } else {
      buttonUp.style.display = 'none';
    }
  });

  buttonUp.addEventListener('click', () => {
    scrolled = window.pageYOffset;
    scrollToTop();
  });
};

export default scrollUp;
