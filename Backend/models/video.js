const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = new Schema ({
    url: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    name: {
        type:String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})



module.exports = mongoose.model("Video", videoSchema)