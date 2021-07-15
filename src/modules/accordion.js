const accordion = () => {
  const accordionElements = document.querySelectorAll('.accordeon .element');

  // Переключаем элементы аккордеона
  const toggleElement = (element, elementContent) => {
    element.classList.toggle('active'); // Активируем стили активного элемента

    if (element.classList.contains('active')) {
      elementContent.style.display = 'block'; // Показываем контент элемента
    } else {
      elementContent.style.display = 'none'; // Скрываем контент элемента
    }
  };

  // Скрываем соседние элементы аккордеона при клике на текущий элемент
  const hideElements = (element) => {
    // Берем соседние элементы, исключая активный
    const notClickedElements = [...accordionElements].filter((item) => item !== element);

    // Скрываем соседние элементы
    notClickedElements.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        item.childNodes[3].style.display = 'none';
      }
    });
  };

  accordionElements.forEach((element) => {
    const elementContent = element.childNodes[3];

    element.addEventListener('click', (e) => {
      if (e.target.closest('.accordeon .element')) {
        toggleElement(element, elementContent);

        if (element.classList.contains('active')) {
          hideElements(element);
        }
      }
    });
  });
};

export default accordion;
