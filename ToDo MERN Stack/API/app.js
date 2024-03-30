const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { getTodo, postTodo, putTodo, deleteTodo } = require("./Rounter");
require("dotenv").config();

const app = express();
const port = 5000;
var unlencodedParser = bodyParser.urlencoded({ extended: false });
// console.log(process.env.MONGODB_URL);

app.use(cors());
app.use(express.json());

app.get("/api/data", getTodo);

app.post("/api/data", unlencodedParser, postTodo);

app.put("/api/data/:taskID", unlencodedParser, putTodo);

app.delete("/api/data/:taskID", unlencodedParser, deleteTodo);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
