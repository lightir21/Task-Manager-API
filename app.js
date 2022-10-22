require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routers/tasks");

// middlewear

app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}...`));
