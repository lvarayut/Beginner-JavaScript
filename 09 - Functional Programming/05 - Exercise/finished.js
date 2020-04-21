function sum(nums) {
  return nums.reduce((total, num) => total + num, 0);
}

const nums = [5, 1, 9, 10];
console.log(sum(nums));
