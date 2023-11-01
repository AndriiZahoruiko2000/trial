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

function maskify(cc) {
  if (cc.length < 4) {
    return cc;
  }
  let string = "";
  for (let i = 0; i < cc.length; i += 1) {
    if (i < cc.length - 4) {
      string += "#";
      continue;
    }
    string += cc[i];
  }
  return string;
}
console.log(maskify("47834783473847343847384"));
//////////////
