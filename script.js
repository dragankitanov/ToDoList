document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <span onclick="this.parentElement.remove();">❌</span>`;
        document.getElementById('task-list').appendChild(li);
        taskInput.value = '';
    }
});

document.getElementById('task-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('add-task').click();
    }
});
