// 1. Create a function called "printNumber" which accepts a "num" as a parameter
// 2. The function only prints out the "num" value if it's number type
function printNumber(num) {
  if (typeof num === 'number') {
    console.log(num);
  }
}
printNumber('15');
