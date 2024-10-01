const express = require("express");

const app = express();

app.use(express.json());

let todos = [];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { title, completed = false } = req.body;
  const newTodo = { id: todos.length + 1, title, completed };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todo = todos.find(todo => todo.id === parseInt(id));
  if (todo) {
    todo.title = title !== undefined ? title : todo.title;
    todo.completed = completed !== undefined ? completed : todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
}); 


app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== parseInt(id));
  res.status(204).send();
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
