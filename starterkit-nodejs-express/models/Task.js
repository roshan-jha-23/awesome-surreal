import { Surreal } from "surrealdb.js";

const db = new Surreal();

db.connect("http://127.0.0.1:8000/rpc");

const Task = db.model("Task", {
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = Task;
