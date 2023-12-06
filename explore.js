function cutFruits(fruits) {
  const fruitsName = [
    "apple",
    "pear",
    "banana",
    "watermelon",
    "grape",
    "plum",
    "blueberry",
    "persimmon",
    "pomegranate",
    "pineapple",
    "orange",
    "mangosteen",
    "durian",
    "lemon",
    "pitaya",
    "carambola",
    "tomato",
    "apricot",
    "cherry",
    "coconut",
    "peach",
    "fig",
    "litchi",
    "ginkgo",
    "cantaloupe",
    "hawthorn",
    "mango",
    "jujube",
  ];
  return fruits.reduce((acc, element) => {
    if (fruitsName.includes(element)) {
      const index = Math.round(element.length / 2);
      const word1 = element.slice(0, index);
      const word2 = element.slice(index);
      return [...acc, word1, word2];
    }
    return [...acc, element];
  }, []);
}
console.log(cutFruits(["apple", "pear", "banana", "bomb"]));

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
// //////////////

//  ? Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином:
//  ? *
//  ? **
//  ? ***
//  ? ****
//  ? *****
//  ? ******
//  ? *******

// function getStars(amount) {
//   let star = "";
//   for (let i = 0; i < amount; i += 1) {
//     console.log((star += "*"));
//   }
// }
// getStars(7);
/////////////////////////////////////

//   ? Дано 90 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
//   ? Результат виведіть у консоль.

// const totalMinutes = 90;
// let hours = Math.floor(totalMinutes / 60);
// hours = String(hours).padStart(2, "0");
// let minutes = totalMinutes % 60;
// minutes = String(minutes).padStart(2, 0);
// console.log(`${hours}:${minutes}`);

///////////////////////////////////////

// const words = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "CSS",
//   "JS",
//   "Node.js",
//   "JS",
//   "React",
//   "CSS",
//   "React",
//   "HTML",
//   "Node.js",
//   "Aaaaaaaaaa",
// ];
// const uniqueWords = [];

// for (let i = 0; i < words.length; i += 1) {
//   console.log(words[i]);
//   //   console.log("index", i);
//   //   console.log("indexOf", words.indexOf(words[i]));
//   //   console.log("element", words[i]);
//   //   console.log("---------");
//   if (i === words.indexOf(words[i])) {
//     // console.log("element", words[i]);
//     uniqueWords.push(words[i]);
//   }
// }
// console.log(uniqueWords);

// let longestWord = words[0];
// for (const word of words) {
//   if (longestWord.length < word.length) {
//     longestWord = word;

//   }
// }
// console.log(longestWord);
// for (const word of words) {
//   if (longestWord > words) {
//     longestWord = words[0];
//   }
// }
// /////////////////////////////////////////////////

// const string = `JavaScript is in my blood`;
// const array = string.split(" ");
// console.log(array);

// function findDeletedNumber(arr, mixArr) {
//   const sortedArr = [...mixArr].sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] !== sortedArr[i]) return arr[i];
//   }
//   return 0;
// }
// console.log(findDeletedNumber([1, 2, 3, 4, 5], [1, 2, 4, 3]));
////////////////////////////////////////////////////////

// const managerSalaries = [1000, 1500, 2500, 4000, 5000];
// const developersSalaries = [8000, 40000, 15000];
// const allSalaries = [...managerSalaries, ...developersSalaries];
// let total = 0;
// // for (let i = 0; i < allSalaries.length; i += 1) {
// //   total += allSalaries[i];
// // }
// for (const salarie of allSalaries) {
//   total += salarie;
// }

// console.log(total);

/////////////////////////////////////////
// const str = "JavaScript це цікаво!";
// let reverseString = "";
// for (let i = 0; i < str.length; i += 1) {
//   const lastElementIndex = str.length - 1 - i;
//   reverseString += str[lastElementIndex];
// }
// console.log(reverseString);

// const str = "JavaScript це цікаво!";
// const array = str.split("");
// array.reverse();
// const reverseString = array.join("");
// console.log(reverseString);

// const employees = ["Dennis", "Dennis", "Shaw", "Watkins", "Watkins", "Ray"];

// const uniqueWords = [];

// for (let i = 0; i < employees.length; i += 1) {
//   if (i === employees.indexOf(employees[i])) uniqueWords.push(employees[i]);
// }

// console.log(uniqueWords);
