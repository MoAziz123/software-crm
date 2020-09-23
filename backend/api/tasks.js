
/**Requires*/
const router =  require('express').Router()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Task = require('../models/Task')

/**Models */
const Bug = require('../models/Task')
const { route } = require('./bugs')

/**Routes */
/**@route - /task/get
 * @method - GET
 * @description - gets all tasks associated with the current job
 * 
 */

 router.get('/task/get', (req,res)=>{
     Task.find({})
     .then((tasks)=>{
         return res.json({
                 tasks
            })
     })
     .catch((error)=>console.error(error))
 })

 /**@route - /task/new
  * @method - POST
  * @description - creates new task, associated with job id
  */

  router.post('/task/new', (req, res)=>{
      let new_task = new Task(req.body).save()
      .then((task)=>{
          return res.json({
              auth:true,
              success:true,
              message:"Task saved",
              task
          })
      })
      .catch((error)=>console.error(error))
  })

  /**@route - /task/update
   * @method - POST
   * @description - updates a given task
   */

  router.post('/task/update', (req,res)=>{
      Task.findOneAndUpdate({_id:req.body.id, req.body})
      .then((task)=>{
          return res.json({
              task,
              message:"Task successfully updated",
              success:true,
              auth:true
          })
      })
      .catch(error=>console.error)
  })

  /**@route - /task/delete
   * @method - POST
   * @description - deletes a task
   */
  router.post ('/task/delete', (req,res)=>{
      Task.findOneAndDelete({_id:req.body.id, req.body})
      .then((task)=>{
          return res.json({
              task,
              message: "Task deleted successfully",
              success:true
          })
      })
      .catch(error=>console.error)
  })