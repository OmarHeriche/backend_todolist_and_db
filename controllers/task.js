const task = require("../modules/task");

const createTask = async (req, res) => {
  try {
    const myTask = await task.create(req.body);
    res.status(201).json({ task: myTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try{
    const myTask = await task.findOneAndDelete({_id:req.params.id});
    if(!myTask){
      return res.status(404).send(`no task matches with the id : ${req.params.id}`);
    }
    res.status(200).json({ task: myTask });
  }catch(error){
    res.status(500).json({ msg: error });
  }

};
const getAllTasks = async (req, res) => {
  try{
    const myTask = await task.find({});
    res.status(200).json({tasks:myTask})
  }catch(error){
    res.status(500).json({ msg: error });
  }
  
};
const getTask = async (req, res) => {
  try{
    const myTask = await task.findOne({_id:req.params.id})
    if (!myTask) {
      return res
        .status(404)
        .send(`no task matches with the id : ${req.params.id}`);
    }
    res.status(200).json({ task: myTask });   
  }catch(error){
    res.status(500).json({ msg: error });
  }

};
const updateTask = async (req, res) => {
  try{
    const myTask = await task.findOneAndUpdate({_id:req.params.id},req.body)
    if (!myTask) {
      return res
        .status(404)
        .send(`no task matches with the id : ${req.params.id}`);
    }    
    res.status(200).json({ id: req.params.id, data: myTask });   
  }catch(error){
    res.status(500).json({ msg: error });    
  }

};

module.exports = { getAllTasks, getTask, createTask, deleteTask, updateTask };
