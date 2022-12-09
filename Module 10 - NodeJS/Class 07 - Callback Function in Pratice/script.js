function mensagemCesar(callback) {
  setTimeout(() => {
    console.log("Hi");
    callback();
  }, 0);
}

function mensagemAnna() {
  console.log("Hi Anna");
}

mensagemCesar(mensagemAnna);
