const express = require('express')
const spotRouter = express.Router()
const Spot = require("../models/spot.js")


spotRouter.post("/", (req, res, next) => {
    const newSpot = new Spot(req.body)
    newSpot.save((err,savedSpot) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedSpot)
    })
})

module.exports = spotRouter