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
  spanElement.className = "notDo";

  liElement.appendChild(spanElement);
  liElement.appendChild(addRemoveButton());

  spanElement.addEventListener("click", () => {
    if (this.id === "task") {
      if (this.parentNode.className === "notDo") {
        this.parentNode.className = "done";
      } else {
        this.parentNode.className = "notDo";
      }
    }
  });

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

function showOrHideDropDownList() {
  const spanElement = document.querySelector("#task");
  if (spanElement === null) {
    dropDownList.setAttribute("hidden", "hidden");
  } else {
    dropDownList.removeAttribute("hidden");
  }
}

dropDownList.addEventListener("change", () => {
  if (dropDownList.selectedIndex === 1 || dropDownList.selectedIndex === 2) {
    const taskVet = taskList.querySelectorAll("#task");
    for (task of taskVet) {
      task.dispatchEvent(new Event("click"));
    }
  } else if (
    dropDownList.selectedIndex === 1 ||
    dropDownList.selectedIndex === 2
  ) {
    const taskVet = taskList.querySelectorAll(".remove");
    for (task of taskVet) {
      task.dispatchEvent(new Event("click"));
    }
  }
});
