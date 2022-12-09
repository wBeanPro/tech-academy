var fs = require("fs");

fs.readFile("file1.json", (error, data) => {
  fs.readFile("file2.json", (error2, data2) => {
    if (error && error2) {
      console.log(data);
      console.log(data2);
    }
  });
});

let datas1 = null,
  datas2 = null;

readFile("file1.json", (error, data) => {
  error ? console.log(error) : null;
  datas1 = data;
  show();
});

readFile("file2.json", (error, data) => {
  error ? console.log(error) : null;
  datas2 = data;
  show();
});

function show() {
  if (datas1 && datas2) {
    console.log(datas1);
    console.log(datas2);
  }
}
