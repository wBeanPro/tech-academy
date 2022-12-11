import fs from "fs";

let students;

fs.readFile("./students.json", (error, data) => {
  error ? null : (students = JSON.parse(data));
  console.log(`Students: ${students}`);
});

