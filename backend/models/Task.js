const mongoose = require('mongoose');
const taskSchema = mongoose.Schema({
    name:{type:String},
    description:{type:String},
    due_date:{type:Date},
    completed:{type:Boolean}
})

module.exports =  mongoose.model('Task', taskSchema)