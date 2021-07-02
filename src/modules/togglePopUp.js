const togglePopUp = () => {
  const html = document.querySelector('html');
  const popup = document.querySelector('.popup');
  const popupBtn = document.querySelectorAll('.popup-btn');
  const popupContent = document.querySelector('.popup-content');
  const popupData = {
    count: -445,
    speed: 20,
    startPos: -445,
    endPos: 0,
  };

  const showPopup = () => {
    popupData.startPos > popupData.endPos
      ? (popupData.count -= popupData.speed)
      : (popupData.count += popupData.speed);
    popupContent.style.transform = `translateY(${popupData.count}px)`;

    if (
      popupData.startPos > popupData.endPos
        ? popupData.count > popupData.endPos
        : popupData.count < popupData.endPos
    ) {
      requestAnimationFrame(showPopup);
    }
  };

  popupContent.style.left = `calc(50% - 20rem)`;

  popupBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      popup.style.display = 'block';
      html.style.cssText = 'overflow-y: hidden; margin-right: 15px';

      if (screen.width > 768) {
        popupData.count = popupData.startPos;
        requestAnimationFrame(showPopup);
      }
    });
  });

  popup.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
      html.style.cssText = 'overflow-y: visible;';
    } else {
      target = target.closest('.popup-content');

      if (!target) {
        popup.style.display = 'none';
        html.style.cssText = 'overflow-y: visible;';
      }
    }
  });
};

export default togglePopUp;
