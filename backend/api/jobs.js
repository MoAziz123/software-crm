
/**Requires*/
const router =  require('express').Router()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const job = require('../models/job')


/**Models */
const Bug = require('../models/job')
const { route } = require('./bugs')

/**Routes */
/**@route - /job/get
 * @method - GET
 * @description - gets all jobs
 * 
 */
 router.get('/job/get', (req,res)=>{
     job.find({})
     .then((jobs)=>{
         return res.json({
                 jobs
            })
     })
     .catch((error)=>console.error(error))
 })

 /**@route - /job/new
  * @method - POST
  * @description - creates new job
  */

  router.post('/job/new', (req, res)=>{
      let new_job = new job(req.body).save()
      .then((job)=>{
          return res.json({
              auth:true,
              success:true,
              message:"job saved",
              job
          })
      })
      .catch((error)=>console.error(error))
  })

  /**@route - /job/update
   * @method - POST
   * @description - updates a given job
   */

  router.post('/job/update', (req,res)=>{
      job.findOneAndUpdate({_id:req.body.id, req.body})
      .then((job)=>{
          return res.json({
              job,
              message:"job successfully updated",
              success:true,
              auth:true
          })
      })
      .catch(error=>console.error)
  })

  /**@route - /job/delete
   * @method - POST
   * @description - deletes a job
   */
  router.post ('/job/delete', (req,res)=>{
      job.findOneAndDelete({_id:req.body.id, req})
      .then((job)=>{
          return res.json({
              job,
              message: "job deleted successfully",
              success:true
          })
      })
      .catch(error=>console.error)
  })