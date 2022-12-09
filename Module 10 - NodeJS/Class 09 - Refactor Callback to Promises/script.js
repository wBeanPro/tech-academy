function mensagemCesar() {
  const promiseMensagemCesar = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hi");
      resolve();
    }, 0);
  });

  return promiseMensagemCesar;
}

function mensagemAnna() {
  console.log("Hi Anna");
}

mensagemCesar().then(mensagemAnna);
