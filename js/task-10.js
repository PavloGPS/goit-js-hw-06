// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBoxesBtnEl = document.querySelector(
  "#controls button[data-create]"
);
const destroyBoxesBtnEl = document.querySelector(
  "#controls button[data-destroy]"
);
const inputEl = document.querySelector("#controls input");
const boxesDivEl = document.querySelector("div#boxes");
console.dir(inputEl);
console.dir(createBoxesBtnEl);
console.dir(destroyBoxesBtnEl);

createBoxesBtnEl.addEventListener("click", onCreateBtnClick);
destroyBoxesBtnEl.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  const amount = Number(inputEl.value);
  createBoxes(amount);
}
function createBoxes(amount) {
  const boxesArr = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement("div");
    boxEl.style.width = `${boxSize}px`;
    boxEl.style.height = `${boxSize}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesArr.push(boxEl);
    boxSize += 10;
  }
  boxesDivEl.append(...boxesArr);
}
function onDestroyBtnClick() {
  boxesDivEl.innerHTML = "";
}
