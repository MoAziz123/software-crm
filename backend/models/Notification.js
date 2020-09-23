const mongoose = require('mongoose');
const notifSchema = mongoose.Schema({
    name:{type:String},
    description:{type:String},
    date:{type:Date}
})

module.exports =  mongoose.model('Notification', notifSchema)