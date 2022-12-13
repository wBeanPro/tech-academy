import express from "express";
import { StatusCodes } from "http-status-codes";

const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
  { id: 1, name: "Anna", age: 22, country: "United States of America" },
  { id: 2, name: "Sophie", age: 19, country: "Netherland" },
  { id: 3, name: "Hannah", age: 20, country: "England" },
  { id: 4, name: "Mike", age: 23, country: "Canada" },
  { id: 5, name: "Jake", age: 25, country: "Russia" },
  { id: 6, name: "Mark", age: 21, country: "Poland" },
];

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:3000`)
);

app.get("/", (request, response) => {
  return response.send("<h1>Root Route</h1>");
});

app.get("/users", (request, response) => {
  return response.send(users);
});

app.get("/users/:userId", (request, response) => {
  const userId = request.params.userId;
  const user = users.find((user) => {
    return user.id === Number(userId);
  });
  return response.send(user);
});

app.post("/users", (request, response) => {
  const newUser = request.body;

  users.push(newUser);

  return response.status(StatusCodes.CREATED).send(newUser);
});

app.put("/users/:userId", (request, response) => {
  const userId = request.params.userId;
  const updatedUser = request.body;

  users = users.map((user) => {
    if (Number(userId) === user.id) return updatedUser;

    return user;
  });

  return response.send(updatedUser);
});

app.delete("/users/:userId", (request, response) => {
  const userId = request.params.userId;

  user = user.filter((user) => user.id !== Number(userId));

  return response.status(StatusCodes.NO_CONTENT).send();
});
