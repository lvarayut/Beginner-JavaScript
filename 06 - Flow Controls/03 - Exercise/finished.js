function printPersonInfo(person) {
  for (let key in person) {
    const value = person[key];
    console.log(`The person ${key} is ${value}`);
  }
}

const person = {
  name: 'Varayut',
  city: 'Bangkok',
  country: 'Thailand'
};

printPersonInfo(person);