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

    const validateFormName = (e) => {
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

    const validateFormEmail = (e) => {
      e.target.value = e.target.value.replace(/[^a-z@\-_.']/gi, '').replace(/\s+/g, '');
    };

    const validateFormPhone = (e) => {
      e.target.value = e.target.value.replace(/[^+\d]/g, '');
    };

    const validateFormMessage = (e) => {
      e.target.value = e.target.value.replace(/[^а-яё\d ,.!?-]/gi, '').replace(/\s+/g, ' ');
    };

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

  const processingForm = (form) => {
    const statusMessage = document.createElement('div');

    const showStatus = (status) => {
      const img = document.createElement('img');

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
    };

    statusMessage.style.cssText =
      'color: #fff; font-size: 1.7rem; margin: 1rem 0; display: flex; align-items: center; justify-content: center;';

    form.addEventListener('submit', (event) => {
      const formData = new FormData(form);
      const body = {};

      event.preventDefault();
      showStatus('load');
      form.appendChild(statusMessage);

      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(`Network status: ${response.status}`);
          }

          showStatus('success');

          setTimeout(() => {
            statusMessage.remove();
          }, 5000);

          clearInput(form);
        })
        .catch((error) => {
          showStatus('error');

          setTimeout(() => {
            statusMessage.remove();
          }, 5000);

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
