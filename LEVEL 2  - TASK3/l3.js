function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const taskText = newTaskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const task = createTaskElement(taskText);
    document.getElementById('pendingList').appendChild(task);

    newTaskInput.value = '';
}

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.innerHTML = `
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    li.appendChild(buttonsDiv);

    return li;
}

function completeTask(button) {
    const task = button.parentNode.parentNode;
    task.parentNode.removeChild(task);

    const completedTask = task.cloneNode(true);
    completedTask.innerHTML += ' - Completed';
    document.getElementById('completedList').appendChild(completedTask);
}

function editTask(button) {
    const task = button.parentNode.parentNode;
    const newText = prompt('Edit task:', task.textContent);

    if (newText !== null) {
        task.textContent = newText;
    }
}

function deleteTask(button) {
    const task = button.parentNode.parentNode;
    task.parentNode.removeChild(task);
}
