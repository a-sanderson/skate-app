const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spotSchema = new Schema ({
    identifier: {
        type: String,
        
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
        
    }
})

module.exports = mongoose.model("Spot", spotSchema)