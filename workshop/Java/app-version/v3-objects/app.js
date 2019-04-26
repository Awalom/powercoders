var toDos = [
  {
    text: "Item 1",
    completed: false,
  },
  {
    text: "Item 2",
    completed: true
  },
  {
    text: "Item 3",
    completed: true
  }
];

console.log(toDos[0].completed);

// function displyToDos (arr) {
//   console.log(arr);
// }
// function addToDo(arr, item) {
//   arr.push(item);
//   displyToDos(arr);
// }

// function changeToDo(arr, oldItem, newItem) {
//   var index = arr.indexOf(oldItem);
//   arr[index] = newItem;
//   displyToDos(arr);
// }
// function deleteToDo (arr, index) {
//   arr.splice(index,1);
//   displyToDos(arr);
// }
// console.log("the original array");
// displyToDos(toDos);
// console.log("Added Item 4");
// addToDo( toDos, "Item 4");
// console.log("Added Item 5");
// addToDo(toDos, "Item 5");
// console.log("Changed Item 4 to Item 100");
// changeToDo(toDos, "Item 4", "Item 100");
// console.log("deleted Item 4");
// deleteToDo(toDos, 3);

