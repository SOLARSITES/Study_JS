const accordion = () => {
  const accordionElements = document.querySelectorAll('.accordeon .element');

  // Переключаем элементы аккордиона
  const toggleElement = (element, elementContent) => {
    element.classList.toggle('active'); // включаем стили активного элемента
    if (element.classList.contains('active')) {
      elementContent.style.display = 'block'; // показываем контент
    } else {
      elementContent.style.display = 'none'; // скрываем контент
    }
  };

  // Скрываем соседние элементы аккордиона при клике на текущий элемент
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
