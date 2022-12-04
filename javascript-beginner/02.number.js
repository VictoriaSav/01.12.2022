// //Number
// const num = 42; //intenger - целое число
// const float = 42.42; //float
// const pow = 10e3; //10^3
// console.log(pow);

// console.log("MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER); // - максимальное значение intenger в JS
// console.log("Math.pow53", Math.pow(2, 53) - 1);
// console.log("MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER);
// console.log("MAX_VALUE", Number.MAX_VALUE);
// console.log("MIN_VALUE", Number.MIN_VALUE);
// console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY);
// console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);
// console.log("2 / 0", 2 / 0);
// console.log(Number.NaN); //Not a Number
// console.log(typeof NaN);
// const weird = 2 / undefined;
// console.log(2 / undefined);
// console.log(Number.isNaN(weird));
// console.log(Number.isNaN(42));
// console.log(Number.isFinite(Infinity)); //конечна ли бесконечность F
// console.log(Number.isFinite(42)); //конечно ли число 42 T

// const stringInt = "40";
// const stringFloat = "40.42";
// // console.log(stringInt + 2); получится 402 т.к это строка
// // console.log(Number.parseInt(stringInt) + 2); //получится 42
// console.log(Number(stringInt) + 2); //то же самое = 42
// console.log(+stringInt + 2); //то же самое = 42

// console.log(parseFloat(stringFloat) + 2);
// // console.log(+stringFloat + 2);

// console.log(0.4 + 0.2);
// console.log(+(0.4 + 0.2).toFixed(1));
// console.log(parseFloat((0.4 + 0.2).toFixed(1)));

// // BigInt - это числа у которых 'n'
// console.log(9007199254740991999999n - 900719925474099199999n);
// console.log(-9007199254740991999999n);
// // console.log(-9007199254740991999999.23324n); //невозможно

// console.log(10n - 4); так нельзя
// console.log(parseInt(10n) - 4);
// console.log(10n - BigInt(4));
// console.log(5n / 2n);

//Math
// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.sqrt(25)); //квадрат из 25
// console.log(Math.pow(5, 3)); //5^3
// console.log(Math.abs(-42));
// console.log(Math.max(42, 12, 23, 11, 422));
// console.log(Math.min(42, 12, 23, 11, 422));
// console.log(Math.floor(4.9)); //целое число в меньшую сторону
// console.log(Math.ceil(4.9)); //целое число в больную сторону
// console.log(Math.round(4.9)); //Округляет к близжайшему числу
// console.log(Math.trunc(4.9)); //удаляет все дроби, возвращает целое число
// console.log(Math.random);

//Example

// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(getRandomBetween(10, 42)); 
