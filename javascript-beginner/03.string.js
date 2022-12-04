// const name = 'Victa'
// const age = 28

// function getAge() {
//     return age
// }

// const output = ' Привет меня зовут' + name + ' и мой возраст' + age + 'лет'
// const output = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет`

// const output = `
// <div>This is div</div>
// <p>This is p</p>
// `
// // console.log(output);

// const name = "Victa";
// console.log(name.length);
// console.log(name.toUpperCase()); //сделать буквы большими
// console.log(name.toLowerCase());
// console.log(name.charAt(2));
// console.log(name.indexOf("ta")); //проверка наявности букв
// console.log(name.toLowerCase().startsWith("vic"));
// console.log(name.startsWith("Vic"));
// console.log(name.endsWith("tan"));
// console.log(name.repeat(3));
// const string = "     password    ";
// console.log(string.trim()) //удаляет пробелы
// console.log(string.trimLeft());
// console.log(string.trimRight());

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Еще не родился'
    }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}
const personName = "Victa";
const personName2 = "Vita";

const personAge = 28;
const personAge2 = -10;

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`;
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`;

console.log(output);
console.log(output2);

