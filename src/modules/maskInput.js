import maskPhone from './maskPhone';

const maskInput = () => {
  document.body.addEventListener('input', (e) => {
    // Разрешаем только кириллицу, пробел и дефис при вводе имени
    if (e.target.className === 'form-name') {
      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ-\s]/g, '');
    }
    // Навешиваем маску-шаблон при вводе номера телефона
    if (e.target.className === 'form-phone') {
      maskPhone('.form-phone');
    }
  });
};

export default maskInput;
