
let todos = [
    {
      todoID: 0,
      todoText: "Finish Homework",
      todoComplete: false
    },
    {
      todoID: 1,
      todoText: "Walk the dog",
      todoComplete: true
    },
    {
      todoID: 2,
      todoText: "Clean my room",
      todoComplete: false
    }
  ];

document.querySelector('#add').addEventListener('click', function() {
    let task = document.querySelector('#text')
    document.querySelector('#displayList').textContent = task
    console.log(task)
})
/*   const displayList = document.querySelector('#displayList')

  for( let i = 0; i < 3; i++) {
    displayList.innerHTML = `${todos[i].todoText} Hello`
}
  console.log(todos) */

  /* const text = document.querySelector('#text')
  const displayList = document.querySelector('#displayList')

  const listTodo = () => {
    let todoList = todos.map(todo => `${todo}<br>`).join("");
    displayList.innerHTML = `${todoList}`
} 
listTodo()

document.querySelector('#add').onclick = () => {
    todos.push(text)
}  
console.log(todoList) */

/* document.querySelector('#displayList').innerHTML = (todos[0], todos[1], todos[2]) */