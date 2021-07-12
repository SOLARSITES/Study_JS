import blockScroll from '../modules/blockScroll';

const { disableScroll, enableScroll } = blockScroll;

const modalOrder = () => {
  const servicesCarousel = document.querySelector('.services-carousel');
  const modalApplication = document.querySelector('.modal-application');
  const modalOverlay = document.querySelector('.modal-overlay');
  const applicationInput = document.getElementById('applicationInput');

  const openModal = () => {
    modalApplication.style.display = 'block';
    modalOverlay.style.display = 'block';
    disableScroll();
  };

  const closeModal = () => {
    modalApplication.style.display = 'none';
    modalOverlay.style.display = 'none';
    enableScroll();
  };

  servicesCarousel.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;

    if (target.matches('.fancyboxModal')) {
      applicationInput.value = target.dataset.application;
      openModal();
    }
  });

  modalApplication.addEventListener('click', (event) => {
    const target = event.target;

    if (target.closest('.modal-close')) {
      closeModal();
    }
  });

  modalOverlay.addEventListener('click', (event) => {
    const target = event.target;

    if (target.matches('.modal-overlay')) {
      closeModal();
    }
  });
};

export default modalOrder;
