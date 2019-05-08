/**
 * To do list Object
 * -------------------------------
 * Methodes to handle Todo list
 */
var todoList = {
  /* TODOS ARRAY ================================*/
  toDos: [
    { text: "Item 1", completed: false, endDate: "2019-12-01" },
    { text: "Item 2", completed: true, endDate: "2019-12-01" },
    { text: "Item 3", completed: true, endDate: "2019-12-01" }
  ],
  /* DISPLAY TODOS===============================*/

  /* ADD TODOS ==================================*/

  addTodo: function (txtTodos, endDate) {
    this.toDos.push({
      text: txtTodos,
      completed: false,
      endDate: endDate
    });
  },
  /* DELETE ADD TODOS ===========================*/

  deleteTodo: function (index) {
    this.toDos.splice(index - 1, 1);
  },
  /* EDIT TODOS ================================*/

  changeTodo: function (index, newItem) {
    this.toDos[index - 1].text = newItem;
  },

  /* EDIT TODOS ================================*/
  showTodo: function () {
    if (this.toDos.length == 0) {
      return "Your to do list is Empty!"
    } else {
      // start to loop
      var ShowItem = "<ol>";
      for (let i = 0; i < this.toDos.length; i++) {
        var myItem = this.toDos[i];
        var x = (myItem.completed) ? ' ' : 'X';
        ShowItem += '<li>(' + x + ')&nbsp; &nbsp;  ' + myItem.text + '&nbsp; &nbsp; <button onclick="handler.deleteTodo()"> X </button> </li><hr>';
      } // End to loop
      return ShowItem + '</0l>';
    }

  },

  /* Toggle to do ==============================*/
  toggleCompleted: function (index) {
    let item = this.toDos[index - 1];
    item.completed = !item.completed;
  },

  /* Toggle to do ==============================*/
  toggleAll: function () {

    var counter = 0; //number of not completed
    var items = this.toDos;

    for (let i = 0; i < items.length; i++) {
      if (items[i].completed === true) {
        counter++;
      }
    }
  

    if (counter > 0) { // if there is atleast one uncomplited
      for (let i = 0; i < items.length; i++) {
        items[i].completed = false;
      }
    } else { // if there is zero uncompleted 
      for (let i = 0; i < items.length; i++) {
        items[i].completed = !items[i].completed;
      }
    }
  },

  /* days left to expire =========================*/
  daysLeft: function (index) {
    dt2 = new Date(this.toDos[index].endDate);
    dt1 = new Date();
    return '(' + Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24)) + " days left)";
  },
  todolength: function() {
    return  this.toDos.length + 1;
  },
  
};

todoList.toggleAll();
/**
 * Todo list handler
 *-----------------------------------------
 */

var handler = {

  addTodo: function () {
    var txtTodo = document.getElementById("txtTodo").value;
    todoList.addTodo(txtTodo);
    view.display();
    
  },
  changeTodo: function () {
    var indexTodo = document.getElementById("indexTodo").value;
    var txtNewTodo = document.getElementById("txtNewTodo").value;
    todoList.changeTodo(this.checkIndex(indexTodo), txtNewTodo);
    view.display();
    
  },

  deleteTodo: function () {
    var indexToDelete = document.getElementById("indexToDelete").value;
    todoList.deleteTodo(this.checkIndex(indexToDelete));
    view.display();
   
  },
  toggleTodo: function () {
    var indexToToggle = document.getElementById("indexToToggle").value;
    todoList.toggleCompleted(this.checkIndex(indexToToggle));
    view.display();
  },
  toggleAll: function () {
    todoList.toggleAll();
    view.display();
  },
  checkIndex: function (index) {
    if (index > 0 && index <= todoList.todolength) {
      return index;
    } else {
      alert("Incorrect Index! Please select a number greater than zero.")
    }
    view.display();
  }
};
/**
 * The view OBJECT
 * To display the date in our todoList to the DOM
 */
var view = {

  display: function () {

    const targetId = document.getElementById("txtTodosList");
    targetId.innerHTML = "";
    //Loop start here
    for (let i = 0; i < todoList.toDos.length; i++) {
      //select the target HTML to display the items
      var item = todoList.toDos[i];
      let x = '( )'
      if (item.completed === true) {
        x = ' (X) '
      }
      //create HTML element li
      let newElement = document.createElement('li');
      // add content to the li
      newElement.textContent = (i + 1) + ' .' + x + item.text;
      //create a button
      const deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('id', i);
      deleteBtn.textContent = 'X';
      deleteBtn.setAttribute('onclick', 'handler.deleteTodo(' + i + ')');
      targetId.appendChild(newElement);
      newElement.appendChild(deleteBtn);
    } //End loop herecons

  }
};
// to view our to do list when the file load

view.display();



