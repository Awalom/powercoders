// Object todoList start here
var todoList = {
  /* TODOS ARRAY ================================*/
  toDos: [
    {text: "Item 1", completed: false, endDate: "2019-12-01"},
    {text: "Item 2", completed: false, endDate: "2019-12-01"},
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
  /* PI =========================================*/
  PI: 3.7344,
  /* square root ================================*/
  sqr: function(num, root) {
    var result = 1;
    for(var i = 1; i <= root; i++) {
      result *= num;
    }
    return result;
  },
  /* days left to expire =========================*/
  daysLeft: function (index) {
    dt1 = new Date(this.toDos[index].endDate);
    console.log("dt1", dt1);
    dt2 = new Date();
    console.log("dt2", dt2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
  }
};
//object todolist end here