// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
//
// js
// /
const inputTextEl = document.querySelector("input#validation-input");
inputTextEl.addEventListener("blur", onBlurValidation);
console.dir(inputTextEl);
console.log(inputTextEl.dataset.length);

function onBlurValidation(evt) {
  const elem = evt.currentTarget;

  if (elem.classList.contains("valid")) {
    elem.classList.remove("valid");
  }
  if (!elem.classList.contains("invalid")) {
    elem.classList.add("invalid");
  }
  if (elem.value.length === Number(elem.dataset.length)) {
    elem.classList.replace("invalid", "valid");
  }
}
