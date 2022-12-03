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
const courseStatus = "pending"; // ready, fail. pending

if (courseStatus === "ready") {
  console.log("курс уже готов и его можно проходить");
}

if (courseStatus === "pending") {
  console.log("курс пока находится в процессе разработки");
}
