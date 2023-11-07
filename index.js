/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/
// const totalMinutes = 90;
// let hours = Math.floor(totalMinutes / 60);
// hours = String(hours).padStart(2, "0");
// let minutes = totalMinutes % 60;
// minutes = String(minutes).padStart(2, "0");
// console.log(`${hours}:${minutes}`);

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.
// const string = "25.5%";
// const number = Number.parseInt(string);
// console.log(number);

//? Спробуйте привести до числа рядок 'abc'.
// const number = Number("abc");
// console.log(Number.isNaN("abc"));
/*
  ? Дане число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/
// const number = 23.3;
// console.log(Math.ceil(23.3));
/*
  ? Попросіть користувача ввести число та ступінь.
  ? Зведіть число до ступеня і виведіть результат у консоль.
*/
// const userValue = Number(prompt("Please, write number"));
// const userPower = Number(prompt("please, write power"));
// console.log(Math.pow(userValue, userPower));

//? Запросіть у користувача ім'я та дізнайтесь з кількох символів складається ім'я.
// const userName = prompt("Please, write your name");
// console.log(userName.toUpperCase());

/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JS'?.
  ? Дізнайтесь позицію на якій перебуває цей підрядок
*/

// const string = "HTML, CSS, JS, PHP, React, Vue,  C, C++";
// const isIncluded = string.toLowerCase().includes("js");
// console.log(isIncluded);
// console.log(string.toLowerCase().indexOf("react"));

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на %, rem, em або px;

// const str = "24px";
// const subStr = "rem";
// console.log(str.endsWith(subStr));

//? У нас є рядок 'styles.css, about.css, portfolio.css', замініть .css на .min.css

// const str = "styles.css, about.css, portfolio.css";
// console.log(str.replaceAll(".css", ".min.css"));

//? У нас є дата у форматі '12:05:21', замініть (:) на (.)
// const date = "12:05:21";
// console.log(date.replaceAll(":", "."));

/*
  ? Даний рядок'Vasyl Pupkin is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем та окремо вік.
*/
// const string = "Vasyl Pupkin is 24 years old";
// const name = string.slice(0, 12);
// console.log(name);
// const years = string.slice(16, 18);
// console.log(years);

// const string = `і була пані на палубі`;
// const normalizedString = string.replaceAll(` `, ``).toLowerCase();
// let reverseString = ``;
// for (let i = 0; i < normalizedString.length; i += 1) {
//   const index = normalizedString.length - 1 - i;
//   reverseString += normalizedString[index];
// }
// console.log(reverseString === normalizedString);
// for (let i = 1; i <= 24; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`fizzbuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`buzz`);
//   } else {
//     console.log(i);
//   }
// }
// const min = 23;
// const max = 50;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
// }
// console.log(total);

// function findOutlier(integers) {
//   const oddNumbers = [];
//   const evenNumbers = [];
//   for (let i = 0; i < integers.length; i += 1) {
//     if (integers[i] % 2 === 0) {
//       evenNumbers.push(integers[i]);
//     } else {
//       oddNumbers.push(integers[i]);
//     }
//   }
//   return oddNumbers.length === 1 ? oddNumbers[0] : evenNumbers[0];
// }

// findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
//4. Напишіть код, який запитуватиме
//Логін за допомогою prompt і логувати результат
//В консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// / / В іншому випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Здрастуйте!"
//інакше виводити рядок "Невірний пароль!"

// const loginInput = prompt("Введіть свій логін");
// if (loginInput === `admin`) {
//   const passwordInput = prompt("Введіть свій пароль");
//   if (passwordInput === `Я головний`) {
//     console.log("Здраствуйте");
//   } else if (passwordInput === null) {
//     console.log("Скасовано");
//   } else {
//     console.log("Невірний пароль!");
//   }
// } else if (loginInput === null) {
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }

// const loginInput = prompt("Введіть свій логін");
// let message;

// switch (loginInput) {
//   case "admin":
//     message = `Введіть свій пароль`;
//     const userPassword = prompt("Введіть свій пароль");
//     switch (userPassword) {
//       case "Я головний":
//         message = `Здраствуйте`;
//         break;
//       case null:
//         message = `Скасовано`;
//         break;
//       default:
//         message = `Невірний пароль!`;
//     }
//     break;

//   case null:
//     message = `Скасовано`;
//     break;

//   default:
//     message = `Я вас не знаю!`;
// }

// console.log(message);

// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["Джаз", "Блюз"];
// styles[2] = "Рок-н-рол";
// styles.splice(1, 1, "Класика");
// // const deletedStyles = styles.splice(0, 1);
// // styles[1] = "Класика";
// // styles.push("Рок-н-рол");
// // styles.splice(2, 0, "Рок-н-рол");\
// console.log(styles.shift());
// // styles.splice(0, 0, "Реп", "Реггі");
// styles.unshift("Реп", "Реггі");
// console.log(styles);

//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// const styles = ["Джаз", "Блюз", "Рок-н-рол", "Реггі", "Реп"];
// for (let i = 0; i < styles.length; i += 1) {
//   console.log(`${styles[i]} : ${i + 1}`);
// }

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, 1];
// let smallestNumber = numbers[0];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (smallestNumber > numbers[i]) {
//     smallestNumber = numbers[i];
//   }
// }
// console.log(smallestNumber);

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, 1];
// let totalValue = 0;

// for (const number of numbers) {
//   totalValue += number;
// totalValue = totalValue + number;
// }

// const words = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "CSS",
//   "JS",
//   "Node.js",
//   "JS",
//   "React",
//   "CSS",
//   "React",
//   "HTML",
//   "Node.js",
//   "Aaaaaaaaaa",
// ];
// const uniqueWords = [];

// for (let i = 0; i < words.length; i += 1) {
//   if (i === words.indexOf(words[i])) {
//     uniqueWords.push(words[i]);
//   }
// }
// console.log(uniqueWords);
// let longestWord = words[0];
// for (const word of words) {
//   if (longestWord.length < word.length) {
//     longestWord = word;

//   }
// }
// console.log(longestWord);
// for (const word of words) {
//   if (longestWord > words) {
//     longestWord = words[0];
//   }
// }

// const string = `JavaScript is in my blood`;
// const array = string.split(" ");
// console.log(array);

// function maskify(cc) {
//   if (cc.length <= 4) {
//     return cc;
//   }
//   const lastSymbols = cc.slice(-4);
//   const index = cc.indexOf(lastSymbols);
//   console.log(index);
//   let hiddenSymbols = "";
//   if (index === 0) {
//     hiddenSymbols = "#";
//   }
//   for (let i = 0; i < index; i += 1) {
//     hiddenSymbols += "#";
//   }
//   console.log(hiddenSymbols + lastSymbols);
//   return hiddenSymbols + lastSymbols;
// }

// maskify("11111");

// function accum(s) {
//   const newString = [];

//   for (let i = 0; i < s.length; i += 1) {
//     newString.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
//   }
//   return newString.join("-");
// }
// accum("abcd");

// const a = [1, 2, 3, 4, 5];
// for (let i = 0; i < a.length; i += 1) {
//   console.log(a[i]);
// }

// function arrayDiff(a, b) {
//   const newArray = [];
//   for(let i = 0; i < a.length; i += 1) {
//     if( !b.includes(a[i])) {
//       newArray.push(a[i])
//     }
//   }
//   return newArray;
// }

// /Написати код, який розіб'є рядок на масив
//по 2 літери, якщо останньої літери немає пари, то
//має записатися 1 літера.
//Даний рядок 'abc' - поверне ['ab', 'c']
//*якщо остання буква не має пари, поверне _
//Рядок 'abc' - поверне ['ab', 'c_']
// const string = "abc";

// const array = [];

// for (let i = 0; i <= string.length; i += 2) {
//   array.push(`${string[i]}${string[i + 1] ? string[i + 1] : "_"}`);
// }
// console.log(array);

//Напишіть код, який повертає масив,
//що містить лише унікальні елементи arr.
// const words = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "CSS",
//   "JS",
//   "Node.js",
//   "JS",
//   "React",
//   "CSS",
//   "React",
//   "HTML",
//   "Node.js",
// ];

// const uniqueWords = [];

// for (let i = 0; i < words.length; i += 1) {
//   if (i === words.indexOf(words[i])) {
//     uniqueWords.push(words[i]);
//   }
// }
// console.log(uniqueWords);

//Напишіть код для пошуку пароля в масиві
//Через include і тернарний оператор
// const passwords = ["ajax123", "polly456", "mango789", "semiBold"];
// const password = "polly456";
// console.log(passwords.includes(password) ? "tak" : "no");

//Напишіть код
//який приймає назву кольору
//визначає його наявність у масиві
//якщо колір є, встановлює його як фон документа
//якщо кольору немає виводить console.error('Такий колір не знайдено');
//і встановлює колір документа червоний
// document.body.style.background = "red";
// const colors = ["blue", "yellow", "olive", "fuchsia", "lime", "aqua", "maroon"];

// if (colors.includes("green")) {
//   document.body.style.background = "blue";
// } else {
//   console.error("Такий колір не знайдено");
//   document.body.style.background = "red";
// }

/*
? У нас є масив із зарплатами працівників,
? потрібно порахувати загальну суму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// // for (let i = 0; i < salaries.length; i += 1) {
// //   total += salaries[i];
// // }
// // console.log(total);
// for (const salarie of salaries) {
//   total += salarie;
// }
// console.log(total);

/*
? У нас є кілька масивів із зарплатами співробітників з
? різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [1000, 1500, 2500, 4000, 5000];
// const developersSalaries = [8000, 40000, 15000];
// const allSalaries = [...managerSalaries, ...developerSalaries];
// let total = 0;
// // for (let i = 0; i < allSalaries.length; i += 1) {
// //   total += allSalaries[i];
// // }
// for (const salarie of allSalaries) {
//   total += salarie;
// }

// console.log(total);

/*
? Напиши скрипт, який «розвертає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/

// const str = "JavaScript це цікаво!";
// let reverseString = "";
// for (let i = 0; i < str.length; i += 1) {
//   const lastElementIndex = str.length - 1 - i;
//   reverseString += str[lastElementIndex];
// }
// console.log(reverseString);
// const array = str.split("");
// array.reverse();
// const reverseString = array.join("");
// console.log(reverseString);

// for (let i = str.length - 1; i > 0; i -= 1) {
//   reverseString += str[i];
// }
// console.log(reverseString);

/*
? У нас є масив співробітників, відсортуйте його, щоб співробітники не повторювалися
*/

// const employees = ["Dennis", "Dennis", "Shaw", "Watkins", "Watkins", "Ray"];

// const uniqueWords = [];

// for (let i = 0; i < employees.length; i += 1) {
//   if (i === employees.indexOf(employees[i])) uniqueWords.push(employees[i]);
// }
// uniqueWords.splice(1, 1);
// uniqueWords.splice(1, 0, "Thornton");
// console.log(uniqueWords);

// Напиши скрипт для об'єкта user,
//Послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить вміст об'єкта users у форматі
//ключ:значення використовуючи Object.keys() і for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// // user.mood = "happy";
// // user["mood"] = "happy";
// const userMood = "mood";
// user[userMood] = "happy";

// // user.hobby = "skydiving";
// // user["hobby"] = "skydiving";
// const userHobby = "hobby";
// user[userHobby] = "skydiving";

// // user.premium = false;
// // user["premium"] = false;
// const userPremium = "premium";
// user[userPremium] = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

//3. Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція повинна повертати загальну вартість //каменів з таким ім'ям

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 6 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//   for (const stone of stones) {
//     if (stone.name === stonesName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return 0;
// }

// const price = calcTotalPrice(stones, "qwe");
// console.log(price);

//6. Напишіть функцію, яка приймає як параметр об'єкт
//і формує масиви у новому масиві у форматі [key, value]
// const user6 = {
//   name: "John",
//   surName: "Stones",
//   age: 20,
//   hobby: "tenis",
//   haveCar: true,
//   merried: false,
// };

// function userValues(object) {
//   return Object.entries(user6);
// }
// const array = userValues(user6);
// console.log(array);

// Призначити знижку 20% на фрукти в масиві,
//Присвоїти ID для кожного продукту

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// for (const fruit of fruits) {
//   fruit.price = fruit.price * 0.2;
// }
// console.log(fruits);

// Створіть об'єкт calculator із трьома методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//mult() перемножує збережені значення та повертає результат

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };
// calculator.read(10, 15);
// const sum = calculator.sum();
// const mult = calculator.mult();
// console.log(mult);

//Дізнатись загальні роки практики в об'єкті workers

// const workers = [
//   { id: 10, name: "Mango", years: 14 },
//   { id: 2, name: "Poly", years: 19 },
//   { id: 41, name: "Ajax", years: 30 },
//   { id: 99, name: "Kiwi", years: 22 },
// ];
// let allYears = 0;
// for (const worker of workers) {
//   allYears += worker.years;
// }
// console.log(allYears);

// Створення масиву значень Фаренгейта із масиву значень Цельсія
// let celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
// // t * 1.8 + 32;
// const farengeit = [];
// for (const t of celsius) {
//   farengeit.push(t * 1.8 + 32);
// }
// console.log(farengeit);

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if(this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName),
//     },
//   else {
//         return onError(There is no pizza with a name ${pizzaName} in the assortment.')
//   }
//   };
// };

// const vehicles = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];
//1.Реалізувати фільтр за якістю amount і отримати
// Тільки назва моделі
// const carModel = vehicles
//   .filter(({ amount }) => amount > 10)
//   .map(({ model }) => model);
// const carModel = filteredArray.map((vehicle) => vehicle.model);
// console.log(carModel);
//2.Отримати машини на розпродажі і сортувати за зменшенням ціни
// const carOnSale = vehicles
//   .filter(({ onSale }) => onSale)
//   .sort((a, b) => {
//     return b.price - a.price;
//   });
// console.table(carOnSale);

//4. Сортування примітивів.
//Виконайте сортування масиву цін зі спадання та зростання
// const prices = [1000, 240, 670, 360, 89, 20];
// const sortedPrices = prices.sort((a, b) => {
//   return a - b;
// });
// console.log(sortedPrices);

// /Виконайте сортування масиву об'єктів:
//1. За зростанням та зменшенням значення властивості price
//2. На ім'я в алфавітному та зворотному порядку

// const items = [
//   { name: "SAMSUNG", p: 15000 },
//   { name: "LG", p: 9000 },
//   { name: "DELL", p: 27000 },
//   { name: "BENQ", p: 12000 },
//   { name: "ASER", p: 7000 },
// ];

// const sortedItems = items.sort((a, b) => {
//   return b.p - a.p;
// });
// const reversedName = items.sort((a, b) => {
//   return b.name.localeCompare(a.name);
// });
// console.log(sortedItems);

//6. Зібрати в кожнийТопи масив всіх предметів всіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи
// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// // const uniqueTopics = courses
// //   .flatMap(({ topics }) => topics)
// //   .filter((topic, index, array) => array.indexOf(topic) === index);
// // console.log(uniqueTopics);
// const uniqueTopics = courses
//   .reduce((acc, { topics }) => [...topics, ...acc], [])
//   .reduce((acc, topic) => {
//     if (!acc.includes(topic)) {
//       acc.push(topic);
//     }
//     return acc;
//   }, []);
// console.log(uniqueTopics);

//  ? Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином:
//  ? *
//  ? **
//  ? ***
//  ? ****
//  ? *****
//  ? ******
//  ? *******

// function getStars(amount) {
//   let star = "";
//   for (let i = 0; i < amount; i += 1) {
//     console.log((star += "*"));
//   }
// }
// getStars(10);
// ? У змінній min лежить число від 0 до 59.
// ? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
// ? [0 до 15) – перша чверть години
// ? [15 до 30) – друга чверть години
// ? [30 до 45) – третя чверть години
// ? [45 до 60) – четверта чверть години

// ? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
// ? значення яких будуть передані до параметра dimensions у вигляді рядка.
// ? Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//   console.log(dimensions.split(" ")); // ["8", "11"]
//   const sides = dimensions.split(" "); // ["8", "11"]
//   console.log(sides);
//   console.log(sides[0]); //8
//   console.log(sides[1]); //11
//   console.log(sides[sides.length - 1]); // 11 отримали останній елемент з масиву
//   console.log(sides[0] * sides[1]); //88
//   return sides[0] * sides[1];
// }

// console.log(getRectArea("8 11")); //88
// console.log(getRectArea("18 11")); //198
// console.log(getRectArea("8 21")); //168
// 7. Призначити знижку 20% на фрукти в масиві,
// Присвоїти ID для кожного продукту

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

//1. const fruitSale = fruits.map((fruit) => {
//   return { ...fruit, id: new Date(), price: fruit.price - fruit.price * 0.2 };
// });
// console.log(fruitSale);

// const fruitSale = fruits.map((fruit) => ({
//   ...fruit,
//   id: new Date(),
//   price: fruit.price - fruit.price * 0.2,
// }));
// console.log(fruitSale);
// const cars = [
//   { name: "bmw", price: 20000 },
//   { name: "opel", price: 30000 },
//   { name: "audi", price: 75000 },
// ];

// function sale(arr, amountSale) {
//   return arr.map((item) => ({
//     ...item,
//     id: new Date(),
//     price: item.price - item.price * amountSale,
//   }));
// }
// console.log(sale(fruits, 0.5));
// console.log(sale(cars, 0.5));
