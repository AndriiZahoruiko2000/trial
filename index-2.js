// const num1 = 7;
// const num2 = 3;
// const total = num1 % num2;
// console.log(total);

/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/

// const time = 90;
// const hours = Math.floor(time / 60);
// const normalizedHours = String(hours).padStart(2, "0");
// console.log(String(hours).padStart(2, "0"));
// const minutes = time % 60;
// const normalizedMinutes = String(minutes).padStart(2, "0");
// console.log(`${normalizedHours}:${normalizedMinutes}`);

// console.log(Math.random(3.1));

// const userName = "mango";
// const age = 21;
// const message = `Hello ${userName} , your age ${age}`;
// const message2 = "hello" + " " + userName + ", your age" + " " + age;
// message[0] = "T"; рядок перезаписати не можна
// console.log(message.tolowerCase());
// console.log(message[message.length - 1]);
// console.log("a".charCodeAt(0));
// console.log("b".charCodeAt(0));
// console.log("A" < "a");

// console.log(message.includes("m"));
// let isInclude = false;
// for (let i = 0; i < message.length; i += 1) {
//   if (message[i] === "x") {
//     isInclude = true;
//     break;
//   }
// }
// console.log(isInclude);
//I = це  змінна доступна в циклі
// let i = 0 це значить і буде стартувати з 0
// доки умова приводиться до тру цикл працює, доки і меньше 10, як тільки і стане дорівнювати 10 а умова приводиться до фалс
//  збільшення і на 1 на кожній ітерації

// console.log(message.endsWith(21));
// console.log(message.startsWith("Hello"));

// console.log(message.indexOf("mango"));
// const updateMessage = message.replace("Hello", "Hi");
// const updateMessage = message.replaceAll("o", "i");
// console.log(updateMessage);
// const newMessage = message.slice(-2);
// console.log(newMessage);

//* Оператор менше (<)
// console.log(2 < 12);
// console.log(12 < 2);
// console.log("a" < "b");
// console.log("b" < "a");
// console.log("A" < "a");
// console.log("a p p l e" < "a p p n anana");
// console.log("apple" > "yellow");
// console.log("bananana" < "apple");
// console.log(true < false);
// console.log(false < true);

//* Оператор більше (>)
// console.log(10 > 20);
// console.log(20 > 10);

//* Оператор менше або дорівнює (<=)
// console.log(6 <= 6);
// console.log(5 <= 5);
// console.log(5 <= 4);

//* Оператор більше або дорівнює (>=)
// console.log(5 >= 3);
// console.log(5 >= 5);
// console.log(3 >= 4);

//* Не суворе рівенство (==)
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(undefined === null);

// console.log('123' === 123);
// console.log(true === '1');
// console.log(4 === 5 - true);

//* Суворе рівенство (===)
// console.log('123' === 123);
// console.log(null === null);
// console.log(2 + 2 === 4);
// console.log(0 === -0);

//* Не дорівнює (!=)
// console.log("4" != 4);

//* Суворе не дорівнює (!==)
// console.log("4" !== 4);
// console.log(NaN != NaN);

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && "kiwi");
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) >= 0);
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(2 + 5 + "" + 1 + 0);
// console.log("" + 1 - 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log('4' - 2);
// console.log("4px" - 2);
// console.log(7 / 0);
// console.log("  -9  " + 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log("" + 1);
// console.log(3 > 2 > 1);

// let total = 0;
// const max = 50;
// const min = 23;
// for (let i = max; i >= min; i -= 1) {
//   if (!(i % 2)) {
//     total += i;
//   }
// }
// console.log(total);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//   }
// }
// console.log(total);

// const logins = ["qwfdfert", "qwert", "fhjfhf"];
// const loginToFind = "qwert";
// // let message = "naiden";
// // let message = "";
// // for (let login of logins) {
// //   if (login === loginToFind) {
// //     message = "POLSOVATELA NEMA";
// //   } else {
// //     message = "polsovatel naiden";
// //   }
// // }
// // console.log(message);
// const message = logins.includes(loginToFind) ? "da" : "ne";
// console.log(message);

// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["Djass", "bluz", "rock-n-roll"];

// for (let i = 0; i < styles.length; i += 1) {
//   console.log(styles[i]);
//   // console.log(`${styles[i]} nomer pom poriadku ${i + 1} `);
// }
// let longestWord = styles[0];
// for (let style of styles) {
//   if (style.length < longestWord.length) {
//     longestWord = style;
//   }
//   console.log();
// }
// console.log(longestWord);
// const styles = ["Djass", "Bluz"];
// styles.push("Rok-n-roll");
// styles[2] = "Rok-n-roll";
// styles.splice(2, 0, "rok-n-roll");
// console.log(styles);

// const number = 100;
// let total = 0;
// const arrayNumber = [];
// for (let i = 0; i <= 100; i += 1) {
//   if (i % 2 !== 0) {
//     arrayNumber.unshift(i);
//   }
// }
// const reverseArray = arrayNumber.reverse();
// console.log(reverseArray);

// for (let i = 0; i < reverseArray.length; i += 1) {
//   console.log(reverseArray[reverseArray.length - 1 - i]);
// }
// // console.log(reverseArray[0]);
// // 1) всі методи масиву на зубок))
// console.log(reverseArray[reverseArray.length - 1]);
// console.log(reverseArray[reverseArray.length - 3]);
// array[array.length - 1] i = 0
// array[array.length - 1 -1] i = 1
// array[array.length - 1 -2] i = 2
// array[array.length - 1 -3] i = 3
// array[array.length - 1 -4] i = 4

// const numbers = [1, 3, 54, 22, 211, 4];
// let smallestNumber = numbers[0];
// for (number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

// function maskify(cc) {
//   console.log(cc.length);
//   if (cc.length < 4) {
//     return cc;
//   }
//   let string = "";
//   for (let i = 0; i < cc.length; i += 1) {
//     console.log(i);
//     if (i < cc.length - 4) {
//       // console.log(cc[i]);
//       string += "#";
//       continue;
//     }
//     string += cc[i];
//     // console.log(cc[i]);
//   }
//   console.log(string);
//   return string;
// }
// maskify("47834783473847343847384");

// const clients = ["mango", "andrii", "polly"];
// const newClients = clients.splice(0, 1, "kiwi");
// console.log(clients);
// clients.push("ajax");
// console.log(clients);
// // всі методи масивів і рядків

// function accum(s) {
//   let array = [];
//   for (let i = 0; i < s.length; i += 1) {
//     array.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
//   }
//   console.log(i);
//   return array.join("-");
// }
// accum("abcd");

// function disemvowel(str) {
//   const vowels = ["a", "i", "e", "o", "u"];
//   let newString = "";
//   for (let i = 0; i < str.length; i += 1) {
//     if (!vowels.includes(str[i])) {
//       newString += str[i];
//     }
//   }
//   return newString;
// }

// function descendingOrder(n) {
//   const array = (n + "").split("");
//   console.log(array);
//   for (let i = 0; i < array.length; i += 1) {
//     for (let j = 0; j < array.length; j += 1) {
//       if (Number(array[j]) < Number(array[j + 1])) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   console.log(Number(array.join("")));
//   return Number(array.join(""));
// }
// descendingOrder(1021);\

// const userName = "name";
// const user = { name: "mango" };
// console.log(user[userName]);

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";\
// user["mood"] = "happy";
// const userMood = "mood";
// user[userMood] = "happy";
// console.log(Object.entries(user));

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// // // const values = Object.values(salaries);
// // let total = 0;
// // // console.log(values);

// // for (const value of Object.values(salaries)) {
// //   total += value;
// // }
// // console.log(total);
// // const keys = Object.keys(salaries);
// // let total = 0;
// // for (const key of keys) {
// //   console.log(salaries[key]);
// //   total += salaries[key];
// // }
// // console.log(total);

// const entries = Object.entries(salaries);
// let total = 0;
// console.log(entries);

// for (const [, value] of entries) {
//   // const [, value] = entry;
//   console.log(value);
//   // total += entry[1]
//   total += value;
// }
// console.log(total);

// const filmoteka = [
//   {
//     id: 1,
//     title: "Duna",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 10,
//     actors: [
//       "Amelia Gibson",
//       "Cameron Clayton",
//       "Viola Vasquez",
//       "Lula Collins",
//       "Victor Nichols",
//     ],
//     adult: false,
//     image: "https://via.placeholder.com/640/480",
//   },
//   {
//     id: 2,
//     title: "Venom",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 8,
//     actors: [
//       "Inez Greer",
//       "Barry Curtis",
//       "Blanche Rios",
//       "Glen Perry",
//       "Logan Powers",
//     ],
//     adult: true,
//     image: "https://via.placeholder.com/640/480",
//   },
//   {
//     id: 3,
//     title: "Luca",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 9,
//     actors: [
//       "Marguerite Gibbs",
//       "Lora Alvarez",
//       "Jorge Simpson",
//       "Thomas Hall",
//       "Darrell Hunter",
//     ],
//     adult: false,
//   },
//   {
//     id: 4,
//     title: "Free Guy",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 6,
//     actors: [
//       "Calvin Andrews",
//       "Mamie Myers",
//       "Madge Townsend",
//       "Ralph Kim",
//       "Jorge Reese",
//     ],
//     adult: false,
//     image: "https://via.placeholder.com/640/480",
//   },
//   {
//     id: 5,
//     title: "Saw",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 7,
//     actors: [
//       "Adele Marsh",
//       "Melvin Burgess",
//       "Jesus Reese",
//       "Harriet Moreno",
//       "Curtis Cox",
//     ],
//     adult: true,
//   },
//   {
//     id: 6,
//     title: "Duna 2",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 10,
//     actors: [
//       "Amelia Gibson",
//       "Cameron Clayton",
//       "Viola Vasquez",
//       "Lula Collins",
//       "Victor Nichols",
//     ],
//     adult: false,
//     image: "https://via.placeholder.com/640/480",
//   },
// ];

// const onlyAdults = [];
// for (const film of filmoteka) {
//   if (film.adult) {
//     onlyAdults.push(film);
//   }
// }
// console.log(onlyAdults);

// const allTitles = [];
// const findName = "f";
// for (const film of filmoteka) {
//   if (film.title.toLowerCase().includes(findName.toLowerCase())) {
//     allTitles.push(film);
//   }
// }
// console.log(allTitles);

// for (const film of filmoteka) {
//   if (film.title === findName) {
//     console.log(film);
//     break;
//   }
// }

// const allNames = [];
// for (const film of filmoteka) {
//   allNames.push(film.title);
// }
// console.log(allNames);
// Коли ми оголошуємо обєкт або масив то в змінну записуємо посилання на місце в памяті(ячейка)\
//  я в середині в тій ячейці ми можемо вносити зміни(додавати елементи та видаляти) ,
// але не можем записати нове посилання в зміннуж

// const user = {
//   firstName: "John",
//   lastName: "Reese",
//   age: 30,
// };

// const { firstName: name, lastName, age, email = "test@gmail.com" } = user;
// console.log(name, lastName, age, email);
