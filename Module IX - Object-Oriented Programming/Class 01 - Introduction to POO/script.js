// PE - Programação Estruturada

function adicionaTarefa(textoDaTarefa) {
  const elementoLi = document.createElement("li");
  const elementoSpan = document.createElement("span");

  elementoSpan.setAttribute("id", "tarefa");
  elementoSpan.textContent = textoDaTarefa;
  elementoLi.className = "naoRealizada";
  elementoLi.appendChild(adicionaBotaoRemover());
  elementoSpan.addEventListener("click", function () {
    if (this.id === "tarefa") {
      if (this.parentNode.className === "naoRealizada") {
        this.parentNode.className = "realizada";
      } else {
        this.parentNode.className = "naoRealizada";
      }
    }
  });

  return elementoLi;
}

function adicionaBotaoRemover() {
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "X";
  botaoRemover.className = "remover";
  botaoRemover.addEventListener("click", function () {
    listaTarefas.removeChild(this.parentNode);
    exibeOcultaListaSuspensa();
  });
  return botaoRemover;
}

function exibeOcultaListaSuspensa() {
  const elementoSpan = document.querySelector("#tarefa");
  if (elementoSpan === null) {
    listaSuspensa.setAttribute("hidden", "hidden");
  } else {
    listaSuspensa.removeAttribute("hidden");
  }
}

// POO - Programação Orientada a Objetos

class Produto {
  #tipo;
  constructor(tipo) {
    this.#tipo = tipo;
  }

  getDados() {
    return this.#tipo;
  }
}

class Livro extends Produto {
  #titulo;
  #numPage;

  constructor(tipo, titulo, numPage) {
    super(tipo);
    this.#titulo = titulo;
    this.#numPage = numPage;
  }

  getDados() {
    return `
      Tipo: ${super.getDados()}
      Titulo: ${this.#titulo}
      Num, Pag: ${this.#numPage}
      `;
  }
}

const prod = new Produto("Genérico");
console.log(prod.getDados());

const liv = new Produto("Livro", "POO", 50);
console.log(liv.getDados());
