function addDish(dishes, element) {
  dishes.push(element);
}

function removeDish(dishes, index) {
  dishes.splice(index, 1);
}

function removeTopDish(dishes) {
  dishes.pop();
}

const dishes = ['A', 'B'];
addDish(dishes, 'C');
removeDish(dishes, 0);
removeTopDish(dishes);

console.log(dishes);
