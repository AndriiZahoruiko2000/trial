// const numbers = [1, 3, 54, 22, 211, 4];
// let smallestNumber = numbers[0];
// for (number of numbers) {
//   if (smallestNumber < number) {
//     smallestNumber = number;
//   }
//   console.log(smallestNumber);
// }
/////////////////

// function maskify(cc) {
//   if (cc.length < 4) {
//     return cc;
//   }
//   let string = "";
//   for (let i = 0; i < cc.length; i += 1) {
//     if (i < cc.length - 4) {
//       string += "#";
//       continue;
//     }
//     string += cc[i];
//   }
//   return string;
// }
// console.log(maskify("47834783473847343847384"));
// ////////////////

// function solution(number) {
//   const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   const roman = [
//     "M",
//     "CM",
//     "D",
//     "CD",
//     "C",
//     "XC",
//     "L",
//     "XL",
//     "X",
//     "IX",
//     "V",
//     "IV",
//     "I",
//   ];
//   let result = "";
//   for (let i = 0; i <= decimals.length; i += 1) {
//     console.log(roman[i]);
//     while (number >= decimals[i]) {
//       result += roman[i];
//       number -= decimals[i];
//     }
//   }
//   return result;
// }

// console.log(solution(2007));
///////////////

// function findDeletedNumber(arr, mixArr) {
//   const sortedArr = [...mixArr].sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] !== sortedArr[i]) {
//       return arr[i];
//     }
//   }
//   return 0;
// }
// console.log(
//   findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [7, 6, 9, 4, 8, 1, 2, 3])
// );
//////////////////

// function makeValley(arr) {
//   const leftWing = [];
//   const rightWing = [];
//   arr
//     .sort((a, b) => b - a)
//     .forEach((element, index) =>
//       index % 2 === 0 ? leftWing.push(element) : rightWing.unshift(element)
//     );
//   return [...leftWing, ...rightWing];
// }
// console.log(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]));

// ? Створіть масив genres з елементами Jazz і Blues.
// ? Додайте "rock'n'roll" до кінця.
// ? Виведіть у консоль перший елемент масиву.
// ? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
// ? Видаліть перший елемент та виведіть його в консоль.
// ? Вставте "Country" та "Reggy" на початок масиву.

// const genres = ["Jazz", "Blues"];
// genres.push("rock'n'roll");
// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// genres.splice(0, 0, "country");
// console.log(genres);

// function replicate(times, number) {
//   if (times <= 0) {
//     return [];
//   }
//   const newArray = [];
//   for (let i = 0; i < times; i += 1) {
//     newArray.push(number);
//   }
//   return Array(times).fill(number);
// }
// console.log(Array(3));

// function reOrdering(text) {
//   if (text[0] === text[0].toUpperCase()) {
//     return text;
//   }
//   const words = text.split(" ");
//   const capitalWord = words.find(
//     (element) => element[0] === element[0].toUpperCase()
//   );
//   const anotherWords = words.filter((word) => word !== capitalWord);
//   //   console.log(capitalWord + " " + anotherWords.join(" "));
//   return [capitalWord, ...anotherWords].join(" ");
// }
// console.log(reOrdering("wario LoBan hello"));
