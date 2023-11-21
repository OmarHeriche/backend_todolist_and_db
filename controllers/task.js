const task = require("../modules/task");
const Wrapper = require("../middleWeare/asyn");
const CustomErr = require("../middleWeare/err");

const createTask = Wrapper(async (req, res) => {
  const myTask = await task.create(req.body);
  res.status(201).json({ task: myTask });
});
const deleteTask = Wrapper(async (req, res) => {
  const myTask = await task.findOneAndDelete({ _id: req.params.id });
  if (!myTask) {
    return next(
      new CustomErr(`no task matches with the id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ task: myTask });
});
const getAllTasks = Wrapper(async (req, res) => {
  const myTask = await task.find({});
  res.status(200).json({ tasks: myTask });
});
const getTask = Wrapper(async (req, res,next) => {
  const myTask = await task.findOne({ _id: req.params.id });
  if (!myTask) {
    return next(
      new CustomErr(`no task matches with the id : ${req.params.id}`,404)
    );
  }
  res.status(200).json({ task: myTask });
});
const updateTask = Wrapper(async (req, res) => {
  const myTask = await task.findOneAndUpdate({ _id: req.params.id }, req.body);
  if (!myTask) {
    return next(
      new CustomErr(`no task matches with the id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ id: req.params.id, data: myTask });
});

module.exports = { getAllTasks, getTask, createTask, deleteTask, updateTask };
