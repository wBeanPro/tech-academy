const taskList = document.querySelector("#task-list");
const textBox = document.querySelector("#text-box");
const addButton = document.querySelector("#add-button");

addButton.addEventListener("click", () => {
  const textOfTask = textBox.value;
  textBox.value = "";
  taskList.appendChild(addTask(textOfTask));
  textBox.focus();
});

function addTask(textOfTask) {
  const liElement = document.createElement("li");
  const spanElement = document.createElement("span");

  spanElement.setAttribute("id", "task");
  spanElement.textContent = textOfTask;

  liElement.appendChild(spanElement);
  liElement.appendChild(addRemoveButton());

  return liElement;
}

function addRemoveButton() {
  const removeButton = document.createElement("button");
  removeButton.textContent = "X";

  removeButton.addEventListener("click", () => {
    taskList.removeChild(this.parentNode);
  });

  return removeButton;
}
