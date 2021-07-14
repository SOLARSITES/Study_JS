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
    const applicationInput = document.getElementById('applicationInput');

    [...form.elements]
      .filter((item) => item.tagName.toLowerCase() !== 'button' && item.type !== 'button')
      .forEach((item) => {
        if (item !== applicationInput) {
          item.value = '';
          item.removeAttribute('style');
        }
      });
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
          message: ' Отправка данных...',
          img: './images/load.gif',
        },
        error: {
          message: ' Ошибка отправки, попробуйте ещё раз позже!',
          img: './images/error.png',
        },
        success: {
          message: ' Ваши данные успешно отправлены!',
          img: './images/success.png',
        },
      };

      statusMessage.textContent = statusList[status].message;
      img.src = statusList[status].img;
      img.style.cssText = 'width: 30px; margin-right: 0.7rem;';

      statusMessage.insertBefore(img, statusMessage.firstChild);

      if (status === 'success' || status === 'error') {
        interval = setInterval(clearStatus, getTimeout);
      } else if (interval > 0) {
        clearInterval(interval);
      }
    };

    statusMessage.style.cssText =
      'color: #000; font-size: 1.5rem; margin: 0.5rem 0 1rem; display: flex; align-items: center; justify-content: flex-start;';

    form.addEventListener('submit', (e) => {
      const formData = new FormData(form);
      const body = {};

      e.preventDefault();
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
  };

  document.querySelectorAll('form').forEach((elem) => {
    processingForm(elem);
  });
};

export default sendForm;
