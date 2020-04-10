// 1. What would be the result of the code snippet?
// 2. Correct the code snippet to print out john and jane respectively

const john = {
  name: 'John Doe',
  age: 25
};

const jane = john;
jane.name = 'Jane Doe';

console.log(john);
console.log(jane);
