function addTask() {
  const input = document.getElementById('tf-input').value;
  const task = document.createElement('li');
  const taskId = new Date().valueOf().toString() + Math.random().toString(36).substring(2, 7);
  task.id = taskId;
  task.classList.add('list-item');

  task.innerHTML = `
    <span class="task-text">${input}</span>
    <button onclick="editTask('${taskId}')" class="edit-button">Edit</button>
    <button onclick="deleteTask('${taskId}')" class="delete-button">Delete</button>
  `;

  document.getElementById('task-container').appendChild(task);
  document.getElementById('tf-input').value = '';
}

function deleteTask(id) {
  const task = document.getElementById(id);
  if (task) task.remove();
}

function editTask(id) {
  const task = document.getElementById(id);
  const taskTextElement = task.querySelector('.task-text');
  const newText = prompt('Edit task: ', taskTextElement.textContent);
  
  if (newText !== null && newText.trim()) {
    taskTextElement.textContent = newText;
  }
}
