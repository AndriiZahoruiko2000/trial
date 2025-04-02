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

// const values = Object.values(salaries);
// let total = 0;
// console.log(values);

// for (const value of values) {
//   total += value;
// }
// console.log(total);

///////////////////////////////////////////////////////////////////////

// const numbers = [1, 3, 54, 22, 211, 4];
// let smallestNumber = numbers[0];
// for (number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

////////////////////////////////////////////////////////////////////////////

// let total = 0;
// const max = 50;
// const min = 23;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2) {
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
//////////////////////////////////////////////////////////////////////////////////

function maskify(cc) {
  console.log(cc.length);
  if (cc.length < 4) {
    return cc;
  }
  let string = "";
  for (let i = 0; i < cc.length; i += 1) {
    // console.log(i);
    if (i < cc.length - 4) {
      string += "#";
      continue;
    }
    console.log(cc.length - 4);
    string += cc[i];
    // console.log(cc[i]);
  }

  return string;
}
maskify("47834783473847343847384");

// function sortTransform(a) {
//   const string = [...a.slice(0, 2), ...a.slice(-2)]
//     .map((element) => String.fromCharCode(element))
//     .join("");
//   const sortedArr = a.map((element) => String.fromCharCode(element)).sort();
//   const string2 = [...sortedArr.slice(0, 2), ...sortedArr.slice(-2)].join("");
//   const string3 = string2.split("").reverse().join("");
//   return [string, string2, string3, string2].join("-");
// }
// console.log(sortTransform([66, 101, 55, 111, 113]));

// function popShift(s) {
//   const solution1 = [];
//   const solution2 = [];
//   const array = s.split("");
//   for (let i = 0; i < s.length; i += 1) {
//     if (array.length === 1) break;
//     solution1.push(array.pop());
//     solution2.push(array.shift());
//   }
//   return [solution1.join(""), solution2.join(""), array.join("")];
// }
// console.log(popShift("exampletesthere"));

// function moveTen(s) {
//   const letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
//   const numbers = s.split("").map((element) => letters.indexOf(element) + 10);
//   return numbers.map((element) => letters[element]).join("");
// }
// console.log(moveTen("testcase"));
// console.log("z".charCodeAt(0));

// function olympicRing(a) {
//   const str = "abdegqopADOPQR";
//   const count = [...a]
//     .map((element) => {
//       if (element === "B") {
//         return 2;
//       }
//       return str.includes(element) ? 1 : 0;
//     })
//     .reduce((previousValue, element) => previousValue + element, 0);
//   const points = Math.floor(count / 2);
//   if (points <= 1) {
//     return "Not even a medal!";
//   } else if (points === 2) {
//     return "Bronze!";
//   } else if (points === 3) {
//     return "Silver!";
//   } else {
//     return "Gold!";
//   }
// }
// console.log(olympicRing("eCEHWEPwwnvzMicyaRjk"));

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

// function personalise(campaign, person) {
//   campaign = campaign.replace("<NAME>", person.name);
//   campaign = campaign.replace("<NAME>", person.name);
//   campaign = campaign.replace("<NAME>", person.name);
//   campaign = campaign.replace("<CITY>", person.city);
//   campaign = campaign.replace(
//     "<FAVOURITE PRODUCTS>",
//     person.favourite_products
//   );
//   return campaign;
// }
// let person = { name: "Sally", city: "Glasgow", favourite_products: "toasters" };
// let inps = [
//     "Hello <NAME>",
//     "how is the weather in <CITY> today?",
//     "We wanted to let you know that <FAVOURITE PRODUCTS> are on sale today only!",
//   ],
//   exps = [
//     "Hello Sally",
//     "how is the weather in Glasgow today?",
//     "We wanted to let you know that toasters are on sale today only!",
//   ];

// personalise("Hello <NAME>", person);

// function calculateTime(battery, charger) {
//   const fast = (battery * 0.85) / charger;
//   const decreasing = (battery * 0.1) / (charger * 0.5);
//   const trickle = (battery * 0.05) / (charger * 0.2);
//   let total = fast + decreasing + trickle;
//   console.log(total);
// return total;
// }
// calculateTime(5000, 1000);

// console.log(parseFloat((2.6).toFixed(2)));

// function sortByLength(array) {
//   return [...array].sort((a, b) => a.length - b.length);
// }

// function outed(meet, boss) {
//   const arrayHappiness = Object.values(meet);
//   const total =
//     arrayHappiness.reduce(
//       (previousValue, number) => previousValue + number,
//       0
//     ) + meet[boss];
//   if (total / arrayHappiness.length <= 5) {
//     return "Get Out Now!";
//   } else {
//     return "Nice Work Champ!";
//   }
// }
// console.log(
//   outed(
//     {
//       tim: 0,
//       jim: 2,
//       randy: 0,
//       sandy: 7,
//       andy: 0,
//       katie: 5,
//       laura: 1,
//       saajid: 2,
//       alex: 3,
//       john: 2,
//       mr: 0,
//     },
//     "laura"
//   )
// );

// function boredom(staff) {
//   const arrayParty = Object.values(staff);
//   console.log(arrayParty);
//   const departments = {
//     accounts: 1,
//     finance: 2,
//     canteen: 10,
//     regulation: 3,
//     trading: 6,
//     change: 6,
//     IS: 8,
//     retail: 5,
//     cleaning: 4,
//     "pissing about": 25,
//   };
//   const total = arrayParty.reduce(
//     (previousValue, nameDepartment) =>
//       previousValue + departments[nameDepartment],
//     0
//   );
//   if (total <= 80) {
//     return "kill me now";
//   } else if (total < 100 && total > 80) {
//     return "i can handle this";
//   } else {
//     return "party time!!";
//   }
// }
// console.log(
//   boredom({
//     tim: "accounts",
//     jim: "accounts",
//     randy: "pissing about",
//     sandy: "finance",
//     andy: "change",
//     katie: "IS",
//     laura: "IS",
//     saajid: "canteen",
//     alex: "pissing about",
//     john: "retail",
//     mr: "pissing about",
//   })
// );

// function fifa(ticket, results) {
//   const r1 = results[0].split("-")[0] > results[0].split("-")[1];
//   const r2 = results[1].split("-")[0] < results[1].split("-")[1];
//   const r3 = results[2].split("-")[0] === results[2].split("-")[1];
//   const array = Object.values(ticket).map((element) => element.slice(1) * 1);
//   let result = 0;
//   if (r1) {
//     result += array[0];
//   }
//   if (r2) {
//     result += array[1];
//   }
//   if (r3) {
//     result += array[2];
//   }
//   return "£" + result;
// }
// console.log(
//   fifa({ Home: "£75", Away: "£5000", Draw: "£1324" }, ["1-0", "2-3", "0-1"])
// );

// const number1 = [[1, 2], [3, 4], []];
// const array = number1.flatMap((element) => element).sort((a, b) => a - b);
// // const array = [].concat(...number1);
// console.log(array);

// function meeting(x) {
//   const index = x.indexOf("O");
//   return index === -1 ? "None available!" : index;
// }
// console.log(meeting(["X", "O", "X"]));

// function trouble(x, t) {
//   for (let i = 0; i < x.length; i += 1) {
//     let total = x[i] + x[i + 1];
//     if (total === t) {
//       x.splice(i + 1, 1);
//       i -= 1;
//     }
//   }
//   return x;
// }
// console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7));

// function crap(x, bags, cap) {
//   const newArray = x.reduce(
//     (previousValue, element) => previousValue.concat(element),
//     []
//   );
//   const isDog = newArray.includes("D");
//   if (isDog) {
//     return "Dog!!";
//   }
//   let totalCrap = newArray.filter((element) => element === "@").length;
//   return bags * cap - totalCrap > 0 ? "Clean" : "Cr@p";
// }
// console.log(
//   crap(
//     [
//       ["_", "_", "_", "_"],
//       ["_", "_", "_", "@"],
//       ["_", "_", "@", "_"],
//     ],
//     2,
//     2
//   )
// );

// function cake(x, y) {
//   const total = y.split("").reduce((previousValue, element, index) => {
//     if (index % 2 === 0) {
//       return previousValue + element.charCodeAt(0);
//     }
//     return previousValue + element.charCodeAt(0) - 96;
//   }, 0);

//   return total > x * 0.7 ? "Fire!" : "That was close!";
// }
// console.log(cake(499, "kksimy"));

// function present(x, y) {
//   if (x === "badpresent") {
//     return "Take this back!";
//   }
//   if (x === "dog") {
//     return `pass out from excitement ${y} times`;
//   }
//   if (x === "crap" || x == "empty") {
//     return x.split("").sort().join("");
//   }
//   if (x === "bang") {
//     return x
//       .split("")
//       .reduce(
//         (previousValue, element) => previousValue + element.charCodeAt(0) - y,
//         0
//       );
//   }
//   return x
//     .split("")
//     .reduce(
//       (previousValue, element) =>
//         previousValue + String.fromCharCode(element.charCodeAt(0) + y),
//       ""
//     );
// }
// present("badpresent", 3);
