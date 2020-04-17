function removeElement(selector) {
  const elem = document.querySelector(selector);
  elem.parentNode.removeChild(elem);
}

removeElement('#title');
removeElement('.content');