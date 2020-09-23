const mongoose = require('mongoose');
const jobSchema = mongoose.Schema({
    name:{type:String},
    description:{type:String},
    tasks:{type:Array},
    //should store list of tasks
    bugs:{type:Array},
    completed:{type:Boolean}
})

module.exports =  mongoose.model('Job', jobSchema)