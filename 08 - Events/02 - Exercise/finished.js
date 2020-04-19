function onClick(event) {
  const squareElem = event.target;
  squareElem.style.backgroundColor = 'indianred';
}

const squareELem = document.querySelector('.square');
squareELem.addEventListener('click', onClick);
