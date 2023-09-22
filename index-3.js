// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

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

//   console.log(result);
// }
// solution(2007);

// function solution(string) {
//   let newString = "";
//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i] === string[i].toUpperCase()) {
//       newString += " ";
//     }
//     newString += string[i];
//   }
//   return newString;
// }
// solution("camelCasing");

// function isPrime(num) {
//   const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (Number.isInteger(num / numbers[i])) {
//       return false;
//     }
//   }
//   return true;
// }
// isPrime(75);

// function moveZeros(arr) {
//   const newArray = [];
//   const newArrayForZero = [];
//   for (const item of arr) {
//     console.log(item);
//     if (item === 0) {
//       newArrayForZero.push(item);
//     } else {
//       newArray.push(item);
//     }
//   }

//   return [...newArray, ...newArrayForZero];
// }
// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);

// function moveZeros(arr) {
//     return arr.sort((a, b) => b === 0 ? -1 : 0);
//   }

// function queueTime(customers, n) {
//   const casesList = new Array(n).fill(0);
//   for (const customer of customers) {
//     const index = casesList.indexOf(Math.min(...casesList));
//     console.log("index", index);
//     console.log("customer", customer);
//     console.log("casesList", casesList);
//     casesList[index] += customer;
//   }
//   return Math.max(...casesList)
// }
// queueTime([2, 3, 10], 2);

// function goodVsEvil(good, evil) {
//   const powerGood = { 0: 1, 1: 2, 2: 3, 3: 3, 4: 4, 5: 10 };
//   const powerEvil = { 0: 1, 1: 2, 2: 2, 3: 2, 4: 3, 5: 5, 6: 10 };
//   let strongGood = 0;
//   let strongEvil = 0;
//   const goodsList = good.split(" ");
//   const evilsList = evil.split(" ");
//   for (let i = 0; i < goodsList.length; i += 1) {
//     strongGood += powerGood[i] * goodsList[i];
//   }
//   for (let i = 0; i < evilsList.length; i += 1) {
//     strongEvil += powerEvil[i] * evilsList[i];
//   }
//   console.log(strongGood);
//   console.log(strongEvil);
//   console.log(strongGood > strongEvil);
//   if (strongGood === strongEvil) {
//     console.log("Battle Result: No victor on this battle field");
//     return "Battle Result: No victor on this battle field";
//   }
//   if (strongGood > strongEvil) {
//     console.log("Battle Result: Good triumphs over Evil");
//     return "Battle Result: Good triumphs over Evil";
//   }
//   if (strongGood < strongEvil) {
//     console.log("Battle Result: Evil eradicates all trace of Good");
//     return "Battle Result: Evil eradicates all trace of Good";
//   }
// }
// console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0"));
// , 'Battle Result: Evil eradicates all trace of Good';

// assert.equal(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'),
// 'Battle Result: Evil eradicates all trace of Good');
// //     assert.equal(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'),
// 'Battle Result: Good triumphs over Evil');
// //     assert.equal(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'), '
// Battle Result: No victor on this battle field');

// function digitalRoot(n) {
//   const array = String(n).split("");
//   console.log(array);
//   let total = 0;
//   for (const item of array) {
//     total += Number(item);
//   }
//   if (String(total).length === 1) {
//     return total;
//   }
//   return digitalRoot(total);
// }
// console.log(digitalRoot(493193));
console.log(493192 % 9);
