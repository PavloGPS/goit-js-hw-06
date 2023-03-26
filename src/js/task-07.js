// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті,
//  перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputRangeEl = document.querySelector("input#font-size-control");
const spanTextEl = document.querySelector("span#text");

inputRangeEl.addEventListener("input", onInputRange);

function onInputRange(evt) {
  spanTextEl.style.fontSize = `${evt.currentTarget.value}px`;
}
