import blockScroll from '../modules/blockScroll';

const { disableScroll, enableScroll } = blockScroll;

const modal = () => {
  const modalCallback = document.querySelector('.modal-callback');
  const modalOverlay = document.querySelector('.modal-overlay');

  document.addEventListener('click', (e) => {
    if (e.target.matches('.callback-btn') || e.target.matches('.button-services')) {
      modalCallback.style.display = 'block';
      modalOverlay.style.display = 'block';
      disableScroll();
    }

    if (e.target.closest('.modal-close') || e.target.matches('.modal-overlay')) {
      modalCallback.style.display = 'none';
      modalOverlay.style.display = 'none';
      enableScroll();
    }
  });
};

export default modal;
