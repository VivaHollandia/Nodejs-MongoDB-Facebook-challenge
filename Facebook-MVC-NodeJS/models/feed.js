const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const FeedSchema = new Schema({
    name : {
        type : String,
        required: true,
        maxLength: [15,"The Name field must be no longer than 15 characters !"]
    },
    message : {
        type : String,
        required: true,
        maxLength: [40,"The Message field must be no longer than 40 character !"]
    }
},{timestamps:true})

const FEED = mongoose.model('FEED',FeedSchema)

module.exports = {
    FEED
}