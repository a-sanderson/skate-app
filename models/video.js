const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = new Schema ({
    url: {
        type: String,
        required: true
    },
    trick: {
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
    },
    spot: {
        type: Schema.Types.ObjectId,
        ref: "Spot"
    }
})



module.exports = mongoose.model("Video", videoSchema)