import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:3000`)
);

app.get("/", (request, response) => {
  return response.send("<h1>Root Route</h1>");
});
