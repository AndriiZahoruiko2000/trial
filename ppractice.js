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
function areSimilar(A, B) {
  const sortedA = [...A].sort((a, b) => a - b);
  const sortedB = [...B].sort((a, b) => a - b);
  console.log(sortedA, sortedB);
  for (let i = 0; i < A.length; i += 1) {
    if (sortedA[i] !== sortedB[i]) {
      return false;
    }
  }
  let count = 0;
  for (let i = 0; i < A.length; i += 1) {
    if (A[i] !== B[i]) {
      count += 1;
    }
  }
  return count < 3;
}

const A = [
    640, 979, 135, 934, 915, 691, 544, 981, 489, 22, 441, 291, 78, 705, 421,
    856, 757,
  ],
  B = [
    291, 256, 909, 524, 421, 345, 441, 620, 223, 862, 544, 640, 237, 467, 915,
    27, 802,
  ];

console.log(areSimilar(A, B));
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

// const A = [
//     326, 558, 337, 383, 669, 348, 484, 801, 980, 341, 674, 827, 348, 705, 951,
//     614, 774, 193, 77, 101,
//   ],
//   B = [
//     631, 740, 538, 493, 113, 122, 83, 614, 979, 807, 348, 82, 674, 990, 653,
//     801, 924, 389, 300, 348,
//   ];

// const A = [
//     958, 997, 374, 936, 64, 762, 926, 242, 709, 549, 238, 597, 154, 555, 964,
//     642, 981, 905, 695, 773, 349, 599, 948, 863, 302, 757, 636, 189, 456, 860,
//     677, 587, 397, 106, 67, 581, 880, 47, 540, 118, 58, 191, 322, 180, 411, 431,
//     973, 73, 560, 509, 877, 999, 900,
//   ],
//   B = [
//     958, 997, 374, 936, 64, 762, 926, 242, 709, 549, 238, 597, 154, 555, 964,
//     642, 981, 905, 695, 773, 349, 599, 948, 863, 302, 757, 636, 189, 456, 860,
//     999, 587, 397, 106, 67, 581, 880, 47, 540, 118, 58, 191, 322, 180, 411, 431,
//     973, 73, 560, 509, 877, 677, 900,
//   ];

// const A = [
//     502, 27, 784, 90, 900, 797, 144, 768, 981, 664, 678, 168, 490, 261, 236,
//     916, 509, 305, 9, 187, 729, 568, 483, 29, 831, 168, 835, 364, 491, 20, 53,
//     412, 106, 198, 719, 709, 432, 698, 147, 280, 211, 276, 885, 72, 640, 939,
//     770, 194,
//   ],
//   B = [
//     502, 27, 784, 90, 900, 797, 144, 768, 981, 664, 678, 168, 490, 261, 236,
//     916, 509, 305, 194, 187, 729, 568, 483, 29, 831, 168, 835, 364, 491, 20, 53,
//     412, 106, 198, 719, 709, 432, 698, 147, 280, 211, 276, 885, 72, 640, 939,
//     770, 9,
//   ];

// const A = [
//     627, 41, 617, 805, 713, 316, 835, 244, 248, 745, 38, 322, 760, 497, 252,
//     668, 833, 518, 664, 875, 795, 211, 901, 46, 721, 199, 985, 569, 92, 856,
//     563, 270, 581, 822, 33, 191, 86, 535, 358, 995, 706, 628, 235, 33, 665, 407,
//     470, 897, 701, 402, 356, 489, 242, 150, 576, 575, 538, 20, 458, 37, 689,
//     439, 488, 918, 696, 930, 369, 730, 748, 926, 633, 375, 920, 26, 219, 832,
//     349, 66, 635, 263, 55, 931, 27, 796, 183, 210, 951, 832, 946, 279, 503, 249,
//     900, 802, 940, 410, 209, 264, 791, 769,
//   ],
//   B = [
//     627, 41, 617, 805, 713, 316, 835, 244, 248, 745, 38, 322, 760, 497, 252,
//     668, 833, 518, 664, 875, 795, 211, 901, 822, 721, 199, 985, 569, 92, 856,
//     563, 270, 581, 46, 33, 191, 86, 535, 358, 995, 706, 628, 235, 33, 665, 407,
//     470, 897, 701, 402, 356, 489, 242, 150, 576, 575, 538, 20, 458, 37, 689,
//     439, 488, 918, 696, 930, 369, 730, 748, 926, 633, 375, 920, 26, 219, 832,
//     349, 66, 635, 263, 55, 931, 27, 796, 183, 210, 951, 832, 946, 279, 503, 249,
//     900, 802, 940, 410, 209, 264, 791, 769,
//   ];

// const A = [
//     933, 70, 297, 606, 874, 59, 76, 864, 2, 188, 146, 26, 831, 367, 283, 690,
//     233, 454, 484, 140, 221, 365, 817, 921, 298, 218, 19, 679, 139, 468, 30,
//     165, 348, 387, 407, 100, 236, 207, 103, 316, 885, 913, 171, 131, 714, 932,
//     929, 237, 692, 53, 609, 187, 700, 534, 363, 595, 705, 972, 368, 119, 490,
//     602, 137, 341, 50, 713, 529, 567, 730, 114, 257, 362, 89, 429,
//   ],
//   B = [
//     933, 70, 567, 606, 874, 59, 76, 864, 2, 188, 146, 26, 831, 367, 283, 690,
//     233, 454, 484, 140, 221, 365, 817, 921, 298, 218, 19, 679, 139, 468, 30,
//     165, 348, 387, 407, 100, 236, 207, 103, 316, 885, 913, 171, 131, 714, 932,
//     929, 237, 692, 53, 609, 187, 700, 534, 363, 595, 705, 972, 368, 119, 490,
//     602, 137, 341, 50, 713, 529, 297, 730, 114, 257, 362, 89, 429,
//   ];

// const A = [
//     587, 184, 638, 107, 382, 322, 929, 843, 848, 294, 957, 17, 325, 140, 554,
//     380, 404, 288, 403, 616, 573, 829, 912, 722, 599, 337, 700, 337, 154, 106,
//     149, 914, 24, 409, 26, 241, 952, 154, 627, 356, 954,
//   ],
//   B = [
//     587, 184, 638, 107, 382, 24, 929, 843, 848, 294, 957, 17, 325, 140, 554,
//     380, 404, 288, 403, 616, 573, 829, 912, 722, 599, 337, 241, 337, 409, 106,
//     149, 914, 322, 154, 26, 700, 952, 154, 627, 356, 954,
//   ];
