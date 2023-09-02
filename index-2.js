// const num1 = 7;
// const num2 = 3;
// const total = num1 % num2;
// console.log(total);

/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/

// const time = 90;
// const hours = Math.floor(time / 60);
// const normalizedHours = String(hours).padStart(2, "0");
// console.log(String(hours).padStart(2, "0"));
// const minutes = time % 60;
// const normalizedMinutes = String(minutes).padStart(2, "0");
// console.log(`${normalizedHours}:${normalizedMinutes}`);

// console.log(Math.random(3.1));

// const userName = "mango";
// const age = 21;
// const message = `Hello ${userName} , your age ${age}`;
// const message2 = "hello" + " " + userName + ", your age" + " " + age;
// message[0] = "T"; рядок перезаписати не можна
// console.log(message.tolowerCase());
// console.log(message[message.length - 1]);
// console.log("a".charCodeAt(0));
// console.log("b".charCodeAt(0));
// console.log("A" < "a");

// console.log(message.includes("m"));
// let isInclude = false;
// for (let i = 0; i < message.length; i += 1) {
//   if (message[i] === "x") {
//     isInclude = true;
//     break;
//   }
// }
// console.log(isInclude);
//I = це  змінна доступна в циклі
// let i = 0 це значить і буде стартувати з 0
// доки умова приводиться до тру цикл працює, доки і меньше 10, як тільки і стане дорівнювати 10 а умова приводиться до фалс
//  збільшення і на 1 на кожній ітерації

// console.log(message.endsWith(21));
// console.log(message.startsWith("Hello"));

// console.log(message.indexOf("mango"));
// const updateMessage = message.replace("Hello", "Hi");
// const updateMessage = message.replaceAll("o", "i");
// console.log(updateMessage);
// const newMessage = message.slice(-2);
// console.log(newMessage);

//* Оператор менше (<)
// console.log(2 < 12);
// console.log(12 < 2);
// console.log("a" < "b");
// console.log("b" < "a");
// console.log("A" < "a");
// console.log("a p p l e" < "a p p n anana");
// console.log("apple" > "yellow");
// console.log("bananana" < "apple");
// console.log(true < false);
// console.log(false < true);

//* Оператор більше (>)
// console.log(10 > 20);
// console.log(20 > 10);

//* Оператор менше або дорівнює (<=)
// console.log(6 <= 6);
// console.log(5 <= 5);
// console.log(5 <= 4);

//* Оператор більше або дорівнює (>=)
// console.log(5 >= 3);
// console.log(5 >= 5);
// console.log(3 >= 4);

//* Не суворе рівенство (==)
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(undefined === null);

// console.log('123' === 123);
// console.log(true === '1');
// console.log(4 === 5 - true);

//* Суворе рівенство (===)
// console.log('123' === 123);
// console.log(null === null);
// console.log(2 + 2 === 4);
// console.log(0 === -0);

//* Не дорівнює (!=)
// console.log("4" != 4);

//* Суворе не дорівнює (!==)
// console.log("4" !== 4);
// console.log(NaN != NaN);

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && "kiwi");
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) >= 0);
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(2 + 5 + "" + 1 + 0);
// console.log("" + 1 - 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log('4' - 2);
// console.log("4px" - 2);
// console.log(7 / 0);
// console.log("  -9  " + 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log("" + 1);
// console.log(3 > 2 > 1);

let total = 0;
const max = 50;
const min = 23;
for (let i = max; i >= min; i -= 1) {
  if (!(i % 2)) {
    total += i;
  }
}
console.log(total);
