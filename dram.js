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

const list = document.querySelector(".key__list");
list.addEventListener("transitionend", (event) => {
  if (event.propertyName === "transform") {
    event.target.classList.remove("playing");
  }
});
list.addEventListener("click", (event) => {
  if (event.target.nodeName === "UL") {
    return;
  }
  //   let key = "";
  //   const item = event.target.parentNode;
  //   if (event.target.nodeName === "LI") {
  //     event.target.classList.add("playing");
  //     key = event.target.dataset.key;
  //   } else {
  //     item.classList.add("playing");
  //     key = event.target.parentNode.dataset.key;
  //   }

  const item = event.target.closest(".key__item");
  item.classList.add("playing");
  const sound = document.querySelector(`audio[data-key="${item.dataset.key}"]`);
  sound.play();
});
document.addEventListener("keydown", (event) => {
  const item = document.querySelector(`li[data-key="${event.keyCode}"]`);
  if (item === null) {
    return;
  }
  item.classList.add("playing");
  const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  sound.play();
});
