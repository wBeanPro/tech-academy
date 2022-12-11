"use strict";

import fetch from "node-fetch";

async function main() {
  const user = "cesarcanoff";
  const user2 = "Livia-CA";
  const urlApi = "https://api.github.com";

  // const response = await fetch(`${urlApi}/users/${user}`);
  const promise1 = fetch(`${urlApi}/users/${user}`);
  const promise2 = fetch(`${urlApi}/users/${user2}`);

  // Executar as duas request juntas, para que haja mais otimização.
  const promises = await Promise.all([promise1, promise2]);

  const githubUser = await promises[0].json();
  const githubUser2 = await promises[1].json();

  console.log(githubUser.name);
  console.log(githubUser2.name);

  /*
  fetch(`${urlApi}/users/${user}`)
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      console.log(user);
    });
    */
}

main();
