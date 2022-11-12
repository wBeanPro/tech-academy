document.getElementById("title").textContent = "Ola Mundo";
document.getElementById("title").textContent = "Exemplificando funcionalidades";

/*
 This
 is
 a
 block
 comment
*/

// This is a one line comment

function welcome() {
  const name = document.querySelector("#user-name").value;
  console.log(`Welcome ${name}`);
  document.getElementById("form-login").style.display = "none";
}

function changeBackgroundColor() {
  const menu = document.querySelector("#choose-color");
  const color = menu.options[menu.selectedIndex].value;
  document.body.style.backgroundColor = color;
}
