// Add your JS here.
var todoInput = document.querySelector('.new-todo');
var todoList = document.querySelector('.todo-list');


todoInput.addEventListener('keypress', function addListItem(event) {
  if(event.keyCode === 13){
    var todoContent = event.target.value;
    event.target.value = "";
    var newTodoLi = document.createElement('li');

    todoList.insertBefore(newTodoLi, todoList.childNodes[0]);
    newTodoLi.innerHTML = '<li><div class="view"><label></label></div></li>';
    newTodoLi.textContent = todoContent;
    // newTodoLi.classList.add('list-item')
    // todoList.appendChild(newTodoLi);
    // document.getElementByType('ul')
    // var listItem = document.querySelector('.list-item');

  }
  return event;
});
