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
galleryGridEl.classList.add("list");

const makeGalleryItemMarkup = ({ url, alt }) =>
  `<li class="item"><img src="${url}" alt="${alt}" ></li>`;

const makeGalleryItemsSetMarkup = images.map(makeGalleryItemMarkup).join("");

galleryGridEl.insertAdjacentHTML("beforeend", makeGalleryItemsSetMarkup);

const styles = `
<style>
  img {
    display: block;
    // max-width: 100%;
    // height: auto;
    max-height: 100%
  }
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .gallery{
    backgroundColor: teal;
    padding: 15px;
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  .item {
    width: 300px;
    height: 200px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 5px;
  }  
</style>`;
galleryGridEl.insertAdjacentHTML("beforebegin", styles);
console.log(galleryGridEl.style);
