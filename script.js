document.body.style.backgroundColor = '#fdfbfb';

const btnStart = document.createElement('button'),
  btnReset = document.createElement('button'),
  divImg = document.createElement('div'),
  img = document.createElement('img'),
  imgGoGo = document.createElement('img'),
  div = document.createElement('div');

let flyInterval = 0;

const resetCanvas = () => {
  if (flyInterval > 0) {
    cancelAnimationFrame(flyInterval);
  }

  div.style.left = document.body.clientWidth + 'px';
  divImg.style.left = '1px';
  divImg.style.top = '5px';
  btnStart.textContent = 'Start';
};

const flyAnimate = () => {
  const l = parseFloat(divImg.style.left),
    lm = parseFloat(div.style.left);

  if (l < window.innerWidth) {
    if (l > window.innerWidth / 4 && lm > -img.width) {
      div.style.left = lm - 3 + 'px';
    }

    divImg.style.left = l + 1 + 'px';
    flyInterval = requestAnimationFrame(flyAnimate);
  } else {
    cancelAnimationFrame(flyInterval);
    btnStart.textContent = 'Stoped';
    alert('Для повтора нажмите на кнопку "Reset"');
  }
};

const startAnimation = () => {
  if (btnStart.textContent === 'Start') {
    btnStart.textContent = 'Pause';
    flyInterval = requestAnimationFrame(flyAnimate);
  } else if (btnStart.textContent !== 'Stoped') {
    btnStart.textContent = 'Start';
    cancelAnimationFrame(flyInterval);
  }
};

btnStart.textContent = 'Start';
btnReset.textContent = 'Reset';
img.src = './img/go-go_2.gif';
img.width = 480;
imgGoGo.src = './img/go-go_1.gif';
imgGoGo.width = 160;
div.style.position = 'relative';
divImg.style.position = 'relative';

divImg.appendChild(imgGoGo);
div.appendChild(img);

btnStart.addEventListener('click', startAnimation);
btnReset.addEventListener('click', resetCanvas);

document.body.appendChild(btnStart);
document.body.appendChild(btnReset);
document.body.appendChild(divImg);
document.body.appendChild(div);

resetCanvas();
