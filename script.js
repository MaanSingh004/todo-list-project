
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  const completeButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  span.textContent = taskText;
  completeButton.textContent = "Done";
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";

  completeButton.addEventListener("click", function () {
    li.classList.toggle("completed");
    updateCount();
  });

  deleteButton.addEventListener("click", function () {
    li.remove();
    updateCount();
  });

  li.append(span, completeButton, deleteButton);
  taskList.appendChild(li);

  input.value = "";
  updateCount();
});

function updateCount() {
  const tasks = [...taskList.children];
  const remaining = tasks.filter(
    task => !task.classList.contains("completed")
  ).length;

  taskCount.textContent = `${remaining} tasks remaining`;
}
