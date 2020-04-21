function readFile(text, callback) {
  setTimeout(() => {
    console.log(text);
    callback();
  }, 1000);
}

readFile('I am reading a file', () => console.log('done'));
