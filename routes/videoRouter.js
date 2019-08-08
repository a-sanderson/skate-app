const express = require('express')
const videoRouter = express.Router()
const User = require('../models/user.js')
const Video = require("../models/video.js")


//get all trending vids over 20 likes 
videoRouter.get("/trending", async (req,res, next) => {
  
    try {
        const items = await Video.find({ votes: {$gte: 20}})
        return res.status(200).send(items)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
 
 })

 videoRouter.post("/", (req, res, next) => {
     const newVid = new Video(req.body)
     newVid.save((err,savedVid) => {
         if(err){
             res.status(500)
             return next(err)
         }
         return res.status(201).send(savedVid)
     })
 })


 module.exports = videoRouter