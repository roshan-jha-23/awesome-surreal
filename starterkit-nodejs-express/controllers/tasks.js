const { find, findOne, create, updateOne, deleteOne } = require("surrealdb");
const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  const tasks = await find(Task, {});
  res.json({ tasks });
};

const createTask = async (req, res) => {
  const task = await create(Task, req.body);
  res.status(201).json({ task });
};

const getTask = async (req, res, next) => {
  const { id } = req.params;
  const task = await findOne(Task, { _id: id });

  if (!task) {
    return next({
      message: `No task with id : ${id}`,
      status: 404,
    });
  }

  res.json({ task });
};

const deleteTask = async (req, res, next) => {
  const { id } = req.params;
  const task = await deleteOne(Task, { _id: id });

  if (!task) {
    return next({
      message: `No task with id : ${id}`,
      status: 404,
    });
  }

  res.json({ task });
};

const updateTask = async (req, res, next) => {
  const { id } = req.params;

  const task = await updateOne(Task, { _id: id }, req.body);

  if (!task) {
    return next({
      message: `No task with id : ${id}`,
      status: 404,
    });
  }

  res.json({ task });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
