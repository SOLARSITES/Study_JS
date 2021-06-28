// Timer
const countTimer = (deadline) => {
  const timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

  let idInterval = 0;

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000;

    let seconds = 0,
      minutes = 0,
      hours = 0;

    if (timeRemaining > 0) {
      seconds = Math.floor(timeRemaining % 60);
      minutes = Math.floor((timeRemaining / 60) % 60);
      hours = Math.floor(timeRemaining / 60 / 60);
    }
    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const addZero = (elem) => {
    if (String(elem).length === 1) {
      return '0' + elem;
    } else {
      return String(elem);
    }
  };

  const updateClock = () => {
    const timer = getTimeRemaining();

    timerHours.textContent = addZero(timer.hours);
    timerMinutes.textContent = addZero(timer.minutes);
    timerSeconds.textContent = addZero(timer.seconds);

    if (timer.timeRemaining < 0) {
      const dateStop = new Date(deadline);

      clearInterval(idInterval);
      dateStop.setDate(dateStop.getDate() + 1);
      countTimer(dateStop);
    }
  };
  updateClock();

  idInterval = setInterval(updateClock, 1000);
};

const animateScroll = () => {
  const target = event.target.closest('[href^="#"]'),
    speed = 0.5;

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

// Menu
const toggleMenu = () => {
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
};

// Popup
const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupContent = document.querySelector('.popup-content'),
    popupData = {
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
    } else {
      target = target.closest('.popup-content');

      if (!target) {
        popup.style.display = 'none';
      }
    }
  });
};

document.querySelector('main>a').addEventListener('click', animateScroll);

// Tabs
const tabs = () => {
  const tabHeader = document.querySelector('.service-header'),
    tab = tabHeader.querySelectorAll('.service-header-tab'),
    tabContent = document.querySelectorAll('.service-tab');

  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tab[i].classList.add('active');
        tabContent[i].classList.remove('d-none');
      } else {
        tab[i].classList.remove('active');
        tabContent[i].classList.add('d-none');
      }
    }
  };

  tabHeader.addEventListener('click', (event) => {
    let target = event.target;

    target = target.closest('.service-header-tab');

    if (target) {
      tab.forEach((item, i) => {
        if (item === target) {
          toggleTabContent(i);
        }
      });
    }
  });
};

// Slider
const slider = () => {
  const slide = document.querySelectorAll('.portfolio-item'),
    dot = document.querySelectorAll('.dot'),
    slider = document.querySelector('.portfolio-content');

  let currentSlide = 0,
    interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');

    currentSlide = currentSlide < slide.length - 1 ? currentSlide + 1 : 0;

    nextSlide(slide, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (time = 2000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target;

    if (target.matches('.portfolio-btn, .dot')) {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
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

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    }
  });

  slider.addEventListener('mouseover', (event) => {
    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', (event) => {
    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
      startSlide();
    }
  });

  startSlide();
};

// Add .dot
const addDot = () => {
  const portfolioItem = document.querySelectorAll('.portfolio-item'),
    portfolioDots = document.querySelector('.portfolio-dots');

  portfolioItem.forEach(() => {
    const dot = document.createElement('li');

    dot.classList.add('dot');
    portfolioDots.appendChild(dot);
  });

  portfolioDots.children[0].classList.add('dot-active');
};

// Change Command Photos
const setCommandImg = () => {
  const command = document.querySelector('#command .row');

  const changingPhotos = () => {
    const target = event.target;

    if (target.classList.contains('command__photo')) {
      const lastSrc = target.src;

      target.src = target.dataset.img;
      target.dataset.img = lastSrc;
    }
  };

  command.addEventListener('mouseover', changingPhotos);
  command.addEventListener('mouseout', changingPhotos);
};

// Create Validation
const createValidation = () => {
  const calcItems = document.querySelectorAll('input.calc-item');
  const form1Name = document.getElementById('form1-name');
  const form2Name = document.getElementById('form2-name');
  const form3Name = document.getElementById('form3-name');
  const form1Email = document.getElementById('form1-email');
  const form2Email = document.getElementById('form2-email');
  const form3Email = document.getElementById('form3-email');
  const form1Phone = document.getElementById('form1-phone');
  const form2Phone = document.getElementById('form2-phone');
  const form3Phone = document.getElementById('form3-phone');
  const form2Message = document.getElementById('form2-message');

  const validateCalcItem = (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
  };

  const validateFormName = (e) => {
    e.target.value = e.target.value
      .replace(/[^а-яё ]/gi, '') // .replace(/[^а-яё -]/gi, '')
      // .replace(/^[ -]+/g, '')
      // .replace(/[ -]+$/g, '')
      .replace(/\s+/g, ' ')
      .split(' ')
      .map((word) => {
        if (word === '') {
          return word;
        }
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(' ');
  };

  const validateFormEmail = (e) => {
    e.target.value = e.target.value
      .replace(/[^a-z@\-_.']/gi, '') // .replace(/[^a-z@\-_.!~*']/gi, '')
      // .replace(/^[ -]+/g, '')
      // .replace(/[ -]+$/g, '')
      .replace(/\s+/g, '');
  };

  const validateFormPhone = (e) => {
    e.target.value = e.target.value.replace(/[^+\d]/g, ''); // .replace(/[^()\-0-9]/g, '')
    // .replace(/^[ -]+/g, '')
    // .replace(/[ -]+$/g, '')
    // .replace(/\s+/g, ' ');
  };

  const validateFormMessage = (e) => {
    e.target.value = e.target.value
      .replace(/[^а-яё\d ,.!?-]/gi, '') // .replace(/[^а-яё -]/gi, '')
      // .replace(/^[ -]+/g, '')
      // .replace(/[ -]+$/g, '')
      .replace(/\s+/g, ' ');
  };

  calcItems.forEach((calcItem) => {
    calcItem.addEventListener('input', validateCalcItem);
  });
  form1Name.addEventListener('input', validateFormName);
  form2Name.addEventListener('input', validateFormName);
  form3Name.addEventListener('input', validateFormName);
  form1Email.addEventListener('input', validateFormEmail);
  form2Email.addEventListener('input', validateFormEmail);
  form3Email.addEventListener('input', validateFormEmail);
  form1Phone.addEventListener('input', validateFormPhone);
  form2Phone.addEventListener('input', validateFormPhone);
  form3Phone.addEventListener('input', validateFormPhone);
  form2Message.addEventListener('input', validateFormMessage);
};

// Animation Function
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

// Calculator
const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcCount = document.querySelector('.calc-count'),
    calcDay = document.querySelector('.calc-day'),
    totalValue = document.getElementById('total');

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

// Send-AJAX-Form
const sendForm = () => {
  const errorMessage = ' Что-то пошло не так...';
  const loadMessage = ' Загрузка...';
  const successMessage = ' Спасибо! Мы скоро с вами свяжемся!';
  const errorImg = './images/message/error.png';
  const loadImg = './images/message/load.gif';
  const successImg = './images/message/success.png';

  const postData = (body, outputData, errorData) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        outputData();
      } else {
        errorData(request.status);
      }
    });

    request.open('POST', './server.php');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(body));
  };

  const clearInput = (idForm) => {
    const form = document.getElementById(idForm);

    [...form.elements]
      .filter((item) => item.tagName.toLowerCase() !== 'button' && item.type !== 'button')
      .forEach((item) => (item.value = ''));
  };

  const processingForm = (idForm) => {
    const form = document.getElementById(idForm);
    const statusMessage = document.createElement('div');
    const img = document.createElement('img');

    statusMessage.style.cssText = 'font-size: 2rem; color: #fff';
    img.height = 28;

    form.addEventListener('submit', (event) => {
      const formData = new FormData(form);
      const body = {};

      event.preventDefault();
      statusMessage.textContent = loadMessage;
      img.src = loadImg;
      statusMessage.insertBefore(img, statusMessage.firstChild);
      form.appendChild(statusMessage);

      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(
        body,
        () => {
          statusMessage.textContent = successMessage;
          img.src = successImg;
          statusMessage.insertBefore(img, statusMessage.firstChild);
          clearInput(idForm);
        },
        (error) => {
          statusMessage.textContent = errorMessage;
          img.src = errorImg;
          statusMessage.insertBefore(img, statusMessage.firstChild);
          console.error(error);
        },
      );
    });
    form.addEventListener('input', createValidation);
  };

  processingForm('form1');
  processingForm('form2');
  processingForm('form3');
};

countTimer('17 Jun 2021');
toggleMenu();
togglePopUp();
tabs();
addDot();
setCommandImg();
createValidation();
calc(100);
slider();
sendForm();
