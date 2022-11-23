let studentList = [
  "Anna",
  "Carl",
  "Segan",
  "Neil",
  "Bety",
  "Carla",
  "Jose",
  "Luiz",
  "Amanda",
];

console.log("This is a all students list");

// ForOF
for (let names of studentList) {
  console.log(names);
}

// While
let count = 0;
while (count <= 10) {
  console.log(`Counter = ${count}`);
  count++;
}

// DoWhile
var count2 = 0;
do {
  console.log("Hello World");
  count2++;
} while (count2 <= 20);
