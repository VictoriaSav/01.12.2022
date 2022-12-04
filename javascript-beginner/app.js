//Функци
//Function Declaration - возможно написать функцию до того,
// //как обратиться к ней его
// function greet(name) {
//   console.log("Привет -", name);
// }

// //Function Expression - невозможно написать функции до обращения
// const greet2 = function greet2(name) {
//   console.log("Привет 2 -", name);
// };
// //это обращение. если Expression будет ниже неё - работа не пойдет
// //если Declaration будет ниже, то всё будет в порядке.
// // greet("Lena");
// // greet2("Lena");

// console.log(typeof greet);
// console.dir(greet)

//Анонимные функции
// let counter = 0   идет непрерывный счет до 1000
// setInterval(function () {
//     console.log(++counter)
// }, 1000)

// let counter = 0;  //счет четко до 5
// const interval = setInterval(function () {
//   if (counter === 5) {
//     clearInterval(interval); //clearTimeout
//   } else {
//     console.log(++counter);
//   }
// }, 1000);
