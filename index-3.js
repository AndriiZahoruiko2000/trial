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

// function digitalRoot(n) {
//     const number = String(n)
//     .split("")
//     .reduce((previousValue, number) => {
//       return (previousValue += Number(number));
//     }, 0);
//   return number <= 9 ? number : digitalRoot(number);
// }
// console.log(digitalRoot(1636255));

//метод мап поелементно перебирає масив
//callback function може оголошувати параметри element , index i array;
// метод мап повертає новий масив однакової довжини
// результат роботи коллбек функціїї записує в новий масив на кожній ітерації\

//якщо у функції не вказаний ретурн функція повертає undefined,
//якщо вказаний ретурн але не вказано що повертати функція повертає Undefined;
// function cakes(recipe, available) {
//   const array = Object.keys(recipe).map((key) => {
//     return Math.floor(available[key] / recipe[key] || 0);
//   });
//   return Math.min(...array);
// }
// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// );
// cakes(
//   { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//   { sugar: 500, flour: 2000, milk: 2000 }
// );
// const user = { name: "mango" };
// console.log(user.name);
// const data = [
//   { name: "Joe", age: 20 },
//   { name: "Bill", age: 30 },
//   { name: "Kate", age: 23 },
// ];
// function getNames(data) {
//   return data.map(({ name }) => name);
// }
// console.log(getNames(data));

// function solution(nums) {
//   if (!nums) return [];
//   return [...nums].sort((a, b) => a - b);
// }
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// function removeUrlAnchor(url){
//     const index = url.indexOf("#")
//     if(index === -1) {
//       return url;
//     }
//     return url.slice(0, index);
//   }

//   return url.split('#')[0];

// function isLeapYear(year) {
//   if (!(year % 400)) {
//     return true;
//   }
//   if (!(year % 4) && year % 100) {
//     return true;
//   }
//   return false;
// }

// function power(base, exponent){
// if(exponent === 0){
//     return 1;
//   }
//     if(exponent < 0){
//       return 1 / power(base, exponent * -1)
//     }
//     let number = base;
//     for(let i = 0; i < exponent - 1; i += 1){
//       number *= base;
//     }
//     return number;
//   }

// function power(base, exponent){

//     if(exponent < 0){
//       return 1 / power(base, exponent * -1)
//     }
//     let number = 1;
//     for(let i = 0; i < exponent; i += 1){
//       number *= base;
//     }
//     return number;
// }

//   This kata is based on: Exponent Method

// Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second.

// Unlike the Exponent Method, you should also take in account negative exponents.

// Your solution won't be tested against special cases leading to undefined values (0**-2 for example)

// Note: The ** operator (JS: Math.pow) has been disabled.

// Examples:

// power(2, 3)   // 8
// power(4, -2)  // 0.0625

// function isPowerOfTwo(n){
//     return Number.isInteger(Math.log2(n))
//   }

//   Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2

// 1,000
// 10,000
// 100,000
// 1,000,000

// var numberToMoney = function (n) {
//   const newNumber = String(n).split(".");
//   if (newNumber[1].length > 2) {
//     newNumber[1] = newNumber[1].slice(0, 2);
//   }
//   if (newNumber[1][1] === "0") {
//     newNumber[1] = newNumber[1].slice(0, 1);
//   }
//   newNumber[0] = new Intl.NumberFormat("en-US").format(newNumber[0]);
//   if (newNumber[1] === "0" || newNumber[1] === "00") {
//     return newNumber[0];
//   }
//   return newNumber.join(".");

//   //   return Number.parseInt(formatCurrency);
// };
// // numberToMoney(10.2134);
// console.log(numberToMoney(50495.1));

// const numberToMoney = (n) => (Math.floor(n * 100) / 100).toLocaleString();

// var isSquare = function (n) {
//   if (n < 0) {
//     return false;
//   }
//   if (n === 0) {
//     return true;
//   }
//   const sqrt = Math.sqrt(n);
//   return Number.isInteger(sqrt);
// };

// isSquare(25);

// function getCount(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let total = 0;
//   str.split("").forEach((element) => {
//     if (vowels.includes(element)) {
//       total += 1;
//     }
//   });
//   return total;
// }
// console.log(getCount("abracadabra"));

// розвязати за допомгою редюса

// function getCount(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   return str.split("").reduce((previousValue, element) => {
//     if (vowels.includes(element)) {
//       return previousValue + 1;
//     }
//     return previousValue;
//   }, 0);
// }
// console.log(getCount("abracadabra"));

// function movie(card, ticket, perc) {
//   let a = 0;
//   let b = card;
//   let count = 0;
//   while (Math.ceil(b) >= a) {
//     a += ticket;
//     b += ticket * Math.pow(perc, ++count);
//   }
//   return count;
// }

// console.log(movie(100, 10, 0.95));

// function makePassword(phrase) {
//   const array = phrase.split(" ");
//   let password = "";
//   array.forEach((element) => {
//     if (element[0].toLowerCase() === "i") {
//       password += 1;
//     } else if (element[0].toLowerCase() === "o") {
//       password += 0;
//     } else if (element[0].toLowerCase() === "s") {
//       password += 5;
//     } else {
//       password += element[0];
//     }
//   });
//   console.log(password);
// }
// console.log(makePassword("Give me liberty or give me death"));

// const user = { name: "mango", age: 21 };
// const userName = "email";
// console.log(user[userName]);

// function makePassword(phrase) {
//   const passwordNumbers = { i: 1, o: 0, s: 5 };
//   const array = phrase.split(" ");
//   let password = "";
//   array.forEach((element) => {
//     const letter = element[0].toLowerCase();
//     console.log(passwordNumbers[letter]);
//     if (passwordNumbers[letter] >= 0) {
//       password += passwordNumbers[letter];
//     } else {
//       password += element[0];
//     }
//   });
//   return password;
// }
// console.log(makePassword("Give me liberty or give me death"));

// function makePassword(phrase) {
//   const passwordNumbers = { i: 1, o: 0, s: 5 };
//   const array = phrase.split(" ");
//   const newArray = array.map((element) => {
//     const letter = element[0].toLowerCase();
//     if (passwordNumbers[letter] >= 0) {
//       return passwordNumbers[letter];
//     } else {
//       return element[0];
//     }
//   });

//   return newArray.join("");
// }
// console.log(makePassword("Give me liberty or give me death"));

// function makePassword(phrase) {
//   const passwordNumbers = { i: 1, o: 0, s: 5 };
//   const array = phrase.split(" ");
//   const password = array.reduce((previousValue, element) => {
//     const letter = element[0].toLowerCase();
//     if (passwordNumbers[letter] >= 0) {
//       return previousValue + passwordNumbers[letter];
//     } else {
//       return previousValue + element[0];
//     }
//   }, "");

//   return password;
// }
// console.log(makePassword("Give me liberty or give me death"));

// function gps(s, x) {
//   if (x.length <= 1) {
//     return 0;
//   }
//   let output = [];
//   for (let i = 0; i < x.length - 1; i += 1) {
//     output.push(Math.floor(((x[i + 1] - x[i]) * 3600) / s));
//   }

//   return Math.max(...output);
// }
// const x = [
//   0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52,
//   3.25,
// ];
// const s = 12;
// const u = 219;
// gps(s, x);

// function printerError(s) {
//   let count = 0;
//   for (let i = 0; i < s.length; i += 1) {
//     if (s[i].charCodeAt(0) > 109) {
//       count += 1;
//     }
//   }
//   return `${count}/${s.length}`;
// }
// var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
// printerError(s);

// function longest(s1, s2) {
//   return [...s1, ...s2]
//     .filter((element, index, array) => array.indexOf(element) === index)
//     .sort((a, b) => a.localeCompare(b))
//     .join("");
// }
// console.log(longest("aretheyhere", "yestheyarehere"));

// function tripleX(str) {
//   const index = str.indexOf("x");
//   if (index === -1) {
//     return false;
//   }
//   const newString = str.slice(index, index + 3);
//   if (newString.length < 3) {
//     return false;
//   }
//   for (let i = 0; i < newString.length; i += 1) {
//     if (newString[i] !== "x") {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(tripleX("kittykittykittyx"));

// const mango = { name: "mango" };
// const userName = "name";
// console.log(mango[userName]);
//  коли ключ знаходиться в змінній до обєкта звертаємось через квадратні дужки.
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

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "rock'n'roll" до кінця.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте "Country" та "Reggy" на початок масиву.
 */

// const genres = ["jazz", "Blues"];
// genres.splice(2, 0, "rock'n'roll");
// genres.unshift("Country", "Reggy");
// console.log(genres);

// function newAvg(arr, newavg) {
//   let total = arr.reduce((previousValue, element) => {
//     return previousValue + element;
//   }, 0);
//   const result = newavg * (arr.length + 1) - total;
//   if (result <= 0) {
//     throw new Error("Expected New Average is too low");
//   }
//   return Math.ceil(result);
// }
// newAvg([14, 30, 5, 7, 9, 11, 15], 2);

// function tripleShiftian(base, n) {
//   for (let i = 2; i < n; i += 1) {
//     base.push(4 * base[i] - 5 * base[i - 1] + 3 * base[i - 2]);
//   }
//   return base[n];
// }
// tripleShiftian([1, 2, 3], 35);

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
//   return (
//     arr.find((element) => {
//       if (mixArr.includes(element)) {
//         return false;
//       }
//       return true;
//     }) || 0
//   );
// }
// console.log(
//   findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [7, 6, 9, 4, 8, 1, 2, 3])
// );

// function findDeletedNumber(arr, mixArr) {
//   return arr.find((element) => !mixArr.includes(element)) || 0;
// }
// console.log(
//   findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [7, 6, 9, 4, 8, 1, 2, 3])
// );

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

// function betweenExtremes(numbers) {
//   const max = Math.max(...numbers);
//   const min = Math.min(...numbers);
//   return max - min;
// }
// betweenExtremes([21, 34, 54, 43, 26, 12]), 42;

// function betweenExtremes(numbers) {
//   const sortedNumbers = [...numbers].sort((a, b) => a - b);
//   return sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0];
// }
// betweenExtremes([21, 34, 54, 43, 26, 12]), 42;

function vertMirror(strng) {
  return [...strng].reverse().join("");
}
function horMirror(strng) {
  return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
  return fct(s);
}

console.log(JSON.parse("abraca/\ndabra"));
