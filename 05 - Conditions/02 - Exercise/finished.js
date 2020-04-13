function getSign(a, b) {
  const result = a * b;
  if (result > 0) {
    console.log('The sign is +');
  } else if (result === 0) {
    console.log('There is no sign');
  } else {
    console.log('The sign is -');
  }
}
