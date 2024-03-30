const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const taskSchema = new Schema({
    task: { type: String, require: true },
    isCheck: {type:Boolean, require: false}
    //name: { type: String, require: true }
})

const taskModel = model('Task', taskSchema);

module.exports = taskModel;