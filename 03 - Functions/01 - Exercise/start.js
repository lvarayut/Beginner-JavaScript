// 1. Create a sayHello function which accepts name as a parameter
// 2. In the function, print out "Hello <name>"
// Bonus: Use different ways to create a function (Function declaration, Function expression, and Arrow function)

//
function sayHello(name = 'Kei') {
  console.log(`Hello ${name}`);
}
sayHello();

//

const person = function sayHello(name = 'Kei') {
  console.log(`Hello ${name}`);
};
person();

//

const num = (name = 'Kei') => {
  console.log(`Hello ${name}`);
};
num();
