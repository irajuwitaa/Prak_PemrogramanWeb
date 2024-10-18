let taskCount = 0;

document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Tugas tidak boleh kosong!');
        return;
    }

    taskCount++;  // Increment tugas numbering

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        <span class="task-number">${taskCount}.</span> 
        <span class="task-text">${taskText}</span>
        <button class="edit-btn" onclick="editTask(this)">✏️</button>
        <button class="delete-btn" onclick="deleteTask(this)">🗑️</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
    updateTaskNumbers();  // Update task numbers after deletion
}

function editTask(button) {
    const li = button.parentElement;
    const taskTextElement = li.querySelector('.task-text');
    const taskText = taskTextElement.textContent.trim();
    
    const newTask = prompt('Edit tugas:', taskText);
    if (newTask !== null && newTask.trim() !== '') {
        taskTextElement.textContent = newTask;
    }
}

function updateTaskNumbers() {
    const taskList = document.getElementById('taskList');
    const tasks = taskList.getElementsByTagName('li');

    for (let i = 0; i < tasks.length; i++) {
        const taskNumber = tasks[i].querySelector('.task-number');
        taskNumber.textContent = `${i + 1}.`;
    }

    taskCount = tasks.length;  // Update the task count based on current tasks
}
