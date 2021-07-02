const toggleMenu = () => {
  const animateScroll = () => {
    const target = event.target.closest('[href^="#"]'),
      speed = 0.25;

    if (target) {
      const pageY = window.pageYOffset,
        hash = target.href.replace(/[^#]+(.*)/, '$1'),
        distTopPosition = document.querySelector(hash).getBoundingClientRect().top;

      let start = 0;

      const step = (time) => {
        if (!start) start = time;

        const progress = time - start;

        const r =
          distTopPosition < 0
            ? Math.max(pageY - progress / speed, pageY + distTopPosition)
            : Math.min(pageY + progress / speed, pageY + distTopPosition);

        window.scrollTo(0, r);

        if (r < pageY + distTopPosition) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    }
  };

  const handlerMenu = () => {
    const target = event.target;

    const displayMenu = () => {
      document.querySelector('menu').classList.toggle('active-menu');
    };

    if (
      target.closest('.menu') ||
      (!target.closest('menu') && document.querySelector('menu').classList.contains('active-menu'))
    ) {
      displayMenu();
    } else if (target.closest('menu') && target.closest('[href^="#"]')) {
      displayMenu();

      if (!target.classList.contains('close-btn')) {
        animateScroll();
      }
    }
  };

  document.body.addEventListener('click', handlerMenu);
  document.querySelector('menu a').addEventListener('click', (event) => {
    event.preventDefault();
  });
  document.querySelectorAll('menu li a').forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });
  document.querySelector('main a').addEventListener('click', (event) => {
    event.preventDefault();
    animateScroll();
  });
};

export default toggleMenu;
