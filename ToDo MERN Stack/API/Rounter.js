const Task = require("./model");
const mongoose = require("mongoose");

module.exports.getTodo = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    const task = await Task.find();
    // res.json(task);
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};

module.exports.postTodo = async (req, res) => {
  const { task, isCheck } = req.body;

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    const taskCreating = await Task.create({ task, isCheck });
    res.json(taskCreating);
    // res.json({ success: true, msg: "Data uploaded Sucessfully" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};

module.exports.putTodo = async (req, res) => {
  const taskID = req.params.taskID;
  const updatedisCheck = req.body;

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    const updateTask = await Task.findByIdAndUpdate(taskID, updatedisCheck, {
      new: true,
    });

    if (!updateTask) {
      return res
        .status(404)
        .json({ success: false, msg: "No task with that ID" });
    }

    res.json({
      success: true,
      message: "Task updated successfully",
      data: updateTask,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};

module.exports.deleteTodo = async (req, res) => {
  const taskID = req.params.taskID;

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    const deleteTask = await Task.findByIdAndDelete(taskID);

    if (!deleteTask) {
      return res.status(404).json({ success: false, msg: "Task not found" });
    }

    res.json(deleteTask);
    // res.json({ success: true, msg: "Task deleted Successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};
