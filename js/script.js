'use strict';

class Todo {
  constructor(selectorToForm, selectorLists) {
    this.todoList = [];
    this.toForm = selectorToForm;
    this.toLists = selectorLists;
    this.elementsForm = new FormTodo().elements;
    this.lists = new ListTodo('todo-list', 'todo-completed');
  }

  init() {
    this.todoList = JSON.parse(localStorage.getItem('todoMe') || '[]');

    this.todoList.forEach(this.renderItem, this);

    document.querySelector(this.toForm).append(this.elementsForm.form);

    this.elementsForm.form.addEventListener('submit', (e) => {
      e.preventDefault();

      this.elementsForm.input.value = this.elementsForm.input.value.trim();

      if (this.elementsForm.input.value) {
        this.addTodo(this.elementsForm.input.value);
        this.elementsForm.form.reset();
      } else {
        this.elementsForm.input.value = 'Нельзя добавить пустую задачу!';
        document
          .querySelectorAll('form input, form select, form textarea, form button')
          .forEach((elem) => elem.setAttribute('disabled', 'disabled'));

        setTimeout(() => {
          this.elementsForm.input.value = '';
          document
            .querySelectorAll('form input, form select, form textarea, form button')
            .forEach((elem) => elem.removeAttribute('disabled', 'disabled'));
          document.querySelector('.header-input').focus();
        }, 1500);

        // alert('Нельзя добавить пустую задачу!');
      }
    });

    document.querySelector(this.toLists).append(this.lists.todo, this.lists.todoCompleted);
  }

  renderItem({ id, text, check }) {
    const item = new TodoItem(text).item;

    check ? this.lists.todoCompleted.append(item.elem) : this.lists.todo.append(item.elem);

    item.btnComplete.addEventListener('click', this.changeTodo.bind(this, id, item.elem));
    item.btnRemove.addEventListener('click', this.removeTodo.bind(this, id, item.elem));
  }

  addTodo(text) {
    const todoItem = {
      id: (+new Date() + '').substring(5),
      text,
      check: false,
    };

    this.todoList = [...this.todoList, todoItem];

    this.renderItem(todoItem);

    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('todoMe', JSON.stringify(this.todoList));
  }

  removeTodo(id, elem) {
    this.todoList = this.todoList.filter((item) => item.id !== id);
    this.setLocalStorage();
    elem.remove();

    document.querySelector('.header-input').focus();
  }

  changeTodo(id, elem) {
    const item = this.todoList.find((item) => item.id === id);

    item.check ? this.lists.todo.append(elem) : this.lists.todoCompleted.append(elem);

    item.check = !item.check;
    this.setLocalStorage();

    document.querySelector('.header-input').focus();
  }

  editTodo() {}
}

class FormTodo {
  constructor() {
    this.elements = this.createForm();
  }

  createForm() {
    const form = document.createElement('form');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const button = document.createElement('button');

    form.classList.add('todo-control');
    input.classList.add('header-input');
    input.setAttribute('type', 'text');
    input.placeholder = 'Какие планы?';
    input.autofocus = true;
    button.style.cssText = `
      width: 50px;
      height: 50px;
      background: transparent url("img/plus.png") no-repeat center/cover;
      position: absolute;
      top: 15px;
      right: 15px;
      z-index: 2;
  
      border-radius: 25px;
      border: 0;
      box-shadow: none;
      outline: none;
      cursor: pointer;
  
      -webkit-appearance: none;
      -moz-appearance: none;
    `;

    label.append(input);
    form.append(label, button);

    return {
      input,
      form,
    };
  }

  submitForm() {}
}

class ListTodo {
  constructor(selectorList, selectorListComplete) {
    this.todo = this.createList(selectorList);

    this.todoCompleted = this.createList(selectorListComplete);
  }

  createList(selectorList) {
    const ul = document.createElement('ul');

    ul.classList.add('todo', selectorList);
    return ul;
  }
}

class TodoItem {
  constructor(text) {
    this.item = this.createItem(text);
  }

  createItem(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const buttons = document.createElement('div');
    const btnComplete = document.createElement('button');
    const btnRemove = document.createElement('button');

    li.classList.add('todo-item');
    span.classList.add('text-todo');
    span.textContent = text;
    buttons.classList.add('todo-buttons');
    btnComplete.classList.add('todo-complete');
    btnRemove.classList.add('todo-remove');

    buttons.append(btnRemove, btnComplete);
    li.append(span, buttons);

    return {
      elem: li,
      text: span,
      btnComplete,
      btnRemove,
    };
  }
}

const form = new Todo('.header', '.todo-container');

form.init();
