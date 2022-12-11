"use strict";

// For
const students = ["Anna", "Sarah", "Carl", "Hannah"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
  /*
    Anna
    Sarah
    Carl
    Hannah
  */
}

// ForIn
// Percorrer as propriedades de um OBJETO
const studentHannah = {
  id: "80909809-FSD",
  name: "Hannah Grimes",
  githubAccount: "hannahdev",
};

for (let props in studentHannah) {
  console.log(props);
  /*
    id
    name
    githubAccount
  */
}

// ForOf
const alunos = ["Caio", "Rodrigues", "Sílvio", "Renata"];
for (let aluno of alunos) {
  console.log(aluno);
}
