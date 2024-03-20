const categoryList = document.querySelector("#categories");
const categoryItems = document.querySelectorAll(".item");
console.log("Number Of Categories:", categoryItems.length);
categoryItems.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li");
  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryElements.length);
});
//////////
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = ingredients
  .map((element) => `<li class='item'> ${element}</li>`)
  .join("");
const ingredientsItems = document.querySelector("#ingredients");
ingredientsItems.innerHTML = ingredientsList;
console.log(ingredientsItems);
//////////
const images = [
  {
    width: 700,
    height: 460,
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    width: 700,
    height: 460,
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    width: 700,
    height: 460,
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
//////////
const newImages = images.map(
  (element) =>
    `<li class='images__list'><img src="${element.url}" alt="${element.alt} width="${element.width}" height="${element.height}"/></li>`
);
const imagesList = document.querySelector(".gallery");
imagesList.insertAdjacentHTML("afterbegin", newImages);

let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const value = document.getElementById("value");
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter();
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounter();
});

function updateCounter() {
  value.textContent = counterValue;
}
//////////

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
function updateName() {
  const name = nameInput.value;
  if (name) {
    console.log(name);
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}
nameInput.addEventListener("input", updateName);
// ////////

const textElement = document.getElementById("text");

textElement.addEventListener('blur', () => {
  
})
