function createCalculator() {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
  };
}

const calculator = createCalculator();
console.log(calculator.add(5, 10));
console.log(calculator.subtract(7, 3));
