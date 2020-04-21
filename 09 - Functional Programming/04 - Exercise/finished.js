function squareNumbers(nums) {
  return nums.map((num) => num ** 2);
}

const arr = [1, 2, 3, 4];

console.log(squareNumbers(arr)); // Should print out [1, 4, 9, 16]
