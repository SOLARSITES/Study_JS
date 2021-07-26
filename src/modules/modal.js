import animate from './animate';
import blockScroll from '../modules/blockScroll';

const { disableScroll, enableScroll } = blockScroll;

const modal = () => {
  const modalCallback = document.querySelector('.modal-callback');
  const modalOverlay = document.querySelector('.modal-overlay');

  document.addEventListener('click', (e) => {
    if (e.target.matches('.callback-btn') || e.target.matches('.button-services')) {
      modalCallback.style.transform = 'translate(-50%, -195%)';
      modalOverlay.style.opacity = '0';

      modalCallback.style.display = 'block';
      modalOverlay.style.display = 'block';

      animate({
        duration: 450,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modalCallback.style.transform = `translate(-50%, ${(1 - progress) * -195 - 55}%)`;
          modalOverlay.style.opacity = progress;
        },
      });

      disableScroll();
    }

    if (e.target.closest('.modal-close') || e.target.matches('.modal-overlay')) {
      modalCallback.style.display = 'none';
      modalOverlay.style.display = 'none';

      modalCallback.style.transform = 'translate(-50%, -195%)';
      modalOverlay.style.opacity = '0';

      enableScroll();
    }
  });
};

export default modal;
