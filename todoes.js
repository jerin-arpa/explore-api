function loadToDOs() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => displayToDos(data))
}

function displayToDos(todos) {
    const todoContainer = document.getElementById('todo-container');
    for (const todo of todos) {
        console.log(todo);
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
        <h3>Title: ${todo.title}</h3>
        <p>User: ${todo.userId}</P>
        <p>Is Completed: ${todo.completed === true ? 'Complete' : 'Not Complete'}</P>
        `;
        todoContainer.appendChild(todoDiv);
    }
}

loadToDOs();