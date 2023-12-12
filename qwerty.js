// function trigrams(phrase) {
//   const arr = [];
//   for (let i = 0; i < phrase.length - 2; i += 1) {
//     console.log(i);
//     arr.push(phrase.slice(i, i + 3).replace(" ", "_"));
//   }
//   return arr.join(" ");
// }
// console.log(trigrams("the quick red"));

// function trigrams(phrase) {
//   const arr = [];
//   for (let i = 0; i < phrase.length - 2; i += 1) {
//     arr.push(phrase.slice(i, i + 3).replace(" ", "_"));
//   }
//   return arr.join(" ");
// }
// console.log(trigrams("the quick red"));
//---------------------------------------------------------
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
//   return fruits.reduce((acc, element) => {
//     if (fruitsName.includes(element)) {
//       const index = Math.round(element.length / 2);
//       const word1 = element.slice(0, index);
//       const word2 = element.slice(index);
//       return [...acc, word1, word2];
//     }
//     return [...acc, element];
//   }, []);
// }
// console.log(cutFruits(["apple", "pear", "banana", "bomb"]));
//---------------------------------------------------------

// function maskify(cc) {
//   if (cc < 4) {
//     return cc;
//   }
//   let string = "";
//   for (let i = 0; i < cc.length; i += 1) {
//     if (i < cc.length - 4) {
//       string += "#";
//       continue;
//     }
//     console.log(cc[i]);
//     string += cc[i];
//   }
//   return string;
// }
// console.log(maskify("47834783473847343847384"));

console.log(Function._proto_ === Object.prototype);
