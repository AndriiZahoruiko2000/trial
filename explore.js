// const buttons = document.querySelectorAll(".js-accordion-btn");
// buttons.forEach((button) =>
//   button.addEventListener("click", () => {
//     const block2 = button.nextElementSibling;
//     block2.classList.toggle("active");
//   })
// );

// const panelsList = document.querySelectorAll(".js-panel");
// panelsList.forEach((element) =>
//   element.addEventListener("click", () => {
//     const isActive = document.querySelector(".is-open");
//     if (isActive) {
//       isActive.classList.remove("is-open");
//     }
//     if (isActive === element) {
//       return;
//     }

//     element.classList.add("is-open");
//   })
// );

// Для динамічного створення палітри
// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }
// console.log(getRandomColor());

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }

// const palletList = document.querySelectorAll(".pallet__item");
// palletList.forEach((element) => {
//   const color = getRandomColor();
//   element.style.background = color;
//   element.dataset.color = color;
//   element.addEventListener("click", () => {
//     const isActive = document.querySelector(".active");
//     if (isActive) {
//       isActive.classList.remove("active");
//       isActive.firstElementChild.textContent = "...";
//     }
//     element.classList.add("active");

//     element.firstElementChild.textContent = element.dataset.color;
//   });
// });



// const list = document.querySelector(".key__list");
// list.addEventListener("transitionend", (event) => {
//   console.log(event.propertyName);
//   if (event.propertyName === "transform") {
//     event.target.classList.remove("playing");
//   }
// });

// const musicList = document.querySelectorAll(".key__item");
// musicList.forEach((element) =>
//   element.addEventListener("click", () => {
//     element.classList.add("playing");
//   })
// );
