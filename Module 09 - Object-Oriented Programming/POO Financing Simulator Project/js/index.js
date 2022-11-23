import { Financiamento } from "./finaciamento";

const comCarencia = document.getElementById("#comCarencia");
const listaSuspensa = document.getElementById("#listaSuspensa");
const corpoTabela = document.getElementById("#corpoTabela");
const botaoCalcular = document.getElementById("#botaoCalcular");
const textoValor = document.getElementById("#textoValor");
const textoEntrada = document.getElementById("#textoEntrada");
const textoTaxaJuros = document.getElementById("#textoTaxaJuros");
const textoPrazo = document.getElementById("#textoPrazo");

comCarencia.addEventListener("change", () => {
  if (this.checked) {
    listaSuspensa.removeAttribute("hidden");
  } else {
    listaSuspensa.setAttribute("hidden", "hidden");
  }
});

botaoCalcular.addEventListener("click", () => {
  const valor = parseFloat(textoValor.value);
  const entrada = parseFloat(textoEntrada.value);
  const taxaJuros = parseFloat(textoTaxaJuros.value);
  const prazo = parseFloat(textoPrazo.value);

  let simulacao;
  simulacao = new Financiamento(valor, entrada, taxaJuros, prazo);
  simulacao.calculaParcelasMensais();
  simulacao.exibeParcelas();
});
