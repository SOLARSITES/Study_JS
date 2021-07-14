const validInput = () => {
  const correctBase = {
    correctName: true,
    correctTel: true,
  };

  document.body.addEventListener('change', (e) => {
    // Проверяем введенные данные и блокируем отправку, если они некорректны
    const showError = (error) => {
      const selectForm = e.target.closest('form');

      if (selectForm) {
        const submitBtn = selectForm.querySelector('.btn');

        // Меняем цвет обводки инпута, если введенные данные некорректны
        if (error) {
          e.target.style.border = '2px solid #fe193f'; // Error (Red Border)
        } else {
          e.target.style.border = '2px solid #19fe52';
        }

        // Проверяем все инпуты и блокируем кропку "Отправить", если данные некорректны
        if (Object.values(correctBase).every((item) => item)) {
          submitBtn.removeAttribute('disabled');
        } else {
          submitBtn.setAttribute('disabled', 'true');
        }
      }
    };

    // Корректируем введенное имя
    if (e.target.className === 'form-name') {
      const nameData = e.target.value.trim().split(' ');
      let userName = '';
      let baseName = '';

      e.target.value = e.target.value.replace(/\s+/g, ' ');

      nameData.forEach((item) => {
        baseName += `${item.charAt(0).toUpperCase() + item.substring(1)} `;
        userName = baseName.trim();
      });

      // Проверяем корректность ввода имени
      if (userName === ' ') {
        // Обнуляем инпут, если введены только пробелы
        e.target.value = '';
        correctBase.correctName = false;
        showError(true);
      } else if (userName.length < 2) {
        e.target.value = userName;
        correctBase.correctName = false;
        showError(true);
      } else {
        e.target.value = userName;
        correctBase.correctName = true;
        showError(false);
      }
    }

    // Проверяем корректность ввода телефона
    if (e.target.className === 'form-phone') {
      const corrNum = e.target.value.replace(/[\s\+\(\)-]*/g, '');

      e.target.value = e.target.value.replace(/^\+\d{1}\s/g, '+7 ');

      // Проееряем количество цифр в телефоне
      if (corrNum.length < 11) {
        correctBase.correctTel = false;
        showError(true);
      } else {
        correctBase.correctTel = true;
        showError(false);
      }
    }
  });
};

export default validInput;
