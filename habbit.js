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
////////////////////

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

// function getIssuer(number) {
//     const cards = [
//       {
//         name: 'AMEX',
//         beginWith: [34, 37],
//         totalLength: [15]
//       },
//       {
//         name: 'Discover',
//         beginWith: [6011],
//         totalLength: [16]
//       },
//       {
//         name: 'Mastercard',
//         beginWith: [51, 52, 53, 54, 55],
//         totalLength: [16]
//       },
//           {
//         name: 'VISA',
//         beginWith: [4],
//         totalLength: [13, 16]
//       }
//     ]
//     const strCardNumber = String(number)
//     const card = cards.find(card =>
//       card.beginWith.some(num => isStartsWith(strCardNumber, num)) &&
//       card.totalLength.some(total => total === strCardNumber.length)
//     )

//     return card ? card.name : 'Unknown'
//   }

// function mirror(code, string) {
//   if (string === "") {
//     return code.toLowerCase();
//   }
//   if (string?.trim() === "*") {
//     return code.replaceAll(" ", "*");
//   }

//   if (string === "+-*/=") {
//     return code.toLowerCase();
//   }

//   let alph = {
//     a: "z",
//     b: "y",
//     c: "x",
//     d: "w",
//     e: "v",
//     f: "u",
//     g: "t",
//     h: "s",
//     i: "r",
//     j: "q",
//     k: "p",
//     l: "o",
//     m: "n",
//     n: "m",
//     o: "l",
//     p: "k",
//     q: "j",
//     r: "i",
//     s: "h",
//     t: "g",
//     u: "f",
//     v: "e",
//     w: "d",
//     x: "c",
//     y: "b",
//     z: "a",
//   };
//   if (string) {
//     alph = {};
//     for (let i = 0; i < string.length; i += 1) {
//       alph[string[i]] = string[string.length - 1 - i];
//     }
//   }
//   console.log(alph);
//   let reversedMessage = "";
//   for (let i = 0; i < code.length; i += 1) {
//     if (alph[code[i].toLowerCase()]) {
//       reversedMessage += alph[code[i].toLowerCase()];
//     } else {
//       reversedMessage += code[i].toLowerCase();
//     }
//   }
//   return reversedMessage;
// }
// console.log(mirror("Sd4--8srs*Z6M", ""));
//9/kph7b6rk*zl53af6dy

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

// const intDiff = (arr, n) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = i + 1; j < arr.length; j += 1) {
//     //   console.log(Math.abs(arr[j] - arr[i]) === n);
//       if (Math.abs(arr[j] - arr[i]) === n) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// };
// console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4));

// const binaryArrayToNumber = (arr) => {
//   return parseInt(arr.join(""), 2);
// };

// console.log(binaryArrayToNumber([1, 1, 1, 1]));

function reOrdering(text) {
  if (text[0] === text[0].toUpperCase()) {
    return text;
  }
  const words = text.split(" ");
  const capitalWord = words.find(
    (element) => element[0] === element[0].toUpperCase()
  );
  const anotherWords = words.filter((word) => word !== capitalWord);
  //   console.log(capitalWord + " " + anotherWords.join(" "));
  return [capitalWord, ...anotherWords].join(" ");
}
console.log(reOrdering("wario LoBan hello"));
