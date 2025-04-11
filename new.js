// const employees = [
//   "Dennis",
//   "Dennis",
//   "Shaw",
//   "Watkins",
//   "Watkins",
//   "Ray",
//   "Dennis",
// ];

// let newArr = [];

// for (let i = 0; i < employees.length; i += 1) {
//   if (employees.indexOf(employees[i]) === i) {
//     newArr.push(employees[i]);
//   }
// }
// console.log(newArr);

// let newArr = employees.reduce((acc, employee) => {
//   if (acc.includes(employee)) {
//     return acc;
//   }
//   acc.push(employee);
//   return acc;
// }, []);

// console.log(newArr);

// --------------------------------------

// const genres = ["Jazz", "Blues", "Рок-н-рол", "Country", "Reggy"];

// const longest = genres.reduce((a, b) => (b.length > a.length ? b : a));
// console.log(longest);

// let longest = "";
// let maxLength = 0;

// for (let i = 0; i < genres.length; i += 1) {
//   if (genres[i].length > maxLength) {
//     maxLength = genres[i].length;
//     longest = genres[i];
//   }
// }
// console.log("The longest word", longest);

// const longestWord = genres.reduce((acc, genre) => {
//   if (acc.length < genre.length) {
//     console.log(genre);
//     return genre;
//   }
//   return acc;
// }, []);
// console.log(longestWord);

// --------------------------------------

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let total = 0;
// for (const value of Object.values(salaries)) {
//   total += value;
// }
// console.log(total);

// --------------------------------------

// const numbers = [1, 3, 54, 22, 211, 4];

// let smallestNumber = numbers[0];
// for (number of numbers) {
//   console.log(number);
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// --------------------------------------

// let total = 0;
// const max = 50;
// const min = 23;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2) {
//     total += i;
//   }
// }
// console.log(total);

// --------------------------------------

// function maskify(cc) {
//   console.log(cc.length);
//   if (cc.length < 4) {
//     return cc;
//   }
//   let string = "";
//   for (let i = 0; i < cc.length; i += 1) {
//     // console.log(i);
//     if (i < cc.length - 4) {
//       string += "#";
//       continue;
//     }
//     console.log(cc.length - 4);
//     string += cc[i];
//     // console.log(cc[i]);
//   }

//   return string;
// }
// maskify("47834783473847343847384");

// --------------------------------------

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

// function accum(s) {
//   return s
//     .split("")
//     .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
//     .join("-");
// }

// console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

// ____________________________________

// const films = {
//   title: "Matrix",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nemo iusto! Et doloribus praesentium laboriosam dolorem veritatis, magnam atque amet!",
//   rating: 4,
//   actors: ["Aiden", "Mason", "Jimmy"],
//   isAdult: true,
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
// };
// const values = Object.values(film);
// const keys = Object.keys(film);
// for (const key of keys) {
//   console.log(`${key}: ${film[key]}`);
// }
// console.log(keys[0]);
// const alls = Object.entries(film);

// for (const all of alls) {
//   console.log(all[1]);
// }
// let arr = [];
// for (key in films) {
//   arr.push(films[key]);
// }
// console.log(arr);

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);
// console.log(values);
// let total = 0;
// for (let i = 0; i < values.length; i += 1) {
//   total += values[i];
// }

// console.log(total);

// let total = 0;
// for (key in salaries) {
//   total += salaries[key];
// }
// console.log(total);

// const total = Object.values(salaries).reduce((acc, salary) => {
//   acc += salary;
//   return acc;
// }, 0);
// console.log(total);

// const filmoteka = [
//   {
//     id: 1,
//     title: "Duna",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 10,
//     actors: [
//       "Amelia Gibson",
//       "Cameron Clayton",
//       "Viola Vasquez",
//       "Lula Collins",
//       "Victor Nichols",
//     ],
//     adult: false,
//     image: "https://via.placeholder.com/640/480",
//   },
//   {
//     id: 2,
//     title: "Venom",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 8,
//     actors: [
//       "Inez Greer",
//       "Barry Curtis",
//       "Blanche Rios",
//       "Glen Perry",
//       "Logan Powers",
//     ],
//     adult: false,
//     image: "https://via.placeholder.com/640/480",
//   },
//   {
//     id: 3,
//     title: "Luca",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 9,
//     actors: [
//       "Marguerite Gibbs",
//       "Lora Alvarez",
//       "Jorge Simpson",
//       "Thomas Hall",
//       "Darrell Hunter",
//     ],
//     adult: false,
//   },
//   {
//     id: 4,
//     title: "Free Guy",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 6,
//     actors: [
//       "Calvin Andrews",
//       "Mamie Myers",
//       "Madge Townsend",
//       "Ralph Kim",
//       "Jorge Reese",
//     ],
//     adult: false,
//     image: "https://via.placeholder.com/640/480",
//   },
//   {
//     id: 5,
//     title: "Saw",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 7,
//     actors: [
//       "Adele Marsh",
//       "Melvin Burgess",
//       "Jesus Reese",
//       "Harriet Moreno",
//       "Curtis Cox",
//     ],
//     adult: false,
//   },
// ];
//   Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив з усіма назвами фільмів.

// function getAllTitlesOfFilms(films) {
//   let arr = [];
//   for (const film of films) {
//     arr.push(film.title);
//   }
// }
// getAllTitlesOfFilms(filmoteka);

//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.

// function findFilmByName(films, filmTitle) {
//   for (const film of films) {
//     if (filmTitle === film.title) {
//       return film;
//     }
//   }
//   return "not found";
// }
// console.log(findFilmByName(filmoteka, "Saw"));

//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.

// function getAdultFilms(films) {
//   let arr = [];
//   for (const film of films) {
//     if (film.adult) {
//       arr.push(film);
//     }
//   }
//   return arr.length ? arr : "no films for adults";
// }
// console.log(getAdultFilms(filmoteka));

//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмежень.
// function getNotAdultFilms(films) {
//   let arr = [];
//   for (const film of films) {
//     if (!film.adult) {
//       arr.push(film);
//     }
//   }
//   return arr.length ? arr : "not films with no adult";
// }
// console.log(getNotAdultFilms(filmoteka));
