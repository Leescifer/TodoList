// Get references to the DOM elements
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

// Base URL for the PHP backend
const API_URL = 'api/todo.php';

// Function to load todos from the database
function loadTodos() {
    fetch(`${API_URL}?action=get`)
        .then(response => response.json())
        .then(todos => {
            todoList.innerHTML = ''; // Clear the list
            todos.forEach(todo => {
                const listItem = document.createElement('li');

                // Add todo text
                const textNode = document.createElement('span');
                textNode.textContent = todo.text;
                textNode.classList.add('todo-text');
                if (todo.completed) textNode.classList.add('completed');
                listItem.appendChild(textNode);

                // Complete button
                const completeButton = document.createElement('button');
                completeButton.textContent = 'Complete';
                completeButton.classList.add('complete-btn');
                completeButton.onclick = () => {
                    updateTodo(todo.id, !todo.completed);
                };
                listItem.appendChild(completeButton);

                // Delete button
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('delete-btn');
                deleteButton.onclick = () => {
                    deleteTodo(todo.id);
                };
                listItem.appendChild(deleteButton);

                // Append the list item to the todo list
                todoList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error loading todos:', error));
}

// Function to add a new todo
function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Please enter a valid todo item.');
        return;
    }

    fetch(`${API_URL}?action=add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ todoText })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadTodos(); // Reload the todo list
            todoInput.value = ''; // Clear the input field
        } else {
            alert(data.error || 'Error adding todo.');
        }
    })
    .catch(error => console.error('Error adding todo:', error));
}

// Function to update a todo's completed status
function updateTodo(id, completed) {
    fetch(`${API_URL}?action=update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, completed })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadTodos(); // Reload the list
        } else {
            alert(data.error || 'Error updating todo.');
        }
    })
    .catch(error => console.error('Error updating todo:', error));
}

// Function to delete a todo
function deleteTodo(id) {
    fetch(`${API_URL}?action=delete`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadTodos(); // Reload the list
        } else {
            alert(data.error || 'Error deleting todo.');
        }
    })
    .catch(error => console.error('Error deleting todo:', error));
}

// Event listener for the Add Todo button
addTodoButton.addEventListener('click', addTodo);

// Event listener for pressing Enter in the input field
todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});

// Load todos on page load
document.addEventListener('DOMContentLoaded', loadTodos);
