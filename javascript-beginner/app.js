// ПЕРЕМЕННЫЕ //
//var, varieble - переменная, переменный
// const firstName = "Victa";
// // let age = 28; //number
// const isProgrammer = true; //boolean

// const _private = "private";
// const $ = "some value";

// const if = 'mkef' error

// const withNum5 = "5";
// const 5wfeNum = '5 ' error

// / МУЛЬТИРОВАНИЕ //
// console.log("Имя человека: " + firstName + ", а возраст человека: " + age);
// alert("Имя человека: " + firstName + ", а возраст человека: " + age);

// const lastName = prompt("Введите фамилию");
// alert(firstName + "" + lastName);

// ОПЕРАТОРЫ //
// Базовые операторы для чисел
// let currentYear = 2022;
// const birthYear = 1994;
// // console.log(age);
// // const age = currentYear + birthYear;

// const a = 10;
// const b = 5;

// let c = 32;
// c = c + a;
// c += a;
// c = c - a;
// c -= a;
// c = c / a;
// c /= a;
// c = c * a;
// c *= a;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(++currentYear);
// console.log(currentYear);
// console.log(c);

// ТИПЫ ДАННЫХ//
// const isProgrammer = true;
// const name = "Victa";
// const age = 28;
// let x;

// console.log(typeof isProgrammer);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof x);
// console.log(typeof null);

//ПРИОРИТЕТ ОПЕРАТОРОВ//
// const fullAge = 28;
// const birthYear = 1994;
// const currentYear = 2022;

// const isFullAge = currentYear - birthYear >= fullAge;
// console.log(isFullAge);

//УСЛОВНЫЕ ОПЕРАТОРЫ
// const courseStatus = "fail"; // ready, fail. pending

// if (courseStatus === "ready") {
//   console.log("курс уже готов и его можно проходить");
// } else if (courseStatus === "pending") {
//   console.log("курс пока находится в процессе разработки");
// } else {
//   console.log("курс не получился");
// }

//const isReady = true;

// if (isReady) {
//   console.log("Всё готово!");
// } else {
//   console.log("Всё не готово!");
// }
// Тернарное выражение (то же самое что и выше)
//isReady ? console.log("Всё готово!") : console.log("Всё не готово!");

// const num1 = 42; //number
// const num2 = "42"; //string текстовая строка
// console.log(num1 === num2); //falce это значение правильное
//console.log(num1 == num2); //true

//БУЛЕВАЯ ЛОГИКА //
//google - mdn логические операторы

//Функции

// function calculateAge(year) {
//   return 2022 - year;
// }

// // const myAge = calculateAge(1994);
// // console.log(myAge);

// function logInfoAbout(name, year) {
//   const age = calculateAge(year);

//   if (age > 0) {
//     console.log("Человек по имени" + name + "сейчас имеет возраст" + age);
//   } else {
//     console.log("Вообще-то это уже будущее");
//   }
// }

// logInfoAbout("Victa", 1994);
// logInfoAbout("Via", 1976);
// logInfoAbout("Va", 2022);

//Массивы
// const cars = ["Мазда", "Мерседес", "Форд"];
// // console.log(cars);
// console.log(cars.length);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[0]);

// cars[0] = "Porsche";
// cars[cars.length] = "Mazda";
// console.log(cars);

//ЦИКЛЫ
// const cars = ["Мазда", "Мерседес", "Форд", "Porsche"];

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i];
//   console.log(car);
// }

//ОБЬЕКТЫ
// const person = {
//   firstName: "Victa",
//   lastName: "Sav",
//   year: 1994,
//   languages: ["En", "Ukr", "Ru", "De"],
//   hasHusbend: true,
//   greet: function () {
//     console.log("greet from person");
//   },
// };

// console.log(person.firstName);
// console.log(person["lastName"]);
// const key = "year";
// console.log(person[key]);
// person.hasHusbend = true;
// person.isProgrammer = true;
// console.log(person);
// person.greet();
