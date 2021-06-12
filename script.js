'use strict';

const buttonAdd = document.querySelector('#add'),
  headerInput = document.querySelector('.header-input'),
  todoCompleted = document.querySelector('.todo-completed'),
  ulTodo = document.querySelector('#todo');

let todoData = localStorage.getItem('todoData')
  ? JSON.parse(localStorage.getItem('todoData'))
  : {
      value: [],
      completed: [],
    };

const addToStorage = function () {
  localStorage.setItem('todoData', JSON.stringify(todoData));

  // console.log(todoData);
};

const newTodo = function (todoText) {
  const todoItem = document.createElement('li'),
    todoButtons = document.createElement('div'),
    todoRemove = document.createElement('button'),
    todoComplete = document.createElement('button');

  const moveTodo = function (event) {
    const elem = event.target.parentNode.parentNode;

    if (elem.parentNode.className === 'todo') {
      todoData.value.splice([].indexOf.call(elem.parentNode.children, elem), 1);
      todoData.completed.unshift(elem.textContent);
      todoCompleted.insertBefore(elem, todoCompleted.childNodes[0]);
    } else {
      todoData.completed.splice([].indexOf.call(elem.parentNode.children, elem), 1);
      todoData.value.unshift(elem.textContent);
      ulTodo.insertBefore(elem, ulTodo.childNodes[0]);
    }
    addToStorage();
  };

  const removeTodo = function (event) {
    const elem = event.target.parentNode.parentNode;

    if (elem.parentNode.className === 'todo') {
      todoData.value.splice([].indexOf.call(elem.parentNode.children, elem), 1);

      // console.log([].indexOf.call(elem.parentNode.children, elem));
    } else {
      todoData.completed.splice([].indexOf.call(elem.parentNode.children, elem), 1);
    }

    elem.parentNode.removeChild(elem);

    addToStorage();
  };

  todoItem.className = 'todo-item';
  todoButtons.className = 'todo-buttons';
  todoRemove.className = 'todo-remove';
  todoComplete.className = 'todo-complete';

  todoRemove.addEventListener('click', removeTodo);
  todoComplete.addEventListener('click', moveTodo);
  todoButtons.appendChild(todoRemove);
  todoButtons.appendChild(todoComplete);
  todoItem.textContent = todoText;
  todoItem.appendChild(todoButtons);

  return todoItem;
};

const addTodo = function (event) {
  event.preventDefault();

  if (headerInput.value !== '') {
    ulTodo.insertBefore(newTodo(headerInput.value.trim()), ulTodo.childNodes[0]);
    todoData.value.unshift(headerInput.value.trim());
  }
  headerInput.value = '';

  addToStorage();
};

for (let i = ulTodo.children.length - 1; i >= 0; i--) {
  ulTodo.removeChild(ulTodo.children[i]);
  ulTodo.textContent = '';
}

for (let i = todoCompleted.children.length - 1; i >= 0; i--) {
  todoCompleted.removeChild(todoCompleted.children[i]);
  todoCompleted.textContent = '';
}

for (let i = 0; i < todoData.value.length; i++) {
  ulTodo.appendChild(newTodo(todoData.value[i]));
}

for (let i = 0; i < todoData.completed.length; i++) {
  todoCompleted.appendChild(newTodo(todoData.completed[i]));
}

buttonAdd.addEventListener('click', addTodo);
