// const employees = [
//   "Dennis",
//   "Dennis",
//   "Shaw",
//   "Watkins",
//   "Watkins",
//   "Ray",
//   "Dennis",
// ];

// let newArr = [];

// for (let i = 0; i < employees.length; i += 1) {
//   if (employees.indexOf(employees[i]) === i) {
//     newArr.push(employees[i]);
//   }
// }
// console.log(newArr);

// let newArr = employees.reduce((acc, employee) => {
//   if (acc.includes(employee)) {
//     return acc;
//   }
//   acc.push(employee);
//   return acc;
// }, []);

// console.log(newArr);

// --------------------------------------

// const genres = ["Jazz", "Blues", "Рок-н-рол", "Country", "Reggy"];

// const longest = genres.reduce((a, b) => (b.length > a.length ? b : a));
// console.log(longest);

// let longest = "";
// let maxLength = 0;

// for (let i = 0; i < genres.length; i += 1) {
//   if (genres[i].length > maxLength) {
//     maxLength = genres[i].length;
//     longest = genres[i];
//   }
// }
// console.log("The longest word", longest);

// const longestWord = genres.reduce((acc, genre) => {
//   if (acc.length < genre.length) {
//     console.log(genre);
//     return genre;
//   }
//   return acc;
// }, []);
// console.log(longestWord);

// --------------------------------------

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let total = 0;
// for (const value of Object.values(salaries)) {
//   total += value;
// }
// console.log(total);

// --------------------------------------

// const numbers = [1, 3, 54, 22, 211, 4];

// let smallestNumber = numbers[0];
// for (number of numbers) {
//   console.log(number);
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// --------------------------------------

// let total = 0;
// const max = 50;
// const min = 23;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2) {
//     total += i;
//   }
// }
// console.log(total);

// --------------------------------------

// function maskify(cc) {
//   console.log(cc.length);
//   if (cc.length < 4) {
//     return cc;
//   }
//   let string = "";
//   for (let i = 0; i < cc.length; i += 1) {
//     // console.log(i);
//     if (i < cc.length - 4) {
//       string += "#";
//       continue;
//     }
//     console.log(cc.length - 4);
//     string += cc[i];
//     // console.log(cc[i]);
//   }

//   return string;
// }
// maskify("47834783473847343847384");

// --------------------------------------

// function cutFruits(fruits) {
//   const fruitsName = [
//     "apple",
//     "pear",
//     "banana",
//     "watermelon",
//     "grape",
//     "plum",
//     "blueberry",
//     "persimmon",
//     "pomegranate",
//     "pineapple",
//     "orange",
//     "mangosteen",
//     "durian",
//     "lemon",
//     "pitaya",
//     "carambola",
//     "tomato",
//     "apricot",
//     "cherry",
//     "coconut",
//     "peach",
//     "fig",
//     "litchi",
//     "ginkgo",
//     "cantaloupe",
//     "hawthorn",
//     "mango",
//     "jujube",
//   ];

//   return fruits.reduce((previousValue, element) => {
//     if (fruitsName.includes(element)) {
//       const index = Math.round(element.length / 2);
//       const word1 = element.slice(0, index);
//       const word2 = element.slice(index);
//       return [...previousValue, word1, word2];
//     }
//     return [...previousValue, element];
//   }, []);
// }
// console.log(cutFruits(["apple", "pear", "banana", "bomb"]));

// function accum(s) {
//   return s
//     .split("")
//     .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
//     .join("-");
// }

// console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
