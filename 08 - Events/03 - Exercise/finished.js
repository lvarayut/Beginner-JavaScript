function validateLength(elem) {
  const val = elem.value;

  if (val.length >= 8) {
    elem.classList = 'valid';
  } else {
    elem.classList = 'invalid';
  }
}

function onSubmit(event) {
  event.preventDefault();

  const usernameElem = document.getElementById('username');
  const passwordElem = document.getElementById('password');

  validateLength(usernameElem);
  validateLength(passwordElem);
}

function run() {
  const formElem = document.getElementById('form');

  formElem.addEventListener('submit', onSubmit);
}

run();
