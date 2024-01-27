let tasks = [];

function renderTasks(tasks) {
  const listElement = document.getElementById('todoList');
  listElement.innerHTML = '';
  tasks.forEach((task) => {
    listElement.innerHTML += `
    <li ${task.completed ? 'class="strike"' : ''}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>
    `;
  });
}

function newTask() {
  const task = document.getElementById('todo').value;
  tasks.push({ detail: task, completed: false });
  renderTasks(tasks);
  console.log('NewTask function has been called.');
}

document.getElementById('submitTask').addEventListener('click', newTask);

function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail != taskElement.childNodes[0].innerText
  );
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[1].innerText
  );
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  taskElement.classList.toggle('strike');
  console.log(tasks);
}

function manageTasks(event) {
  console.log(event.target);
  console.log(event.currentTarget);
  const parent = event.target.closest('li');
  if (event.target.dataset.function === 'delete') {
    removeTask(parent);
  }
  if (event.target.dataset.function === 'complete') {
    completeTask(parent);
  }
}

document.getElementById('submitTask').addEventListener('click', newTask);
document.getElementById('todoList').addEventListener('click', manageTasks);

renderTasks(tasks);
