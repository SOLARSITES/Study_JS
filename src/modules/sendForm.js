const sendForm = () => {
  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include',
    });
  };

  const clearInput = (form) => {
    [...form.elements]
      .filter((item) => item.tagName.toLowerCase() !== 'button' && item.type !== 'button')
      .forEach((item) => (item.value = ''));
  };

  const createValidation = () => {
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
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');

    const validateFormNameInput = (e) => {
      e.target.value = e.target.value
        .replace(/[^а-яё ]/gi, '')
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

    const validateFormNameBlur = (e) => {
      if (e.target.value.length < 2) {
        e.target.value = '';
      }
    };

    const validateFormEmail = (e) => {
      e.target.value = e.target.value.replace(/[^a-z@\-_.']/gi, '').replace(/\s+/g, '');
    };

    const validateFormPhoneInput = (e) => {
      e.target.value = e.target.value.replace(/[^+\d]/g, '').replace(/\++/g, '+');
    };

    const validateFormPhoneBlur = (e) => {
      if (e.target.value.length < 4 || e.target.value.length > 11) {
        e.target.value = '';
      }
    };

    const validateFormMessage = (e) => {
      e.target.value = e.target.value.replace(/[^а-яё\d ,.!?-]/gi, '').replace(/\s+/g, ' ');
    };

    const validateForm1Submit = (e) => {
      const formInputs = [form1Name, form1Email, form1Phone];

      formInputs.forEach((item) => {
        if (item.value === '') {
          e.preventDefault();
        }
      });
    };

    const validateForm2Submit = (e) => {
      const formInputs = [form2Name, form2Email, form2Phone, form2Message];

      formInputs.forEach((item) => {
        if (item.value === '') {
          e.preventDefault();
        }
      });
    };

    const validateForm3Submit = (e) => {
      const formInputs = [form3Name, form3Email, form3Phone];

      formInputs.forEach((item) => {
        if (item.value === '') {
          e.preventDefault();
        }
      });
    };

    form1Name.addEventListener('input', validateFormNameInput);
    form2Name.addEventListener('input', validateFormNameInput);
    form3Name.addEventListener('input', validateFormNameInput);
    form1Name.addEventListener('blur', validateFormNameBlur);
    form2Name.addEventListener('blur', validateFormNameBlur);
    form3Name.addEventListener('blur', validateFormNameBlur);
    form1Email.addEventListener('input', validateFormEmail);
    form2Email.addEventListener('input', validateFormEmail);
    form3Email.addEventListener('input', validateFormEmail);
    form1Phone.addEventListener('input', validateFormPhoneInput);
    form2Phone.addEventListener('input', validateFormPhoneInput);
    form3Phone.addEventListener('input', validateFormPhoneInput);
    form1Phone.addEventListener('blur', validateFormPhoneBlur);
    form2Phone.addEventListener('blur', validateFormPhoneBlur);
    form3Phone.addEventListener('blur', validateFormPhoneBlur);
    form2Message.addEventListener('input', validateFormMessage);
    form1.addEventListener('submit', validateForm1Submit);
    form2.addEventListener('submit', validateForm2Submit);
    form3.addEventListener('submit', validateForm3Submit);
  };

  const processingForm = (form) => {
    const statusMessage = document.createElement('div');
    let interval = 0;

    const clearStatus = () => {
      statusMessage.textContent = '';
      clearInterval(interval);
    };

    const showStatus = (status) => {
      const img = document.createElement('img');
      const getTimeout = 5000;

      const statusList = {
        load: {
          message: ' Загрузка...',
          img: './images/message/load.gif',
        },
        error: {
          message: ' Что-то пошло не так...',
          img: './images/message/error.png',
        },
        success: {
          message: ' Спасибо! Мы скоро с вами свяжемся!',
          img: './images/message/success.png',
        },
      };
      statusMessage.textContent = statusList[status].message;
      img.src = statusList[status].img;
      img.style.cssText = 'width: 28px; margin-right: 0.7rem;';

      statusMessage.insertBefore(img, statusMessage.firstChild);

      if (status === 'success' || status === 'error') {
        interval = setInterval(clearStatus, getTimeout);
      } else if (interval > 0) {
        clearInterval(interval);
      }
    };

    statusMessage.style.cssText =
      'color: #fff; font-size: 1.7rem; margin: 1rem 0; display: flex; align-items: center; justify-content: center;';

    form.addEventListener('submit', (event) => {
      const formData = new FormData(form);
      const body = {};

      event.preventDefault();
      form.appendChild(statusMessage);

      showStatus('load');

      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(`Network status: ${response.status}`);
          }
          showStatus('success');
          clearInput(form);
        })
        .catch((error) => {
          showStatus('error');
          console.error(error);
        });
    });
    form.addEventListener('input', createValidation);
  };

  document.querySelectorAll('form').forEach((elem) => {
    processingForm(elem);
  });
};

export default sendForm;
