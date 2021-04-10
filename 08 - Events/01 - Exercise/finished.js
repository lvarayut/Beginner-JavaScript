function onKeyup(event) {
  const pElem = document.getElementById('result');
  const inputValue = event.target.value;
  pElem.innerHTML = inputValue;
}

const inputElem = document.getElementById('name');
inputElem.addEventListener('keyup', onKeyup);
