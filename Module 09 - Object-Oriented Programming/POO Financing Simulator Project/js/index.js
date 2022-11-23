const comCarencia = document.getElementById("#comCarencia");
const listaSuspensa = document.getElementById("#listaSuspensa");
const corpoTabela = document.getElementById("#corpoTabela");

comCarencia.addEventListener("change", () => {
  if (this.checked) {
    listaSuspensa.removeAttribute("hidden");
  } else {
    listaSuspensa.setAttribute("hidden", "hidden");
  }
});
