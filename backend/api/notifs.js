/**Express */
const router =  require('express').Router()

/**Mongoose Config */
const Notification = require('../models/Notification')
const mongoose = require('mongoose')

/** Routes Config*/
const jwt = require('jsonwebtoken')


/**
 * @route - /notif/new
 * @method - POST
 * @description- creates new notif, assigned to user
*/

router.post('/notifications/new', (req,res)=>
{
    let new_notif = new Notification({req.body})
    .save()
    .then((notif)=>
    {
        return res.json({
            notif,
            success:true            
        })
    })
})

//requires user
router.post('/notifications/remove', (req,res)=>
{
    Notification.findOneAndDelete({req.body.user})
    .then((notif)=>
    {
        return res.json({
            success:true
        })
    })
    
})