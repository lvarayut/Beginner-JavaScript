function getRootChildElements() {
  const rootElem = document.getElementById('root');

  // It can be also done using rootElem.children, which returns nodes without text nodes
  const childNodes = rootElem.childNodes;
  const elementChildNodes = [];

  for (let i = 0; i < childNodes.length; i++) {
    const node = childNodes[i];

    if (node.nodeType === 1) {
      elementChildNodes.push(node);
    }
  }
  return elementChildNodes;
}
