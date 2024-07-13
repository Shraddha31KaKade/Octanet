document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const task = todoInput.value.trim(); // Get the task and trim whitespace

        if (task !== '') {
            addTask(task); // Add the task to the list
            todoInput.value = ''; // Clear the input field
        }
    });

    // Function to add a new task to the list
    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', function() {
            li.remove(); // Remove the task when delete button is clicked
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li); // Append new task to the list
    }
});
