import animate from './animate';
import blockScroll from '../modules/blockScroll';

const { disableScroll, enableScroll } = blockScroll;

const modalOrder = () => {
  const servicesCarousel = document.querySelector('.services-carousel');
  const modalApplication = document.querySelector('.modal-application');
  const modalOverlay = document.querySelector('.modal-overlay');
  const applicationInput = document.getElementById('applicationInput');

  const openModal = () => {
    modalApplication.style.transform = 'translate(-50%, -195%)';
    modalOverlay.style.opacity = '0';

    modalApplication.style.display = 'block';
    modalOverlay.style.display = 'block';

    animate({
      duration: 450,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modalApplication.style.transform = `translate(-50%, ${(1 - progress) * -195 - 66}%)`;
        modalOverlay.style.opacity = progress;
      },
    });

    disableScroll();
  };

  const closeModal = () => {
    modalApplication.style.display = 'none';
    modalOverlay.style.display = 'none';

    modalApplication.style.transform = 'translate(-50%, -195%)';
    modalOverlay.style.opacity = '0';

    enableScroll();
  };

  servicesCarousel.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;

    if (target.matches('.fancyboxModal')) {
      applicationInput.value = target.dataset.application;
      openModal();
    }
  });

  modalApplication.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.modal-close')) {
      closeModal();
    }
  });

  modalOverlay.addEventListener('click', (e) => {
    const target = e.target;

    if (target.matches('.modal-overlay')) {
      closeModal();
    }
  });
};

export default modalOrder;
