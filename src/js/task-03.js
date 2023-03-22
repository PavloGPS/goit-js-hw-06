// Завдання 3
// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().
// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryGridEl = document.querySelector("ul.gallery");
// galleryGridEl.style.backgroundColor = "teal";
// galleryGridEl.style.padding = "15px";
// galleryGridEl.style.display = "flex";
// galleryGridEl.style.gap = "10px";
// galleryGridEl.style.justifyContent = "center";
// galleryGridEl.style.listStyle= "none";

// console.log(galleryGridEl.style);
// console.dir(galleryGridEl);
const makeGalleryItemMarkup = ({ url, alt }) => {
  return `<li class="item"><img src="${url}" alt="${alt}" height="200px"></li>`;
};
// console.log(makeGalleryItemMarkup(images[0]));
const makeGalleryItemsSetMarkup = images.map(makeGalleryItemMarkup).join("");
// console.log(makeGalleryItemsSetMarkup);
galleryGridEl.insertAdjacentHTML("beforeend",makeGalleryItemsSetMarkup);
// const galleryGridItemEl = document.querySelector(".item");
// galleryGridItemEl.style.width="300px";
// galleryGridItemEl.style.overflow="hidden";
// console.log(galleryGridItemEl.style);
const styles=`<style>
  body {
    color:red;
    background-color: teal;
  }
</style>`
galleryGridEl.insertAdjacentHTML("beforebegin",styles);