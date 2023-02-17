const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Data = new Schema(
    {
        relationship: { type: String, required: false },
        person: { type: String, required: false },
        currentLocation: { type: String, required: false },
        association: { type: String, required: false },
        birthday: { type: String, required: false },
        companyAndCareer: { type: String, required: false },
        hobbiesAndExpertise: { type: String, required: false },
        notes: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Data', Data)