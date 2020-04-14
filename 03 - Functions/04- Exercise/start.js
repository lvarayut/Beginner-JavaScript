// 1. Create three different functions called
// . 1.1 addDish, it accepts an array called "dishes" and a string "element". It's used to add the element to the array
// . 1.2 removeDish, it accepts an array called "dishes" and a number "index". It's used to remove an element which is placed in the given index from the array
//   1.3 removeTopDish, it accepts an array called "dishes". It's used to remove the last element from the array

// Start writing the functions

// No need to change anything below
function addDish(dishes, element) {
  dishes.push(element);
}

function removeDish(dishes, index) {
  dishes.splice(index, 2);
}

function removeTopDish(dishes) {
  dishes.pop();
}

const dishes = ['A', 'B'];
addDish(dishes, 'C');
removeDish(dishes, 0);
removeTopDish(dishes);

console.log(dishes);
