import {
  BUTTON,
  INPUT,
  TEMP_MAIN,
  CITY_MAIN,
  APIKEY,
  SERVER_URL,
} from "./constant.js";

async function chekWeather(event) {
  event.preventDefault();
  const CITY_NAME = INPUT.value;
  const URL = `${SERVER_URL}?q=${CITY_NAME}&appid=${APIKEY}&units=metric`;
  let data = await fetch(URL);
  try {
    let resultJson = await data.json();
    let temp = resultJson.main.temp;
    let city = resultJson.name;
    addText(temp, city);
  } catch (err) {
    treatmentErrors(err);
  } finally {
    clearForm();
  }
}

// Функция обработки ошибок
function treatmentErrors(e) {
  TEMP_MAIN.textContent = `Ошибка ввода`;
  CITY_MAIN.textContent = "";
  alert(`Ошибка: ${e.status}`);
  let error = confirm("Попробовать еще раз?");
  if (!error) {
    alert("До свидания!");
    window.close();
  } else {
    alert("Введите название города!");
  }
}
// Функция добавления значений в HTML
function addText(t, c) {
  let temp = Math.round(t);
  let name = c;
  CITY_MAIN.innerHTML = `${name}`;
  TEMP_MAIN.innerHTML = `${temp}&deg; `;
}

//Функция очистки формы
function clearForm() {
  INPUT.value = " ";
  INPUT.focus();
}

BUTTON.addEventListener("click", chekWeather);
