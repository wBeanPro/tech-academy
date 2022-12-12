import { getPeople } from "./StarWarsService.js";

async function main() {
  const starWarsPeople = await getPeople(1);
  for (let props in starWarsPeople[0]) {
    console.log(props); // LISTA AS PROPS DO OBJETO.
    console.log(starWarsPeople[0][props]); // LISTA AS PROPS DO OBJETO.
  }

  console.log("=============================")
  for (let person of starWarsPeople) {
    console.log(person); // LISTA DO OBJETO.
  }
}

main();
