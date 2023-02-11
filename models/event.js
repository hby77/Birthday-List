const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Event = new Schema(
    {
        location: { type: String, required: true },
        time: { type: String, required: true },
        date: { type: String, required: true },
        bdayPerson: { type: String, required: true },
        comments: { type: String, required: true },
        joinedList: { type: String, required: true },
        giftList: { type: String, required: true },
        creatorId: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Event', Event)