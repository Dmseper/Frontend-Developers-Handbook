// #1 Две переменные могут обмениваться значениями с помощью одного деструктурирующего выражения.
let a = 'world', b = 'hello';
[a, b] = [b, a]
console.log(a) // -> hello
console.log(b) // -> world

// #2 Дестрктуризация промисов
const [user, account] = await Promise.all([
  fetch('/user'),
  fetch('/account')
])

// #3 Значения по умолчанию
function greet(name = 'World') {
  console.log(`Hello ${name}!`);
}

greet()

// #4 Оператор по умолчанию ||
let myName = 'John';
const nameUser = myName || 'No name';

const doStuff = (options) => {
  options = options || {};
};


// #4 — Короткое замыкание &&
const isThisAwesome = true;
const doSomething = () => {
  isThisAwesome && alert('yes');
};

const isLoggedIn = true;
const newUser = isLoggedIn && { name: 'Jane', age: 25 };
console.log(newUser); // { name: 'Jane', age: 25 }

// #5 - Остаточне параметры

function sum(...args: number[]) {
  return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
