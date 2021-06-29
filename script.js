'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('cars');
  const output = document.getElementById('output');
  const dbCars = './cars.json';

  const getData = (urlCars) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.open('GET', urlCars);
      request.setRequestHeader('Content-type', 'application/json');
      request.send();

      request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
          return;
        }

        if (request.readyState === 4 && request.status === 200) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject(request.statusText);
        }
      });
    });
  };

  const showData = (data) => {
    data.cars.forEach((item) => {
      if (item.brand === select.value) {
        const { brand, model, price } = item;

        output.innerHTML = `Тачка ${brand} ${model} <br>
						Цена: ${price}$`;
      }
    });
  };

  select.addEventListener('change', () => {
    getData(dbCars)
      .then((data) => {
        showData(data);
      })
      .catch((error) => {
        output.innerHTML = `Произошла ошибка: ${error}`;
      });
  });
});
