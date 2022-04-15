function Rows() {
  //Selectors
  const todoInput = document.querySelector('.todo-input');
  const todoButton = document.querySelector('.todo-button');
  const todoList = document.querySelector('.todo-list');
  const filterOption = document.querySelector('.filter-todo');

  //Event Listeners
  document.addEventListener('DOMContentLoaded', getTodos);
  todoButton.addEventListener('click', addTodo);
  todoList.addEventListener('click', deleteCheck);
  filterOption.addEventListener('click', filterTodo);

  function addTodo(event) {
    event.preventDefault(); //to stop refreshing after clicking on the button
  
    //this creates div classes
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
  
    //this creates lists (li)
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
  
    //adding it to local storage
    saveLocalTodos(todoInput.value);
  
    //this creates check buttons
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);
  
    //this creates trash buttons
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);
  
    //finally adding it to the main list
    todoList.appendChild(todoDiv);
  
    //clearing the main box after entering the task
    todoInput.value = '';
  }
  
  function deleteCheck(e) {
    const item = e.target;
  
    //deleting
    if (item.classList[0] === 'trash-button') {
      const todo = item.parentElement;
  
      //some deleting animation
      todo.classList.add('fall');
      removeLocalTodos(todo);
      todo.addEventListener('transitionend', function() {
        todo.remove();
      });
    }
  
    //checking
    if (item.classList[0] === 'complete-button') {
      const todo = item.parentElement;
      todo.classList.toggle('completed');
    }
  }
  
  function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch(e.target.value) {
        case 'all':
          todo.style.display = 'flex';
          break;
        case 'completed':
          if (todo.classList.contains('completed')) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
          break;
        case 'uncompleted':
          if (!todo.classList.contains('completed')) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          } 
          break;
      }
    });
  }
  
  function saveLocalTodos(todo) {
    //cheack if I already have something in there
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
  
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  function getTodos() {
    //cheack if I already have something in there
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
      //this creates div classes
      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo');
  
      //this creates lists (li)
      const newTodo = document.createElement('li');
      newTodo.innerText = todo;
      newTodo.classList.add('todo-item');
      todoDiv.appendChild(newTodo);
  
      //this creates check buttons
      const completedButton = document.createElement('button');
      completedButton.innerHTML = '<i class="fas fa-check"></i>';
      completedButton.classList.add("complete-button");
      todoDiv.appendChild(completedButton);
  
      //this creates trash buttons
      const trashButton = document.createElement('button');
      trashButton.innerHTML = '<i class="fas fa-trash"></i>';
      trashButton.classList.add("trash-button");
      todoDiv.appendChild(trashButton);
  
      //finally adding it to the main list
      todoList.appendChild(todoDiv);
    });
  }
  
  function removeLocalTodos(todo) {
    //cheack if I already have something in there
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  return (

  )
}

export default Rows