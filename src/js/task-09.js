// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color
//  і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
const bodyEl = document.querySelector("body");
const widgetEl = document.querySelector("div.widget");
const outputTextEl = widgetEl.querySelector("p");
const outputColorEl = outputTextEl.querySelector("span.color");
const changeColorBtnEl = widgetEl.querySelector("button.change-color");

changeColorBtnEl.addEventListener("click", onClickChangeColor);
function onClickChangeColor() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  outputColorEl.textContent = randomColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
