// 1. Create a function called roundupMoney that accepts a number parameter
// 2. The function rounds up the give money and return it
function roundupMoney(number) {
  return Math.floor(number);
}
console.log(roundupMoney(10.5));

//

const roundupMoney1 = (number) => {
  return Math.ceil(number);
};
console.log(roundupMoney1(10.5));
