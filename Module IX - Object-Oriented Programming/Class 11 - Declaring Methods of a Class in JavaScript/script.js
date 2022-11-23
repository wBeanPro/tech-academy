"use strict";

class Produto {
  descricao;
  largura;
  altura;
  profundidade;
  valor;
  parcelas;

  constructor(descricao, largura, altura, profundidade) {
    this.descricao = descricao;
    this.largura = largura;
    this.altura = altura;
    this.profundidade = profundidade;
    this.valor = valor;
  }

  volumeDoProduto() {
    return this.largura * this.altura * this.profundidade;
  }

  parcelValor() {
    return this.valor / parcelas;
  }
}
