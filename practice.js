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

// function maskify(cc) {
//   //   console.log(cc.length);
//   if (cc.length < 4) {
//     return cc;
//   }
//   let string = "";
//   for (let i = 0; i < cc.length; i += 1) {
//     // console.log(i);
//     if (i < cc.length - 4) {
//       console.log(cc[i]);
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
