const filterByType = (type, ...values) => values.filter((value) => typeof value === type), // Объявляем функцию filterByType через function expression, с аргументом type и собираем при помощи рест-параметра ...values все остальные аргументы из псевдомассива arguments, применяем к аргументам метод .filter(), который вызывает анонимную коллбэк-функцию с параметром value, определяем строгим равенством тип данных type для value при помощи оператора typeof
  hideAllResponseBlocks = () => {
    // Объявляем функцию hideAllResponseBlocks через function expression, без аргументов
    const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block')); // Получаем из DOM при помощи querySelectorAll все div c классом .dialog__response-block, создаем из них при помощи метода Array.from() новый экземпляр Array и присваеваем его в переменную responseBlocksArray
    responseBlocksArray.forEach((block) => (block.style.display = 'none')); // Перебираем responseBlocksArray при помощи метода forEach(), который вызывает коллбэк-функцию с аргументом block (наши блоки div), и присваеваем через style.display CSS-свойствам всех блоков div значение none (не отображать)
  }, // Фигурная скобка завершает тело функции hideAllResponseBlocks
  showResponseBlock = (blockSelector, msgText, spanSelector) => {
    // Объявляем функцию showResponseBlock через function expression, с аргументами blockSelector, msgText, spanSelector
    hideAllResponseBlocks(); // Вызываем функцию hideAllResponseBlocks внутри функции showResponseBlock
    document.querySelector(blockSelector).style.display = 'block'; // Получаем из DOM при помощи метода querySelector по передаваемому в функцию showResponseBlock аргументу blockSelector первый элемент и присваеваем через style.display CSS-свойству этого элемента значение block (отображать)
    if (spanSelector) {
      // При помощи инструкции if определяем, что если передаваемый в фyнкцию showResponseBlock качестве аргумента spanSelector существует (имеет значение true), то тогда ▼
      document.querySelector(spanSelector).textContent = msgText; // полученному из DOM и передаваемому в showResponseBlock в качестве аргумента spanSelector элементу присваеваем при помощи свойства textContent объекта Node значение msgText (передаваемый в showResponseBlock аргумент)
    } // Фигурная скобка завершает тело инструкции if
  }, // Фигурная скобка завершает тело функции showResponseBlock
  showError = (msgText) => showResponseBlock('.dialog__response-block_error', msgText, '#error'), // Объявляем функцию showError с аргументом msgText, внутри showError вызываем функцию showResponseBlock и, в качестве аргумента blockSelector, передаем в последнюю селектор класса dialog__response-block_error, аргумент msgText и, в качестве аргумента spanSelector, селектор error (id)
  showResults = (msgText) => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'), // Объявляем функцию showResults с аргументом msgText, внутри showResults вызываем функцию showResponseBlock, и в качестве аргумента blockSelector, передаем в последнюю селектор класса dialog__response-block_ok, аргумент msgText и, в качестве аргумента spanSelector, селектор ok (id)
  showNoResults = () => showResponseBlock('.dialog__response-block_no-results'), // Объявляем функцию showNoResults без аргументов, внутри showNoResults вызываем функцию showResponseBlock и, в качестве аргумента blockSelector, передаем в последнюю селектор класса dialog__response-block_no-results
  tryFilterByType = (type, values) => {
    // Объявляем функцию tryFilterByType с аргументами type и values
    try {
      // Объявляем блок try в составе инструкции try...catch
      const valuesArray = eval(`filterByType('${type}', ${values})`).join(', '); // Объявляем переменную valuesArray и присваеваем ей результат выполнения встроенного метода eval (функция глобального объекта), eval возвращает результат выполнения кода, переданного в эту функцию в виде строки-шаблона — для этого внутри строки вызываем функцию filterByType, в которую при помощи шаблонных литералов переданы строки-аргументы type и values, затем результат вызова eval объединяем при помощи метода join в строку, разделяя элементы этой строки при помощи запятой и пробела
      const alertMsg = valuesArray.length
        ? `Данные с типом ${type}: ${valuesArray}`
        : `Отсутствуют данные типа ${type}`; // Объявляем переменную alertMsg и присваеваем ей значение того, что возвращает тернарный оператор: если массив valuesArray не пустой (имеет длину), то выводим строку-шаблон, в которую подставляем при помощи шаблонных литералов значение аргумента type, передаваемого в функцию filterByType и содержимое массива valuesArray, в противном случае (если массив valuesArray пустой), выводим строку-шаблон, в которую подставляем с помощью литерала значение аргумента type
      showResults(alertMsg); // Вызываем функцию showResults и передаем в нее то, что нам возвращает переменная alertMsg
    } catch (e) {
      // Фигурная скобка завершает тело блока try, затем объявляем блок catch в составе инструкции try...catch, в котором будет обрабатываться ошибка, в случае её возникновения (error)
      showError(`Ошибка: ${e}`); // Вызываем функцию showError и передаем в ее в качестве аргумента строку-шаблон, в которую подставляем с помощью шаблонного литерала значение ошибки (error)
    } // Фигурная скобка завершает тело блока catch
  }; // Фигурная скобка и точка с запятой завершают тело функции tryFilterByType

const filterButton = document.querySelector('#filter-btn'); // Объявляем переменную filterButton и помещаем в нее полученный из DOM при помощи метода querySelector селектор filter-btn (id)

filterButton.addEventListener('click', (e) => {
  // Навешиваем на filterButton обработчик события по событию click, используем event в качестве аргумента вызываемой в слушетеле анонимной коллбэк-функции
  const typeInput = document.querySelector('#type'); // Объявляем переменную typeInput и помещаем в нее полученный из DOM при помощи метода querySelector селектор type (id)
  const dataInput = document.querySelector('#data'); // Объявляем переменную dataInput и помещаем в нее полученный из DOM при помощи метода querySelector селектор data (id)

  if (dataInput.value === '') {
    // При помощи оператора if в составе инструкции if...else объявляем логическое условие того, что если содержимое инпута строго равно пустой строке, то тогда ▼
    dataInput.setCustomValidity('Поле не должно быть пустым!'); // при помощи метода setCustomValidity устанавливаем специальное сообщение для выбранного элемента (input)
    showNoResults(); // Вызываем функцию showNoResults, которая показывает div c классом dialog__response-block_no-results и сообщением в нём "Пока что нечего показать."
  } else {
    // При помощи оператора else в составе инструкции if...else выполняем инструкцию для случая, когда содержимое инпута dataInput не является пустым — в этом случае ▼
    dataInput.setCustomValidity(''); // для инпута сбрасываем установленное при помощи метода setCustomValidity кастомное сообщение
    e.preventDefault(); // При помощи метода preventDefault интерфейса Event предотвращаем действие по умолчанию для инпута
    tryFilterByType(typeInput.value.trim(), dataInput.value.trim()); // При помощи функции tryFilterByType тримим содержимое инпутов typeInput и dataInput
  } // Фигурная скобка завершает тело блока оператора else
}); // Фигурная скобка, скобка и точка с запятой завершают тело обработчика события, навешенного при помощи метода addEventListener
