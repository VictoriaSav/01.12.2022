//счет идёт: 0, 1, 2, 3
const cars = ["Мазда", "Форд", "БМВ", "Мерседес"];
// const people = [
//   { name: "Victa", budget: 4200 },
//   { name: "Vita", budget: 4000 },
//   { name: "Via", budget: 3200 },
// ];
const fib = [1, 1, 2, 3, 5, 8, 13]; //числа Фибоначчи

//Function
function addItemToEnd() {}

// //Method
// cars.push(`Рено`) //в конец ряда
// cars.unshift(`Volga`) //в начало ряда
// // cars.shift() //убирает последний добавленный объект
// const firstCar = cars.shift();
// const lastCar = cars.pop()
// console.log(firstCar);
// console.log(lastCar);
// console.log(cars);

// console.log(cars.reverse());
// console.log(cars);

// const index = cars.indexOf('БМВ');
// cars[index] = 'Porsche'
// console.log(cars);

// let findetPerson;
// for (const person of people) {
//   if (person.budget === 4000) {
//     //это одинаковое. более сложное написание
//     findetPerson = person;
//   }
// }
// console.log(findetPerson);

// const index = people.findIndex(function(person) {
//     return person.budget === 4000
// });
// const person = people.find(function (person) { //это одинаковое. более легкое написание
//   return person.budget === 4000;
// });
// const person = people.find(person =>  person.budget === 4000);
// console.log(person);  //то же самое, только еще легче

// console.log(cars.includes("Мазда"));//проверяет наличие названия

// const upperCaseCars = cars.map((car) => {
//   return car.toUpperCase();
// });

// const pow2 = (num) => num ** 2;
// const sqrt = (num) => Math.sqrt(num); //sqrt корень квадратный

// const pow2Fib = fib.map(pow2).map(Math.sqrt);

// // const pow2Fib = fib.map(num => num ** 2) //каждый элемент возведен в квадрат
// console.log(pow2Fib);

const pow2 = (num) => num ** 2;
// const pow2Fib = fib.map(pow2);
//не показывать цифры ниже 20
// const filteredNumbers = pow2Fib.filter(num => num > 20);
// console.log(pow2Fib);
// console.log(filteredNumbers);

// Задача 1 - перевернуть текст задом на перёд
// const text = "Привет, мы изучаем JS";
// const reverseText = text.split("").reverse().join(``);
// console.log(reverseText);

const people = [
  { name: "Victa", budget: 4200 },
  { name: "Vita", budget: 3500 },
  { name: "Via", budget: 1700 },
];

const allBudget = people
  .filter((person) => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget;
    return acc;
  }, 0);

console.log(allBudget);
