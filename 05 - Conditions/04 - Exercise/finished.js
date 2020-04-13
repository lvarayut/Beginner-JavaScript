function sayHello(language) {
  switch (language) {
    case 'english':
      console.log('Hello');
      break;
    case 'thai':
      console.log('สวัสดี');
      break;
    case 'french':
      console.log('Bonjour');
      break;
    case 'spanish':
      console.log(('Hola'));
      break;
    default: 
      console.log('Hallo');
  }
}

sayHello('english')