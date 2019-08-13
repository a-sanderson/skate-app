const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spotSchema = new Schema ({
    identifier: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true 
    },
    coordinate:{
        type: Object,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Spot", spotSchema)