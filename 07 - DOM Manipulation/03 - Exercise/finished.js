function createElement(tagName, text) {
  const elem = document.createElement(tagName);
  elem.innerHTML = text;

  const rootElem = document.getElementById('root');
  rootElem.appendChild(elem);
}

createElement('h1', 'I love JavaScript')