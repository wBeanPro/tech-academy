"use strict";

class Livro extends Produto {
  titulo;
  numPage;

  constructor(titulo, numPage) {
    super();
    this.titulo = titulo;
    this.numPage = numPage;
  }
}
