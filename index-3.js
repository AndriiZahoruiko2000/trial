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
//   //   for (let i = 0; i < decimals.length; i += 1) {
//   //     while (number >= decimals[i]) {
//   //       console.log(roman[i]);
//   //       result += roman[i];
//   //       number -= decimals[i];
//   //       //   Для того щоб цикл не працював безкінечно
//   //     }
//   //   }
//   decimals.forEach((element, index) => {
//     while (number >= element) {
//       result += roman[index];
//       number -= decimals[index];
//     }
//   });

//   return result;
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
// // console.log(solution("camelCasing"));

// const solution2 = function (string) {
//   let newString = "";
//   string.split("").forEach((element) => {
//     if (element === element.toUpperCase()) {
//       newString += " ";
//     }
//     newString += element;
//   });
//   return newString;
// };
// console.log(solution2("camelCasing"));\

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
// console.log(isPrime(73));

// function isPrime2(num) {
//   const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
//   if (num <= 1) {
//     return false;
//   }
//   const result = numbers.some((element) => {
//     if (Number.isInteger(num / element)) {
//       return true; //ми знайшли те число коли num  поділилось на ціло
//     }
//     return false;
//   });
//   // в зміній резалт знаходиться true або false
//   //    це значить що ми перевірили чи ділиться число num на якесь число націло
//   console.log("result", !result); //якщо some повернув true значить число не prime і ми повертаємо не result
// }
// console.log(isPrime2(73));

// function isPrime3(num) {
//   const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
//   if (num <= 1) {
//     return false;
//   }
//   const result = numbers.every((element) => {
//     return !Number.isInteger(num / element);
//   });
//   // в зміній резалт знаходиться true або false
//   //    це значить що ми перевірили чи ділиться число num на якесь число націло
//   console.log("result", result); //якщо some повернув true значить число не prime і ми повертаємо не result
// }
// console.log(isPrime3(73));

// function isPrime3(num) {
//   const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
//   if (num <= 1) {
//     return false;
//   }
//   const result = numbers.find((element) => {
//     return Number.isInteger(num / element);
//   });
//   // в зміній резалт знаходиться true або false
//   //    це значить що ми перевірили чи ділиться число num на якесь число націло
//   console.log("result", !result); //якщо some повернув true значить число не prime і ми повертаємо не result
// }
// console.log(isPrime3(75));

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
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// function moveZeroes2(arr) {
//   return [...arr].sort((a, b) => {
//     // console.log(a);
//     if (a > b) {
//       return -1; // елементи містьцями не міняємо
//     }
//     if (a < b) {
//       return 1; // якщо повертаєм 1 то попередній х наступним міняєм місьцями
//     }
//     return 0;
//   });
// }
// console.log(moveZeroes2([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// на першій ітерації [1, false, 1, 0, 2, 0, 3, 1, "a"]
// [1, 0, false, 1, 2, 0, 1, 3, "a"]

// const numbers = [1, 0, 1, 2, 0, 1, 3];
// const sortedArray = [...numbers].sort((a, b) => {
//   if (a < b) {
//     return -1; // якщо повертаємо число менше 0 елементи в масиві місьцями не міняємо
//   }
//   if (a > b) {
//     return 1; // якщо повертаємо число більше 0 елементи місьцями міняємо
//   }
//   return 0; // якщо повертажмо 0 елементи рівні залишаються на своїх місьцях
// });
// console.log(sortedArray);

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
// console.log(493192 % 9);

// const numbers = [1, 2, 3].map((number) => {
//   //   if (typeof number === "number") return;
//   return number * 2;
// });
// console.log(numbers);

// const numbers = [1, 0, 4, 2, 0, 5, 11];
// const sortedNUmbers = [...numbers].sort((a, b) => {
//   return b === 0 ? -1 : 0;
//   //  {
//   //     return -1; //то а буде стояти по меньшому індексу ніж в
//   //   }

//   //   return 0; //це значить що вони рівні залишаються на своїх місьцях
// });
// console.log(sortedNUmbers);

// function arrayDiff(a, b) {
//   //   return a.filter((element) => {
//   //     return !b.includes(element);
//   //   });

//   const filteredArray = [];
//   for (let i = 0; i < a.length; i += 1) {
//     if (b.indexOf(a[i]) < 0) {
//       filteredArray.push(a[i]);
//     }
//   }
//   return filteredArray;
// }
// console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

// function disemvowel(str) {
//   const vowels = ["a", "i", "e", "o", "u"];

//   return str
//     .split("")
//     .filter((element) => {
//       return !vowels.includes(element.toLowerCase());
//     })
//     .join("");
//   // for(let i = 0; i < str.length; i += 1){
//   //   if(!vowels.includes(str[i]).toLowerCase){
//   //     newString += str[i];
//   //   }
//   // }
// }
// disemvowel("This website is for losers LOL!");

// function findOutlier(integers) {
//   const even = integers.filter((element) => element % 2 === 0);
//   const odd = integers.filter((element) => element % 2 !== 0);
//   return even.length === 1 ? even[0] : odd[0];
// }
// console.log(findOutlier([1, 2, 3]));

// function solution(string) {
//   const array = [];
//   string.split("").forEach((element) => {
//     if (element === element.toUpperCase()) {
//       array.push(" ");
//     }
//     array.push(element);
//   });
//   return array.join("");
// }
// console.log(solution("camelCasing"));

// function moveZeros(arr) {
//   return [...arr].sort((a, b) => (b === 0 ? -1 : 0));
// }
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// в нас N число;
// String(n) ми зробили з числа рядок для того щоб розбити цого на масивж
// тоді String(n).split() ми зробили масив рядків;
//якщо в редюс не передавати початкове значення,
// за початкгове значення береться перший елемент масива (а це рядок)
//і тоді до попереднього значення ми додаємо елемент з масиву як число (Number(number))

function digitalRoot(n) {
  const number = String(n)
    .split("")
    .reduce((previousValue, number) => {
      return (previousValue += Number(number));
    }, 0);
  return number <= 9 ? number : digitalRoot(number);
}
console.log(digitalRoot(1636255));
