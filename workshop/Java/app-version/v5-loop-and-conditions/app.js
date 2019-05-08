// Object todoList start here
var todoList = {
  /* TODOS ARRAY ================================*/
  toDos: [
    {text: "Item 1", completed: false, endDate: "2019-12-01"},
    {text: "Item 2", completed: true, endDate: "2019-12-01"},
    {text: "Item 3", completed: false, endDate: "2019-12-01"}
  ],
  /* DISPLAY TODOS===============================*/
  
  displayTodos: function() {
    console.log(this.toDos);
  },
  /* ADD TODOS ==================================*/
  
  addTodo: function(txtTodos, endDate) {
    this.toDos.push({
      text: txtTodos,
      completed: true,
      endDate: endDate
    });
    this.displayTodoes;
  },
  /* DELETE ADD TODOS ===========================*/
 
  deleteTodo: function(index) {
    this.toDos.splice(index,1);
    this.displayTodoes;
  },
   /* EDIT TODOS ================================*/
  
   changeTodo: function (index, newItem) {
    this.toDos[index].text = newItem;
    this.displayTodoes;
  },

  /* EDIT TODOS ================================*/
  showTodo: function () {
    if (this.toDos.length == 0) {
      return "Your to do list is Empty!"
    } else {
      // start to loop
      for (let i = 0; i < this.toDos.length; i++) {
        var myItem = this.toDos[i];
        var x = (myItem.completed) ? 'X' : ' ';
        var ShowItem = '(' + x + ') ' + myItem.text + ' ' + myItem.endDate + ' ' + this.daysLeft(i) ;  
        console.log(ShowItem);
      } // End to loop
    
    }
  },

   /* Toggle to do ==============================*/
  toggleCompleted: function(index) {
    let item = this.toDos[index];
    item.completed = ! item.completed;
    console.log(this.showTodo());
  },

   /* Toggle to do ==============================*/
  toggleAll: function() {

    var counter = 0; //number of not completed
    var items = this.toDos;
  
    for ( let i = 0; i < items.length; i++ ) {
      if (items[i].completed === false) {
        counter++;
      }
    }

    if (counter > 0) { // if there is atleast one uncomplited
      for (let i = 0; i < items.length; i++) {
        items[i].completed = true;
      }
    } else { // if there is zero uncompleted 
      for (let i = 0; i < items.length; i++) {
        items[i].completed = !items[i].completed;
      }
    } 
    this.showTodo();
  },
  /* days left to expire =========================*/
  daysLeft: function (index) {
    dt2 = new Date(this.toDos[index].endDate);
    dt1 = new Date();
    return '(' + Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24)) + " days left)";
  }
};

 var displaTodosBtn = document.getElementById("btnDisplayTodos");
 console.log(displaTodosBtn);
 displaTodosBtn.addEventListener('click', function() {
   todoList.displayTodos();
 })