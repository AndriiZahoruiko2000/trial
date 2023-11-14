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
