import blockScroll from '../modules/blockScroll';

const { disableScroll, enableScroll } = blockScroll;

const burgerMenu = () => {
  const body = document.querySelector('body');
  const menu = document.querySelector('.mobile-menu');

  const handlerMenu = () => {
    if (!menu.classList.contains('mobile-menu-open')) {
      menu.classList.add('mobile-menu-open');
      disableScroll();
    } else {
      menu.classList.remove('mobile-menu-open');
      enableScroll();
    }
  };

  body.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('mobile-menu-close')) {
      menu.classList.remove('mobile-menu-open');
      enableScroll();
    }
    if (menu.classList.contains('mobile-menu-open')) {
      if (target.closest('.mobile-menu')) {
        target = target.closest('a');
        if (target) handlerMenu();
      } else {
        handlerMenu();
      }
    } else {
      if (target.closest('.mob-menu-btn')) {
        handlerMenu();
      }
    }
  });
};

export default burgerMenu;
