const list = document.querySelector("#list");

const liElement = document.createElement("li");
liElement.textContent = "A new list item";

const button = document.querySelector("button");

button.addEventListener("click", () => {
  list.remove();
});

console.log(list);
