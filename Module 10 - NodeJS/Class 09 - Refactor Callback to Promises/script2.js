import fs from "fs";
import { promisify } from "util";

const readFilePromise = promisify(fs.readFile);

let students;

readFilePromise("./students.json")
  .then((datas) => {
    error ? null : (students = JSON.parse(datas));
    console.log(`Students: ${students}`);
  })
  .catch((error) => {
    console.error(error);
  });

/*
  fs.readFile("./students.json", (error, data) => {
    error ? null : (students = JSON.parse(data));
    console.log(`Students: ${students}`);
  });
*/
