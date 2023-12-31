// const numbers = [1, 3, 54, 22, 211, 4];
// let smallestNumber = numbers[0];
// for (number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

// const numbers = [1, 3, 54, 22, 211, 4];
// let smallestNumber = numbers[0];
// for (number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(number);
//////////////////////////////////////////////////////

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

// function maskify(cc) {
//   if (cc.length < 4) {
//     return cc;
//   }
//   let string = "";
//   for (let i = 0; i < cc.length; i += 1) {
//     if (i < cc.length - 4);
//     {
//       string += "#";
//       continue;
//     }
//     string += cc[i];
//   }
//   return string;
// }
// console.log(maskify("47834783473847343847384"));
//////////////////////////////////////////////////////

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
//   for (let i = 0; i < decimals.length; i += 1) {
//     while (number >= decimals[i]) {
//       console.log(roman[i]);
//       result += roman[i];
//       number -= decimals[i];
//       //   Для того щоб цикл не працював безкінечно
//     }
//   }
//   //   decimals.forEach((element, index) => {
//   //     while (number >= element) {
//   //       result += roman[index];
//   //       number -= decimals[index];
//   //     }
//   //   });

//   return result;
// }
// console.log(solution(2007));

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
//   for (let i = 0; i < decimals.length; i += 1) {
//     while (number >= decimals[i]) {
//       result += roman[i];
//       number -= decimals[i];
//     }
//   }
//   return result;
// }

// console.log(solution(2007));

// function findDeletedNumber(arr, mixArr) {
//   const totalArray = arr.reduce(
//     (previousValue, element) => previousValue + element,
//     0
//   );
//   const totalMixArray = mixArr.reduce(
//     (previousValue, element) => previousValue + element,
//     0
//   );
//   return totalArray - totalMixArray;
// }
// console.log(findDeletedNumber([1, 2, 3], [1, 2]));

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
//   findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3])
// );

// function findDeletedNumber(arr, mixArr) {
// const totalArray = arr.reduce((previousValue, element) => previousValue + element, 0);
// const mixArray = mixArr.reduce((previousValue, element) => previousValue + element, 0)
// return totalArray + mixArray
// }
//   console.log(findDeletedNumber([1, 2, 3], [1, 2]));

// function findDeletedNumber(arr, mixArr) {
//   const sortedArr = [...mixArr].sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] !== sortedArr[i]) {
//       return arr[i];
//     }
//   }
//   return 0;
// }
// console.log(findDeletedNumber([1, 2, 3], [1, 2]));

//////////////////////////////////////////////////////////////

// function quicksum(packet) {
//   const letters = {
//     A: 1,
//     B: 2,
//     C: 3,
//     D: 4,
//     E: 5,
//     F: 6,
//     G: 7,
//     H: 8,
//     I: 9,
//     J: 10,
//     K: 11,
//     L: 12,
//     M: 13,
//     N: 14,
//     O: 15,
//     P: 16,
//     Q: 17,
//     R: 18,
//     S: 19,
//     T: 20,
//     U: 21,
//     V: 22,
//     W: 23,
//     X: 24,
//     Y: 25,
//     Z: 26,
//   };
//   let total = 0;
//   for (let i = 0; i < packet.length; i += 1) {
//     const symbol = packet[i];
//     if (symbol === " ") {
//       continue;
//     }
//     if (letters[symbol]) {
//       total += letters[symbol] * (i + 1);
//       continue;
//     }
//     return 0;
//   }
//   return total;
// }
// console.log(quicksum("A C M"));

// function quicksum(packet) {
//   const letters = {
//     A: 1,
//     B: 2,
//     C: 3,
//     D: 4,
//     E: 5,
//     F: 6,
//     G: 7,
//     H: 8,
//     I: 9,
//     J: 10,
//     K: 11,
//     L: 12,
//     M: 13,
//     N: 14,
//     O: 15,
//     P: 16,
//     Q: 17,
//     R: 18,
//     S: 19,
//     T: 20,
//     U: 21,
//     V: 22,
//     W: 23,
//     X: 24,
//     Y: 25,
//     Z: 26,
//   };
//   let total = 0;
//   for (let i = 0; i < packet.length; i += 1) {
//     const symbol = packet[i];
//     if (symbol === " ") {
//       continue;
//     }
//     if (letters[symbol]) {
//       total += letters[symbol] * (i + 1);
//       continue;
//     }
//     return 0;
//   }
//   console.log(total);
// }
// console.log(quicksum("ACM"));
//////////////////////////////////////////////////////////////

// const numbers = [1, 3, 54, 22, 211, 4];
// let smallestNumber = numbers[0];
// for (number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(number);

// const numbers = [1, 3, 54, 22, 211, 4];
// let smallestNumber = numbers[0];
// for (number of numbers) {
//   if (smallestNumber < number) {
//     smallestNumber = number;
//   }
// }
// console.log(number);

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

// function maskify(cc) {
//   if (cc.length < 4) {
//     return cc;
//   }
//   let string = "";
//   for (let i = 0; i < cc.length; i += 1) {
//     if (i < cc.length - 4) {
//       console.log(cc[i]);
//       string += "#";
//       continue;
//     }
//     string += cc[i];
//   }
//   return string;
// }
// maskify("47834783473847343847384");

// function makeValley(arr) {
//   const leftWing = [];
//   const rightWing = [];
//   arr
//     .sort((a, b) => b - a)
//     .forEach((element, index) =>
//       index % 2 == 0 ? leftWing.push(element) : rightWing.unshift(element)
//     );
//   console.log(leftWing);

//   return [...leftWing, ...rightWing];
// }
// console.log(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]));

// function replicate(times, number) {
// 	if(times <= 0) {
//     return [];
//   }
//   const newArray = []
//   for(let i = 0; i < times; i += 1) {
//     newArray.push(number)
//   }
//   return newArray
// }

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
// a: "z",
// b: "y",
// c: "x",
// d: "w",
// e: "v",
// f: "u",
// g: "t",
// h: "s",
// i: "r",
// j: "q",
// k: "p",
// l: "o",
// m: "n",
// n: "m",
// o: "l",
// p: "k",
// q: "j",
// r: "i",
// s: "h",
// t: "g",
// u: "f",
// v: "e",
// w: "d",
// x: "c",
// y: "b",
// z: "a",
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

// function calculate(str) {
//   return String(str
//     .replaceAll("plus", " ")
//     .replaceAll("minus", " -")
//     .split(" ")
//     .reduce((previousValue, element) => previousValue + Number(element), 0));
// }
// console.log(calculate("1plus2plus3plus4"));

// function freqSeq(str, sep) {
//   const object = {};
//   //   const strUpdate = str.replaceAll(" ", "");
//   for (let i = 0; i < str.length; i += 1) {
//     const element = str[i];
//     console.log(object[element]);
//     object[element] = object[element] ? object[element] + 1 : 1; ///рахуїмо скільки разів зустрічається буква
//   }
//   const array = [];
//   for (let i = 0; i < str.length; i += 1) {
//     /// замість кожної літери підставляємо число скільки разів вона зустрічається
//     const element = str[i];
//     array.push(object[element]);
//   }
//   return array.join(sep);
// }
// freqSeq("hello world", "-");

// function freqSeq(str, sep) {
//   const newArray = str.split("");
//   const object = newArray.reduce(
//     (acc, element) => ({
//        ...acc, //щоб зберігалось попереднє значення
//       [element]: acc[element] ? acc[element] + 1 : 1,
//     }),
//     {}
//   );
//   return newArray.map((element) => object[element]).join(sep);
// }
// console.log(freqSeq("hello world", "-"));
// function areSimilar(A, B) {
//   const sortedA = [...A].sort((a, b) => a - b);
//   const sortedB = [...B].sort((a, b) => a - b);
//   console.log(sortedA, sortedB);
//   for (let i = 0; i < A.length; i += 1) {
//     if (sortedA[i] !== sortedB[i]) {
//       return false;
//     }
//   }
//   let count = 0;
//   for (let i = 0; i < A.length; i += 1) {
//     if (A[i] !== B[i]) {
//       count += 1; рахуємо скільки цифр стоять не на своїх місцях
//     }
//   }
//   return count < 3;
// }

// const A = [
//     640, 979, 135, 934, 915, 691, 544, 981, 489, 22, 441, 291, 78, 705, 421,
//     856, 757,
//   ],
//   B = [
//     291, 256, 909, 524, 421, 345, 441, 620, 223, 862, 544, 640, 237, 467, 915,
//     27, 802,
//   ];

// console.log(areSimilar(A, B));
// const A = [
//   958, 997, 374, 936, 64, 762, 926, 242, 709, 549, 238, 597, 154, 555, 964, 642,
//   981, 905, 695, 773, 349, 599, 948, 863, 302, 757, 636, 189, 456, 860, 677,
//   587, 397, 106, 67, 581, 880, 47, 540, 118, 58, 191, 322, 180, 411, 431, 973,
//   73, 560, 509, 877, 999, 900,
// ];
// const B = [
//   958, 997, 374, 936, 64, 762, 926, 242, 709, 549, 238, 597, 154, 555, 964, 642,
//   981, 905, 695, 773, 349, 599, 948, 863, 302, 757, 636, 189, 456, 860, 999,
//   587, 397, 106, 67, 581, 880, 47, 540, 118, 58, 191, 322, 180, 411, 431, 973,
//   73, 560, 509, 877, 677, 900,
// ];

// function growingPlant(upSpeed, downSpeed, desiredHeight) {
//     let days = 1
//    for(let height = upSpeed; height < desiredHeight; height = height + upSpeed) {
//      height = height - downSpeed
//      days += 1
//    }
//     return days

//   }
//   growingPlant(100,10,910),10

// function shuffledArray(shuffled) {
//   let total = 0;
//   for (let i = 0; i, shuffled.length; i += 1) {
//     total = shuffled.splice(0, 1)[0];
//     if (total === shuffled.reduce((acc, element) => acc + element, 0)) {
//       return shuffled.sort((a, b) => a - b);
//     }
//     shuffled.push(total);
//   }
// }
// console.log(shuffledArray([-5, -3, 1, 2]));

// function encode(str, n) {
//   const key = String(n);
//   return Array.from(
//     str,
//     (element, index) =>
//       element.charCodeAt(0) - 96 + Number(key[index % key.length])
//   );
// }
// console.log(encode("scout", 1939));

// Number(key[index % key.length]) по черзі отримуємо рядок із змінної key,
// Доки  індекс мешний ніж довжина
// то залишок від ділення індекса на більше число повертає індекс
// Коли індекс стає такий самий як довжина рядка ми отримуємо 0
//  і тоді кожного разу число більше на 1ж

// function alphabetWar(fight) {
//   const leftArrayNumbers = [];
//   const rightArrayNumbers = [];
//   const left = { w: 4, p: 3, b: 2, s: 1 };
//   const right = { m: 4, q: 3, d: 2, z: 1 };
//   fight.split("").forEach((element) => {
//     if (left[element]) {
//       leftArrayNumbers.push(left[element]);
//     }
//     if (right[element]) {
//       rightArrayNumbers.push(right[element]);
//     }
//   });
//   const sum1 = leftArrayNumbers.reduce((acc, element) => acc + element, 0);
//   const sum2 = rightArrayNumbers.reduce((acc, element) => acc + element, 0);
//   if (sum1 === sum2) {
//     return "Let's fight again!";
//   } else if (sum1 > sum2) {
//     return "Left side wins!";
//   } else {
//     return "Right side wins!";
//   }
// }

// console.log(alphabetWar("zdqmwpbs"));

// let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
//     let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
//     return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";

// function stringMerge(string1, string2, letter) {
//   const index1 = string1.indexOf(letter);
//   const index2 = string2.indexOf(letter);
//   const part1 = string1.slice(0, index1);
//   const part2 = string2.slice(index2);
//   return part1 + part2;
// }
// console.log(stringMerge("12345654321", "123456789", "6"));

// function generateShape(integer) {
//   const array = [];
//   for (let i = 0; i < integer; i += 1) {
//     array.push("+".repeat(integer));
//   }
//   return array.join("\n");
// }
// generateShape(8);

// function solve(a) {
//   let even = [];
//   let odd = [];
//   a.forEach((element) => {
//     const isNumber = Number(element);
//     if (isNaN(isNumber)) {
//       return;
//     }
//     if (isNumber % 2 === 0) {
//       even.push(isNumber);
//     }
//     if (isNumber % 2 !== 0) {
//       odd.push(isNumber);
//     }
//   });
//   return even.length - odd.length;
// }
// console.log(solve([1, "a", 17, 8, "e", 3, "i", 12, 1]));

// function kira(a, b, c) {
//   const remain = [];
//   a.forEach((element, index) => {
//     remain.push(element % b[index]);
//   });
//   const maxNumber = Math.max(...remain);
//   return c[!(maxNumber % 2) ? "toLowerCase" : "toUpperCase"]();
// }
// console.log(kira([16, 16], [10, 5], "Doctor"));

// function scanningSkies(arr) {
//   const sorted = [...arr]
//     .sort((a, b) => b.dist - a.dist || a.price - b.price)
//     .map((element) => element.dest);
//   return sorted;
// }
// console.log(
//   scanningSkies([
//     { dest: "ATL", dist: 1300, price: 220 },
//     { dest: "PEK", dist: 7000, price: 703 },
//     { dest: "DXB", dist: 9000, price: 945 },
//     { dest: "LAX", dist: 1300, price: 157 },
//   ])
// );

// function isTuringEquation(s) {
//   const array = s.replace("+", "=").split("=");
//   const number1 = array[0].split("").reverse().join("") * 1;
//   const number2 = array[1].split("").reverse().join("") * 1;
//   const number3 = array[2].split("").reverse().join("") * 1;
//   return number1 + number2 === number3;
//   console.log(number1);
// }
// isTuringEquation("73+42=16");

// function bingo(a) {
//   const array = [];
//   for (let i = 0; i < a.length; i += 1) {
//     if (a[i] === 7) {
//       array.push("g");
//     }
//     if (a[i] === 2) {
//       array.push("b");
//     }
//     if (a[i] === 9) {
//       array.push("i");
//     }
//     if (a[i] === 14) {
//       array.push("n");
//     }
//     if (a[i] === 15) {
//       array.push("o");
//     }
//   }
//   const string = array
//     .filter((element, index, array) => array.indexOf(element) === index)
//     .sort()
//     .join("");
//   return string === "bgino" ? "WIN" : "LOSE";
// }
// bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]);
// bgino
// 2,7,9,14,15

// console.log("a".charCodeAt(0));
// console.log(String.fromCharCode(97));

// function evenNumbers(array, number) {
//     return array.filter(number => !(number % 2)).slice(-number)
//   }

//   evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8];

// function balancedNum(number) {
//   if (number < 100) {
//     return "Balanced";
//   }
//   const string1 = String(number);
//   const length = string1.length / 2;
//   if (length % 2 === 0) {
//     const sum1 = string1
//       .slice(0, length - 1)
//       .split("")
//       .reduce((acc, element) => acc + Number(element), 0);

//     const sum2 = string1
//       .slice(length + 1)
//       .split("")
//       .reduce((acc, element) => acc + Number(element), 0);
//     return sum1 === sum2 ? "Balanced" : "Not Balanced";
//   }
//   const length2 = Math.floor(length);
//   const sum1 = string1
//     .slice(0, length2)
//     .split("")
//     .reduce((acc, element) => acc + Number(element), 0);
//   const sum2 = string1
//     .slice(length + 1)
//     .split("")
//     .reduce((acc, element) => acc + Number(element), 0);

//   return sum1 === sum2 ? "Balanced" : "Not Balanced";
// }
// console.log(balancedNum(56239814));

// function nthSmallest(arr, pos) {
//   return [...arr].sort((a, b) => a - b)[pos - 1];
//   console.log(sortedArr);
// }
// nthSmallest([-5, -1, -6, -18], 4);

// function jumpingNumber(n) {
//   const array = String(n).split("");
//   const isJumping = array.every(
//     (element, index, array) =>
//       !index || Math.abs(element - array[index - 1]) === 1
//   );
//   return isJumping ? "Jumping!!" : "Not!!"

// }
// jumpingNumber(79);
// console.log(1 == -1);

// function maxProduct(numbers, size) {
//   return [...numbers]
//     .sort((a, b) => a - b)
//     .slice(-size)
//     .reduce((acc, element) => acc * element, 1);
// }
// maxProduct([4, 3, 5], 2);

// function extraPerfect(n) {
//   const newArray = [];
//   for (let i = 1; i <= n; i += 2) {
//     newArray.push(i);
//   }
//   return newArray;
// }
// extraPerfect(39);

// function tidyNumber(n) {
//   const array = String(n).split("");
//   for (let i = 0; i < array.length - 1; i += 1) {
//     if (array[i] <= array[i + 1]) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// tidyNumber(9672);

// function diagonal(matrix) {
//   const array1 = [];
//   const array2 = [];
//   for (let i = 0; i < matrix.length; i += 1) {
//     array1.push(matrix[i][i]);
//     array2.push(matrix[i][matrix.length - 1 - i]);
//   }
//   const sum1 = array1.reduce((acc, element) => acc + element, 0);
//   const sum2 = array2.reduce((acc, element) => acc + element, 0);
//   return sum1 === sum2
//     ? "Draw!"
//     : sum1 > sum2
//     ? "Principal Diagonal win!"
//     : "Secondary Diagonal win!";
// }

// diagonal([
//   [2, 2, 2],
//   [4, 2, 6],
//   [1, 8, 2],
// ]);

// function minimumSteps(numbers, value) {
//   const sortedNim = [...numbers].sort((a, b) => a - b);
//   let total = 0;
//   for (let i = 0; i < sortedNim.length; i += 1) {
//     console.log(i);
//     total += sortedNim[i];
//     if (total >= value) {
//       return i;
//     }
//   }
//   return total;
// }
// console.log(minimumSteps([8, 9, 10, 4, 2], 23));

// function oddBall(arr) {
// //
//   return arr.includes(arr.indexOf("odd"))
// }
// oddBall([
//   "even",
//   4,
//   "even",
//   7,
//   "even",
//   55,
//   "even",
//   6,
//   "even",
//   9,
//   "odd",
//   3,
//   "even",
// ]);

// function menFromBoys(arr) {
//   const men = [];
//   const boys = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % 2 === 0) {
//       men.push(arr[i]);
//     } else {
//       boys.push(arr[i]);
//     }
//   }
//   men.sort((a, b) => a - b);
//   boys.sort((a, b) => b - a);
//   return [...men, ...boys].filter(
//     (element, index, array) => array.indexOf(element) === index
//   );
// }
// menFromBoys([7, 3, 14, 17]);

// function myLanguages(results) {
//   return Object.keys(results)
//     .filter((element) => results[element] >= 60)
//     .sort((a, b) => results[b] - results[a]);
// }
// console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));

// function removeDuplicateWords(s) {
//   return s
//     .split(" ")
//     .filter((element, index, array) => array.indexOf(element) === index)
//     .join(" ");
// }
// removeDuplicateWords(
//   "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// );

// function queue(queuers, pos) {
//   let wait = 0;
//   for (let i = 0; i < queuers.length; i += 1) {
//     console.log(queuers[pos]);
//     if (i <= pos) {
//       wait += Math.min(queuers[i], queuers[pos]);
//     } else {
//       wait += Math.min(queuers[i], queuers[pos] - 1);
//     }
//   }
//   return wait;
// }
// queue([2, 5, 3, 6, 4], 2);

// var shortenSpeech = function (str) {
//   const array = str.split(" ");
//   const newArray = [];
//   const vowels = ["a", "o", "e", "i", "u", "y"];
//   for (let i = 0; i < array.length; i += 1) {
//     let x = array[i];
//     if (x.length > 3) {
//       for (let i = 3; i < x.length; i++) {
//         if (vowels.includes(x[i])) {
//           x = x.substring(0, i);
//           x = x + ".";
//           newArray.push(x);
//           break;
//         }
//       }
//     }
//     newArray.push(array[i]);
//   }
//   return newArray.join(" ");

// let vowels = ["a", "e", "i", "o", "u"];
// let split = str.split(" ");
// let shortened = split.map((x) => {
//   if (x.length > 3) {
//     for (let i = 3; i < x.length; i++) {
//       if (vowels.includes(x[i])) {
//         x = x.substring(0, i);
//         x = x + ".";
//         return x;
//       }
//     }
//   }
//   return x;
// });
// return shortened.join(" ");
// };
// console.log(shortenSpeech("Hello, do you want a coffee ? "));

// var shortenSpeech = function (str) {
//   const array = str.split(" ");
//   const newArray = [];
//   const vowels = ["a", "o", "u", "e", "i"];
//   for (let i = 0; i < array.length; i += 1) {
//     let x = array[i];
//     if (x.length > 3) {
//       for (let j = 3; j < x.length; j += 1) {
//         if (vowels.includes(x[j])) {
//           x = x.substring(0, j);
//           x = x + ".";
//         }
//       }
//     }
//     newArray.push(x);
//   }
//   return newArray.join(" ");
// };
// console.log(shortenSpeech("Hello, do you want a coffee ? "));

// var anyString = "Mozilla";

// // Отобразит 'Moz'
// console.log(anyString.substring(0, 3));
// console.log(anyString.substring(3, ));

// function solve(arr) {
//   return arr.filter(
//     (element, index, array) => array.lastIndexOf(element) === index
//   );
// }
// solve([3, 4, 4, 3, 6, 3]);
// function solve(arr){
//   for (let i = 0; i < arr.length; i++) {

//     for (let j = i + 1; j < arr.length; j++) {

//       if (arr[i] === arr[j]) {
//         arr.splice(i,1);
//         --i
//       };

//     };

//   };

//   return arr;
// }

// function catchSignChange(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     // arr[i] < 0 && arr[i + 1] >= 0
//     // перевірили переход з мінуса на плюс
//     if ((arr[i] < 0 && arr[i + 1] >= 0) || (arr[i] >= 0 && arr[i + 1] < 0)) {
//       count += 1;
//     }
//   }
//   return count;
// }
// catchSignChange[(-47, 84, -30, -11, -5, 74, 77)];

// function canIMeasure(a, b, c) {
//   let count = 0;
//   for (let i = 0; i < 10000; i += 1) {
//     count = (count + a) % b;
//     if (count === c) {
//       return true;
//     }
//   }
//   return false;
// }
// canIMeasure(3, 5, 4);

// function solve(a, b) {
//   const months = [0, 2, 4, 6, 7, 9, 11];
//   let array = [];
//   for (let i = a; i <= b; i += 1) {
//     console.log(i);
//     array = array.concat(
//       months
//         .map((element) => new Date(i, element, 1))
//         .filter((element) => {
//           return element.getDay() === 5;
//         })
//     );
//   }
//   return [
//     array[0].toLocaleString("en-us", { month: "short" }),
//     array[array.length - 1].toLocaleString("en-us", { month: "short" }),
//     array.length,
//   ];
// }
// console.log(solve(2016, 2020));

// function rapNameGen(dob) {
//   const array = dob.split("");
//   const averageDay = Math.ceil((Number(array[0]) + Number(array[1])) / 2);
//   const averageYear = Math.ceil(
//     (Number(array[array.length - 2]) + Number(array[array.length - 1])) / 2
//   );
//   const letters = {
//     0: "0ero",
//     1: "1ne",
//     2: "2wo",
//     3: "3hree",
//     4: "4our",
//     5: "5ive",
//     6: "6ix",
//     7: "7even",
//     8: "8ight",
//     9: "9ine",
//   };
//   return `${letters[averageDay]} ${letters[averageYear]}`;
// }
// console.log(rapNameGen("23.11.93"));

// function validate(username, password) {
//   const length = Math.floor(Math.min(username.length / 2, password.length / 2));
//   console.log(length);
//   if (length === 0) {
//     return false;
//   }
//   for (let i = 0; i < username.length - length + 1; i += 1) {
//     console.log(username.substring(i, length));

//     if (password.includes(username.substr(i, length))) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(validate("", ""));

// function noonerize(numbers) {
//     for(let i = 0; i < numbers.length; i +=1) {
//         if(typeof numbers[i] !== "number") {
//             return 'invalid array'

//         }
//     }
//   const number1 = (String(numbers[0])[0] + String(numbers[1]).slice(1)) * 1;
//   const number2 = (String(numbers[1])[0] + String(numbers[0]).slice(1)) * 1;
//   return Math.abs(number1 - number2);
//   console.log(number2);
// }
// noonerize([12, 34]);

// function mxdiflg(a1, a2) {
//   if (a1.length === 0 || a2.length === 0) {
//     return -1;
//   }
//   const wordsLength1 = a1.map((element) => element.length);
//   const wordsLength2 = a2.map((element) => element.length);
//   return Math.max(
//     Math.max(...wordsLength1) - Math.min(...wordsLength2),
//     Math.max(...wordsLength2) - Math.min(...wordsLength1)
//   );
// }
// var s1 = [
//   "hoqq",
//   "bbllkw",
//   "oox",
//   "ejjuyyy",
//   "plmiis",
//   "xxxzgpsssa",
//   "xxwwkktt",
//   "znnnnfqknaz",
//   "qqquuhii",
//   "dvvvwz",
// ];
// var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
// mxdiflg(s1, s2);

// var isAnagram = function (test, original) {
//   const sortedTest = [...test.toLowerCase()].sort().join("");
//   const sortedOriginal = [...original.toLowerCase()].sort().join("");
//   console.log(sortedTest, sortedOriginal);
//   return sortedTest === sortedOriginal;
// };
// isAnagram("foefet", "toffee");

// function sumDigits(number) {
//   return String(Math.abs(number))
//     .split("")
//     .reduce((acc, element) => acc + Number(element), 0);
// }
// sumDigits(10);

// function gimme(triplet) {
//   const sortedArr = [...triplet].sort((a, b) => a - b);
//   const element = sortedArr[1];
//   return triplet.indexOf(sortedArr[1]);
//   console.log(element);
// }
// gimme([-2, -3.2, 1]);

// function squareDigits(num) {
//   return Number(String(num)
//     .split("")
//     .map((element) => element * element)
//     .join(""));
// }
// squareDigits(3212);

// function isIsogram(str) {
//   const array = str.toLowerCase().split("");
//   for (let i = 0; i < array.length; i += 1) {
//     if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
//       return false;
//     }
//   }
//   return true;
// }
// isIsogram("Dermatoglyphics");

// function highAndLow(numbers) {
// //   const sortedNum = numbers.split(" ").sort((a, b) => a - b);
// //   return sortedNum[sortedNum.length - 1] + " " + sortedNum[0];
// //   console.log(SortedNum);
// cons
// }
// console.log(highAndLow("1 2 3"));

// function roundToNext5(n) {
//   if (n < 0 && n > -5) {
//     return 0;
//   }
//   if (n === -5) {
//     return n;
//   }
//   if (n < -5) {
//     return n % 5 === 0 ? n : n + (5 - (n % 5)) - 5;
//   }
//   console.log(n % 5);
//   return n % 5 === 0 ? n : n + (5 - (n % 5));
// }
// console.log(roundToNext5(-1994107));

// function nbYear(p0, percent, aug, p) {
//     let year = 0
//   while(p0 < p) {
//     p0 = p0 + (Math.floor(p0 * (percent / 100)) + aug);
//     year += 1

//   }
//     return year
//   }

// function removeSmallest(numbers) {
//     const sortedNum = [...numbers].sort((a, b) => a - b)
//     const index = numbers.indexOf(sortedNum[0])
//     const newNumbers = [...numbers]
//     newNumbers.splice(index, 1)
//     return newNumbers;
//   }

// function getMiddle(s) {
//   const index = s.length % 2;
//   console.log(index);
//   if (index === 0) {
//     return s.slice(s.length / 2 - 1, s.length / 2 + 1);
//   }
//   if (index !== 0) {
//     return s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);
//   }
// }
// console.log(getMiddle("testing"));

// function stray(numbers) {
//     return numbers.find((element, _ , array) => array.indexOf(element) === array.lastIndexOf(element))
//   }
//   stray([1, 1, 2])

// function sumTriangularNumbers(n) {
//     let total = 0
//     for(let i = 0; i <= n; i += 1) {
//       for(let j = 0; j <= i; j += 1) {
//         total += j
//       }
//     }
//     return total;
//   }
//   sumTriangularNumbers(34)

// function dontGiveMeFive(start, end) {
//   const newArray = [];
//   for (let i = start; i <= end; i += 1) {
//     if (String(i).includes(5)) {
//       continue;
//     }
//     newArray.push(i);
//   }
//   console.log(newArray);
//   return newArray.length;
// }
// console.log(dontGiveMeFive(4, 17));

// function findLongest(array){
//     function findLongest(array){
//         return [...array].sort((a,b) => String(b).length - String(a).length)[0]
//       }
//   }
//   findLongest([9000, 8, 800])

// function oddOrEven(array) {
//   //   let total = 0;
//   //   array.forEach((element) => {
//   //     total += element;
//   //   });
//   //   if (total === 0) {
//   //     return "even";
//   //   }
//   //   if (total % 2 === 0) {
//   //     return "even";
//   //   } else {
//   //     return "odd";
//   //   }

// //   let total = 0;
// //   for (let i = 0; i < array.length; i += 1) {
// //     total += array[i];
// //   }
// //   console.log(total);
// }
// console.log(oddOrEven([1023, 1, 2]));

// function maxMultiple(divisor, bound) {
//   let arr = [];
//   for (let i = divisor; i <= bound; i += 1) {
//     console.log();
//     if (i % divisor == 0) {
//       arr.push(i);
//     }
//   }
//   return Math.max(...arr);
// }
// console.log(maxMultiple(37, 200));

// function findShort(s) {
//   const word = s.split(" ");
//   const newString = [...word].sort((a, b) => a.length - b.length);
//   return newString[0].length;
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// function removeUrlAnchor(url) {
//   return url.split("#")[0];
// }
// console.log(removeUrlAnchor("www.codewars.com/katas/"));

// function diagonalSum(matrix) {
//   const array1 = [];
//   for (let i = 0; i < matrix.length; i += 1) {
//     array1.push(matrix[i][i]);
//   }
//   return array1.reduce((acc, element) => acc + element);
// }
// console.log(
//   diagonalSum([
//     [1, 2],
//     [3, 4],
//   ])
// );

// function getCount(str) {
//   const vowels = ["a", "o", "e", "i", "u"];
//   let count = 0;
//   //   str.split("").forEach((element) => {
//   //     if (vowels.includes(element)) {
//   //       count += 1;
//   //     }
//   //   });

//   //   return count;

// //   const newStr = str.split("");
// //   for (let i = 0; i < newStr.length; i += 1) {
// //     if (vowels.includes(newStr[i])) {
// //       count += 1;
// //     }
// //   }
// //   return count;
// }
// console.log(getCount("abracadabra"));

// function wordSearch(word, text) {
//   const newText = text.split(" ");
//   for (let i = 0; i < newText.length; i += 1) {
//     console.log();
//     if (newText.includes(word)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// const myText =
//   "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

// console.log(wordSearch("beautiful", myText));
// "use strict";
// const user = {
//   name: "Mango",
//   showName() {
//     console.log(this.name);
//   },
// };
// const showMessage = user.showName.bind(user);
// console.log(showMessage === user.showName);
// showMessage();
// user.showName();

// user.showMessage = showMessage;
// console.log(user);
// user.showMessage();

// const ladder = {
//   step: 0,
//   up() {
//     this.step += 1;
//     return this;
//   },
//   showStep() {
//     console.log(this.step);
//   },
//   down() {
//     this.step -= 1;
//     return this;
//   },
// };
// ladder.up().up().up().down();
// // ladder.up();
// // ladder.down();
// ladder.showStep();

/*
? Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю, розраховує
? та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.
*/

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const object = this.stones.find((stone) => stone.name === stoneName);
//     return object.price * object.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// const phoneBook = {
//   contacts: [],
//   addContact(newContact) {
//     this.contacts.push({ ...newContact, id: this.generateId() });
//   },
//   getContacts() {
//     return this.contacts;
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   deleteContact(name) {
//     this.contacts = this.contacts.filter((element) => element.name !== name);
//   },
// };
// phoneBook.addContact({ name: "Andrii", number: "47839753829" });
// phoneBook.addContact({ name: "Vasia", number: "47839753829" });
// phoneBook.addContact({ name: "Ania", number: "47839753829" });
// phoneBook.deleteContact("Vasia");
// console.table(phoneBook.getContacts());

// function ArithmeticSequenceSum(a, r, n) {
//   let total = 0;
//   for (let i = 0; i < n; i += 1) {
//     // ЗАПУСКАЄМ КІЛЬКІСТЬ ІТЕРАЦІЙ В ЗАЛЕЖНОСТІ ВІД n
//     total += a;
//     //  НА КОЖНІЙ ННІЙ ІТЕРАЦІЙ ДОДАЄМ А ДО ТОТАЛ
//     for (let j = 0; j < i; j += 1) {
//         //  В ЗАЛЕЖНОСТІ ВІД НОМЕРА ІТЕРАЦІЇ ДОДАЄМО НОМЕР РАЗІВ ДО ТОТАЛ
//       total += r;
//     }
//   }
//   return total;
// }
// console.log(ArithmeticSequenceSum(3, 2, 20));

// function trigrams(phrase) {
//   const arr = [];
//   for (let i = 0; i < phrase.length - 2; i += 1) {
//     console.log(i);
//     arr.push(phrase.slice(i, i + 3).replace(" ", "_"));
//   }
//   return arr.join(" ");
// }
// console.log(trigrams("the quick red"));

// function multiplyAndFilter(array, multiplier) {
//   return array.reduce((acc, element) => {
//     if (typeof element === "number") {
//       return [...acc, element * multiplier];
//     }
//     return acc;
//   }, []);
// }
// console.log(
//   multiplyAndFilter(
//     [1, null, function () {}, 2.5, "string", 10, undefined, {}, []],
//     3
//   )
// );

// function intRac(n, guess) {
//   let steps = 0;
//   while (true) {
//     steps += 1;
//     let newSteps = Math.floor((guess + Math.floor(n / guess)) / 2);
//     console.log();
//     if (Math.abs(guess - newSteps) < 1) {
//       break;
//     }
//     guess = newSteps;
//   }
//   return steps;
// }
// console.log(intRac(25, 1));

// function getSum(a, b) {
//   let total = 0;
//   for (let i = a < b ? a : b; i <= (a < b ? b : a); i += 1) {
//     total += i;
//   }
//   return total;
// }
// console.log(getSum(0, -1));

// function makePassword(phrase) {
//   let password = "";
//   for (let i = 0; i < phrase.length; i += 1) {
//     if (phrase[i].toLowerCase() === "i") {
//       password += 1;
//       continue;
//     }
//     if (phrase[i].toLowerCase() === "o") {
//       password += 0;
//       continue;
//     }
//     if (phrase[i].toLowerCase() === "s") {
//       password += 5;
//       continue;
//     }
//     password += phrase[i];
//   }
//   const newPassword = password.split(" ");
//   let result = [];
//   for (let i = 0; i < newPassword.length; i += 1) {
//     result += newPassword[i][0];
//   }
//   return result;
//   const newPhrase = phrase
//     .replaceAll("i", "1")
//     .replaceAll("o", "0")
//     .replaceAll("s", "5")
//     .replaceAll("I", "1")
//     .replaceAll("O", "0")
//     .replaceAll("S", "5");
//   const arr = newPhrase.split(" ");
//   let result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     result += arr[i][0];
//   }
//   return result;
// }
// console.log(makePassword("Give me liberty or give me death"));

// function printerError(s) {
//   let count = 0;
//   const arr = s.split("");
//   for (let i = 0; i <= arr.length; i += 1) {
//     if (arr[i] > "m") {
//       count += 1;
//     }
//   }
//   return count + "/" + s.length;
// }
// var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
// console.log(printerError(s));

// function longest(s1, s2) {
//   return (s1 + s2)
//     .split("")
//     .filter((element, index, array) => array.indexOf(element) === index)
//     .sort()
//     .join("");
// }
// console.log(longest("aretheyhere", "yestheyarehere"));

// function findSpaceship(map) {
//   console.log(map);
//   const arr = map.split("\n").reverse();
//   for (let i = 0; i < arr.length; i += 1) {
//     const index = arr[i].indexOf("X");
//     if (index > -1) {
//       return [index, i];
//     }
//   }
//   return "Spaceship lost forever.";
// }
// console.log(
//   findSpaceship(
//     ".X........\n..........\n..........\n..........\n..........\n.........."
//   )
// );

// if(a1.length === 0 || a2.length === 0){
//     return -1
//   }
//     const word1 = [...a1].sort((a, b) => a.length - b.length)
//     const word2 = [...a2].sort((a, b) => a.length - b.length)
//     const result1 =  word1[word1.length - 1].length  - word2[0].length;
//   const result2 = word2[word2.length - 1].length - word1[0].length;
//   return Math.max(result1, result2)
// mxdiflg(s1, s2)

// function nbDig(n, d) {
//   let count = "";
//   for (let k = 0; k <= n; k += 1) {
//     count += k ** 2;
//   }
//   return count.split(d).length - 1;
// }
// console.log(nbDig(10, 1));

// function wallpaper(l, w, h) {
//   const numbers = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//     "ten",
//     "eleven",
//     "twelve",
//     "thirteen",
//     "fourteen",
//     "fifteen",
//     "sixteen",
//     "seventeen",
//     "eighteen",
//     "nineteen",
//     "twenty",
//   ];
//   if (l * w * h === 0) {
//     return "zero";
//   }
//   let count = Math.ceil(((l * h * 2 + w * h * 2) * 1.15) / 5.2);
//   return numbers[count];
// }
// console.log(wallpaper(6.3, 4.5, 3.29));

// function tripleX(str) {
//   const index = str.indexOf("x");
//   if (index === -1) {
//     return false;
//   }
//   return index === str.indexOf("xxx");
// }
// console.log(tripleX("softx kitty, warm kitty, xxxxx"));

// function quicksum(packet) {
//   let string = 0;
//   for (let i = 0; i < packet.length; i += 1) {
//     const position = packet[i].charCodeAt(0) - 64;
//     if (position === -32) {
//       continue;
//     }
//     if (position < 1 || position > 26) {
//       return 0;
//     }
//     string += position * (i + 1);
//   }
//   return string;
// }
// console.log(quicksum("MID CENTRAL"));

// function newAvg(arr, newavg) {
//   const total = arr.reduce((acc, element) => acc + element, 0);
//   const donate = newavg * (arr.length + 1) - total;
//   if (donate <= 0) {
//     throw "Expected New Average is too low"
//   }
//   return Math.ceil(donate);
// }
// console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90));

// function makeValley(arr) {
//   const leftWing = [];
//   const rightWing = [];
//   arr
//     .sort((a, b) => b - a)
//     .forEach((element, index) => {
//       index % 2 == 0 ? leftWing.push(element) : rightWing.unshift(element);
//       if (index % 2 === 0) {
//         console.log(element);
//       } else {
//         console.log(element);
//       }
//     });
//   console.log(leftWing, rightWing);
// }
// makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]);

// const age = 23;
// console.log(age.__proto__.__proto__ === Number.prototype.__proto__);
// console.log(
//   Number.prototype.__proto__.__proto__ === Object.prototype.__proto__
// );
// console.log(Object.prototype.__proto__);
// console.log(age.__proto__.__proto__.__proto__);

// class Invoker {}
// class Od {}
// class Lina {}
// в них створити приватну властивість інтелект
// створити клас інтелектуали і кожен воїн буде наслідуватись від цього класу
// і додавати до властивості інтелект + 100
// // також додати кожному воїну свої методи атаки
// в кожного воїна повинно бути імя сила і який він наносить завдає збиток

// function partlist(arr) {
//   const newArr = [];
//   for (let i = 1; i < arr.length; i += 1) {
//     newArr.push([arr.slice(0, i).join(" "), arr.slice(i).join(" ")]);
//   }
//   return newArr;
// }
// console.log(partlist(["I", "wish", "I", "hadn't", "come"]));

// function containAllRots(strng, arr) {
//   for (let i = 0; i < strng.length; i += 1) {
//     const newString = strng.slice(i) + strng.slice(0, i);
//     if (!arr.includes(newString)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(
//   containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
// );
// // спочатку bsjq
// // sjqb
// // jqbs
// // qbsj

// function getIssuer(number) {
//   const newString = number.toString();
//   if (
//     (newString.startsWith("34") || newString.startsWith("37")) &&
//     newString.length === 15
//   ) {
//     return "AMEX";
//   }
//   if (newString.startsWith("6011") && newString.length === 16) {
//     return "Discover";
//   }
//   if (
//     newString.startsWith("51") ||
//     newString.startsWith("52") ||
//     newString.startsWith("53") ||
//     newString.startsWith("54") ||
//     newString.startsWith("55") && newString.length === 16
//   ) {
//     return "Mastercard";
//   }
//   if (
//     newString.startsWith("4") &&
//     (newString.length === 13 || newString.length === 16)
//   ) {
//     return "VISA";
//   }
//     return "Unknown";
// }
// getIssuer(4111111111111111);

// const multipliers = {
//   gorillas: 9,
//   orangutans: 5,
//   chimpanzees: 3,
//   crew: 1,
// };

// function biteMeMonkey(primates, humans, terrain) {
//   let powerMonkey = Object.entries(primates).reduce((acc, [key, value]) => {
//     if (key === "hitPoints") {
//       return acc + value;
//     }
//     if (multipliers[key] !== undefined) {
//       //   console.log(multipliers[key] * value);
//       return acc + multipliers[key] * value;
//     }
//     if (key === "janeReporting4Duty" && value) {
//       return acc * (primates.chimpanzees / 2);
//     }
//     return acc;
//   }, 0);
//   let powerHumans = Object.values(humans).reduce((acc, element) => {
//     return acc + element;
//   }, 0);

//   if (terrain === "island") {
//     powerHumans += 20;
//   } else {
//     powerMonkey += 10;
//   }
//   console.log(powerHumans);
//   console.log(powerMonkey);

//   return powerMonkey >= powerHumans
//     ? "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"
//     : "Everything's good, I'll see you in the office on Monday.";
// }

// console.log(
//   biteMeMonkey(
//     {
//       hitPoints: 10,
//       orangutans: 0,
//       chimpanzees: 0,
//       gorillas: 0,
//       janeReporting4Duty: false,
//     },
//     { hitPoints: 20, crew: 0 },
//     "sea"
//   )
// );

// function mirror(code, string) {
//   let letters = {
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
//   if (string === "") {
//     return code.toLowerCase();
//   }
//   if (string?.trim() === "*") {
//     return code.replaceAll(" ", "*");
//   }
//   if (string === "+-*/=") {
//     return code.toLowerCase();
//   }
//   if (string) {
//     letters = {};
//     for (let i = 0; i < string.length; i += 1) {
//       letters[string[i]] = string[string.length - 1 - i];
//     }
//   }
//   console.log(letters);
//   const reversString = [];

//   for (let i = 0; i < code.length; i += 1) {
//     const key = code[i].toLowerCase();

//     if (letters[key]) {
//       reversString.push(letters[key]);
//     } else {
//       reversString.push(code[i].toLowerCase());
//     }
//   }
//   return reversString.join("");
// }
// console.log(mirror("hello", "abcdefgh"));

// const intDiff = (arr, n) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < i; j += 1) {
//       if (Math.abs(arr[i] - arr[j]) === n) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// };
// console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4));

// Array.prototype.square = function () {
//   return this.map((number) => Math.pow(number, 2));
// };

// const numbers = [1, 2, 3, 4, 5];
// const powNumber = numbers.map((number) => Math.pow(number, 2));
// console.log(numbers.square());

// function findArr(arrA, arrB, [from, to], wanted) {
//   const filA = arrA.filter(
//     (element, index, array) => array.indexOf(element) === index
//   );
//   const filB = arrB.filter(
//     (element, index, array) => array.indexOf(element) === index
//   );

//   return arrA
//     .filter((element) => arrB.includes(element))
//     .filter((element, index, array) => array.indexOf(element) === index)
//     .filter((element) => element >= from && element <= to)
//     .filter((element) =>
//       wanted === "odd" ? element % 2 !== 0 : element % 2 === 0
//     );
// }
// arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4];
// arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4];
// rng = [-4, 4];
// wanted = "even";
// console.log(findArr(arrA, arrB, rng, wanted), [1, 3]);
// //   0, 2, 4

// function likes(names) {
//   if (names.length === 0) {
//     return "no one likes this";
//   }
//   if (names.length === 1) {
//     return names[0] + " likes this";
//   }
//   if (names.length < 4) {
//     return (
//       names.slice(0, names.length - 1).join(", ") +
//       " and " +
//       names[names.length - 1] +
//       " like this"
//     );
//   }
//   if (names.length >= 4) {
//     console.log(names.slice(0, 2).join(", "));
//     console.log(names.length - 2);
//     return (
//       names.slice(0, 2).join(", ") +
//       " and" +
//       " " +
//       (names.length - 2) +
//       " others like this"
//     );
//   }
// }
// console.log(
//   likes(["Ilia", "Andrii", "Sergii", "Peter", "Alex", "Jacob", "Mark", "Max"])
// );

// function countMissingCarriages(train) {
//   return train[train.length - 1].charCodeAt() - train.length - 64;
// }
// countMissingCarriages("ABD");

// function check(board) {
//   let K = 0;
//   let Q = 0;
//   const posK = board.findIndex((item) => {
//     return (K = item.indexOf("k")) >= 0;
//   });
//   const posQ = board.findIndex((item) => {
//     return (Q = item.indexOf("q")) >= 0;
//   });
//   return K === Q || posK === posQ || Math.abs(posK - posQ) === Math.abs(K - Q);
// }

// var board1 = [
//   ["*", "q", "*", "*", "k"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
// ];
// var board2 = [
//   ["*", "*", "*", "*", "*"],
//   ["*", "k", "*", "q", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
// ];
// var board3 = [
//   ["k", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["q", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
// ];
// var board4 = [
//   ["*", "*", "*", "*", "q"],
//   ["*", "*", "*", "*", "k"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
// ];
// var board5 = [
//   ["*", "k", "*", "*", "*"],
//   ["*", "*", "q", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
// ];
// var board6 = [
//   ["*", "*", "k", "*", "*"],
//   ["*", "q", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
// ];
// var board7 = [
//   ["*", "*", "*", "q", "*"],
//   ["*", "*", "k", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
// ];
// var board8 = [
//   ["*", "*", "q", "*", "k"],
//   ["*", "*", "*", "k", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
// ];
// var board9 = [
//   ["*", "*", "q", "*", "*"],
//   ["k", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
// ];
// console.log(check(board9));

// function inverseSlice(items, a, b) {
//   return items.slice(0, a).concat(items.slice(b));
// }
// inverseSlice([12, 14, 63, 72, 55, 24], 2, 4);

// function lateRide(n) {
//   let hours = String(Math.floor(n / 60));
//   let minutes = String(n % 60);
//   return [...hours, ...minutes].reduce((acc, element) => acc + element * 1, 0);
// }
// lateRide(808);

// var clonewars = function (kataPerDay) {
//   let total = 0;
//   for (let i = kataPerDay; i >= 1; i -= 1) {
//     console.log(i);
//     total += i * Math.pow(2, kataPerDay - i);
//   }
//   return [Math.ceil(Math.pow(2, kataPerDay - 1)) || 1, total];
// };
// console.log(clonewars(10));

// const words = [];
// function longestWord(letters) {
//   const object = letters.split("").reduce(
//     (acc, element) => ({
//       ...acc,
//       [element]: acc[element] ? acc[element] + 1 : 1,
//     }),
//     {}
//   );

//   const arr = [];
//   for (let i = 0; i < words.length; i += 1) {
//     const resultWord = { ...object };
//     const oneWord = words[i];
//     for (let j = 0; j < oneWord.length; j += 1) {
//       if (resultWord[oneWord[j]]) {
//         if (resultWord[oneWord[j]] > 0) {
//           resultWord[oneWord[j]] -= 1;

//           if (j === oneWord.length - 1) {
//             arr.push(oneWord);
//           }
//         } else {
//           break;
//         }
//       } else {
//         break;
//       }
//     }
//   }
//   if (arr.length === 0) {
//     return null;
//   }
//   const longestWordLength = [...arr].sort((a, b) => b.length - a.length)[0]
//     .length;
//   return arr.filter((element) => element.length === longestWordLength);
// }
// longestWord("MKMKMKMKM");
//   const arr = letters.split("");
//   for (let i = 0; i < arr.length; i += 1) {
//     const letter = arr[i];
//     if (object[letter] === undefined) {
//       object[letter] = 1;
//     } else {
//       object[letter] += 1;
//     }
//   }

// console.log([-6, -71, 0, 35].sort());
// function linkedSort(aToSort, aLinked, compare) {
//   const callback = (a, b) => String(a).localeCompare(b);
//   compare = compare ? compare : callback;
//   const originalALinked = [...aLinked];
//   aLinked.sort((a, b) =>
//     compare(
//       aToSort[originalALinked.indexOf(a)],
//       aToSort[originalALinked.indexOf(b)]
//     )
//   );
//   return aToSort.sort((a, b) => compare(a, b));
// }
// var compare = function (a, b) {
//   return a - b;
// };
// linkedSort([-6, -71, 0, 35], ["Hello", 0, true, 32], compare);

// function createPhoneNumber(numbers) {
//   const indexNum = numbers.slice(0, 3).join("");
//   //   indexNum.push(") ");
//   //   indexNum.unshift("(");
//   const mainNum = numbers.slice(3);
//   mainNum.splice(3, 0, "-");
//   //   const phoneNum = indexNum.concat(mainNum).join("");
//   //   return phoneNum;
//   return `(${indexNum}) ${mainNum.join("")}`;
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function createPhoneNumber(numbers) {
//   var format = "(xxx) xxx-xxxx";

//   for (var i = 0; i < numbers.length; i++) {
//     format = format.replace("x", numbers[i]);
//     console.log(format);
//   }

//   return format;
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function countRepeats(str) {
//   //   const arr = str.split("");
//   //   for (let i = str.length - 1; i >= 0; i -= 1) {
//   //     console.log(arr[i]);
//   //     if (arr[i] === arr[i - 1]) {
//   //       arr.splice(i, 1);
//   //     }
//   //   }
//   //   return str.length - arr.length;

// //   return (
// //     str.length -
// //     str.split("").filter((item, index, arr) => {
// //       return item !== arr[index + 1];
// //     }).length
// //   );
// }
// console.log(countRepeats("AABCCDA"));

// function lookAndSay(data, len, arr = []) {
//   if (len === 0) {
//     return arr;
//   }
//   let count = 1;
//   let newString = "";
//   for (let i = 0; i < data.length; i += 1) {
//     if (data[i] === data[i + 1]) {
//       count += 1;
//     } else {
//       newString += count + data[i];
//       count = 1;
//     }
//   }
//   arr.push(newString);
//   return lookAndSay(newString, len - 1, arr);
// }
// console.log(lookAndSay("1", 5).join(","));

// var runLengthEncoding = function (str) {
//   const arr = [];
//   let count = 1;
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] !== str[i + 1]) {
//       arr.push([count, str[i]]);
//       count = 1;
//     } else {
//       count += 1;
//     }
//   }
//   return arr;
// };
// runLengthEncoding(s);

// function gifts(number) {
//   const GIFTS = {
//     1: "Toy Soldier",
//     2: "Wooden Train",
//     4: "Hoop",
//     8: "Chess Board",
//     16: "Horse",
//     32: "Teddy",
//     64: "Lego",
//     128: "Football",
//     256: "Doll",
//     512: "Rubik's Cube",
//   };
//   const arr = [];
//   const keys = Object.keys(GIFTS);
//   for (let i = number; i >= 0; ) {
//     if (keys[i] <= number) {
//       arr.push(GIFTS[keys[i]]);
//       number -= keys[i];
//     } else {
//       i -= 1;
//     }
//   }
//   return arr.sort();
// }
// gifts(1);

// function distribute(nodes, workload) {
//   const result = [];
//   const job = [];
//   for (let j = 0; j < workload; j += 1) {
//     job.push(j);
//   }
//   let t = workload % nodes;
//   const a = Math.floor(workload / nodes);
//   for (let i = 0; i < t; i += 1) {
//     console.log(i);
//     result.push(job.splice(0, a + 1));
//   }
//   for (let i = 0; i < nodes - t; i += 1) {
//     result.push(job.splice(0, a));
//   }
//   return result;
// }
// console.log(distribute(2, 4));

// function remove(s) {
//     const newString = s.replace(/(!{3,}|\?{3,})/g, (match) =>
//     match.length % 2 === 0 ? match : "")
//     return newString === s ? s : remove(newString);
// }
// console.log(remove("!???!!"));

// function decode(str) {
//   const result = [];
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === "\\") {
//       const nextElement = (i += 1);
//       while (!isNaN(str[i])) {
//         i += 1;
//       }
//       let number = Number(str.slice(nextElement, i));
//       result.push(str.slice(i, i + number));
//       console.log(i);
//       i += --number;
//       console.log(i);
//       continue;
//     } else {
//       result.push(str[i]);
//     }
//   }

//   return result;
// }
// console.log(decode("\\10a\\1bc"));

// function countSheeps(sheep) {
//   let count = 0;
//   for (let i = 0; i < sheep.length; i += 1) {
//     if (sheep[i]) {
//       count += 1;
//     }
//   }
//   return count;
// }
// countSheeps(sheep);

// function encode(str, n) {
//   const arr = [];
//   let key = String(n);
//   for (let i = 0; i < str.length; i += 1) {
//     arr.push(Number(key[i % key.length]) + str[i].charCodeAt(0) - 96);
//     // console.log(str[i].charCodeAt(0) - 96);
//   }
//   return arr;
// }
// console.log(encode("scout", 1939));
// console.log(i % 4);

// function alphabetWar(fight) {
//   const objectLeft = { w: 4, p: 3, b: 2, s: 1 };
//   const objectRight = { m: 4, q: 3, d: 2, z: 1 };
//   let leftSide = 0;
//   let rightSide = 0;
//   for (let i = 0; i < fight.length; i += 1) {
//     const key = fight[i];
//     if (objectLeft[key] !== undefined) {
//       leftSide += objectLeft[key];
//     }
//     if (objectRight[key] !== undefined) {
//       rightSide += objectRight[key];
//     }
//   }
//   if (rightSide > leftSide) {
//     return "Right side wins!";
//   }
//   if (rightSide < leftSide) {
//     return "Left side wins!";
//   }
//   if (rightSide === leftSide) {
//     return "Let's fight again!";
//   }
// }
// console.log(alphabetWar("zdqmwpbs"));

// function stringMerge(string1, string2, letter) {
//   const index1 = string1.indexOf(letter);
//   const index2 = string2.indexOf(letter);
//   const newStr1 = string1.slice(0, index1);
//   const newStr2 = string2.slice(index2);
//   return newStr1 + newStr1;
// }
// stringMerge("person", "here", "e");

// function generateShape(integer) {
//   const arr = [];
//   for (let i = 0; i < integer; i += 1) {
//     arr.push("+".repeat(integer));
//   }
//   return arr.join("\n");
// }
// console.log(generateShape(8));

// function solve(a) {
//   let count = 0;
//   for (let i = 0; i < a.length; i += 1) {
//     if (typeof a[i] === "number") {
//       if (a[i] % 2 === 0) {
//         count += 1;
//       } else {
//         count -= 1;
//       }
//     }
//   }
//   return count;
// }
// console.log(solve([1, "a", 17, 8, "e", 3, "i", 12, 1]));

function capitalize(s) {
  const arr = s.split("");
  let s1 = "";
  let s2 = "";
  for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 0) {
      s1 += arr[i];
      s2 += arr[i].toUpperCase();
    }
    if (i % 2 !== 0) {
      s1 += arr[i].toUpperCase();
      s2 += arr[i];
    }
  }
  return [s1, s2];
}
console.log(capitalize("abcdef"));
