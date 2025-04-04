const employees = [
  "Dennis",
  "Dennis",
  "Shaw",
  "Watkins",
  "Watkins",
  "Ray",
  "Dennis",
];

let newArr = [];

for (let i = 0; i < employees.length; i += 1) {
  console.log(employees.indexOf(employees[i]));
  if (employees.indexOf(employees[i]) === i) {
    newArr.push(employees[i]);
  }
}

console.log(newArr);

// let newArr = employees.reduce((acc, employee) => {
//   if (acc.includes(employee)) {
//     return acc;
//   }
//   acc.push(employee);
//   return acc;
// }, []);
// console.log(newArr);

// for (let i = 0; i < employees.length; i += 1) {
//   console.log(employees[i]);
//   console.log(i);
//   if (employees.indexOf(employees[i]) === i) {
//     newArr.push(employees[i]);
//   }
// }
// console.log(newArr);
