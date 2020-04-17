function updateGreeting(name) {
  const h1Elem = document.querySelector('h1');
  h1Elem.innerHTML = `Hello ${name}`
  h1Elem.style.color = 'chocolate'
}

updateGreeting('Varayut');