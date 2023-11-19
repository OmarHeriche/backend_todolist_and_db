const getAllTasks = (req, res) => {
  res.send("display all");
};
const getTask = (req, res) => {
  res.send(`get single task ${req.params.id}`);
};
const createTask = (req, res) => {
  res.send("create task");
};
const deleteTask = (req, res) => {
  res.send(`remove task ${req.params.id}`);
};
const updateTask = (req, res) => {
  res.send(`update task ${req.params.id}`);
};

module.exports = { getAllTasks, getTask, createTask, deleteTask, updateTask };
