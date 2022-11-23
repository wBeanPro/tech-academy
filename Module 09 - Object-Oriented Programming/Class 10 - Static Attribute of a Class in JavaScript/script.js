"use strict";

class Musica {
  static formato = "mp3";
  #titulo;
  #duracao;

  constructor(titulo, duracao) {
    this.#titulo = titulo;
    this.#duracao = duracao;
  }
}

// STATIC só permite que a classe raiz a acesse.

const musica1 = new Musica("My Music", 190);
console.log(musica1.formato); // UNDEFINED
console.log(Musica.formato); // MP3
