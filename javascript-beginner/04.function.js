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

//Стрелочные функции
function greet(name) {
  console.log("Привет -", name);
}

const arrow = (name) => {
  console.log("Привет -", name);
};

const arrow2 = (name) => console.log("Привет -", name);

arrow("Victa");
arrow2("Victa");

const pow2 = (num) => num ** 2;

console.log(pow2(5));

// Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b;

console.log(sum(41, 4));
console.log(sum());

function sumAlll(...all) {
  let result = 0;
  for (let num of all) {
    result += num;
  }
  return result;
}
const res = sumAlll(1, 2, 3, 4, 5, 6, 7);
console.log(res);

//Замыкание
function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}

const logWithLastName = createMember("Victa");
console.log(logWithLastName("Sav"));
console.log(logWithLastName("Santa"));
