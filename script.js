'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.newElem = function () {
  let elem;

  if (this.selector[0] === '.') {
    elem = document.createElement('div');
    elem.className = this.selector.slice(1);
    elem.textContent = 'Первый текст';
  }

  if (this.selector[0] === '#') {
    elem = document.createElement('p');
    elem.id = this.selector.slice(1);
    elem.textContent = 'Второй текст';
  }

  elem.style.cssText = `height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;`;

  console.log(elem);
  return elem;
};

let getDiv = new DomElement('.block', 200, 300, 'palegreen', 27);
let getParagraph = new DomElement('#best', 300, 400, 'lightsalmon', 33);

document.body.appendChild(getDiv.newElem());
document.body.appendChild(getParagraph.newElem());
