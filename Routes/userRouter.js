const express = require('express')
const userRouter = express.Router()
const User = require('../models/user.js')

//get one user 
userRouter.get("/:id", async (req,res, next) => {
    console.log("test")
    try {
        const user = await User.find({ _id: req.params.id})
        return res.status(200).send(user)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
 
 })



module.exports = userRouter