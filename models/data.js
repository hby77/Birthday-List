const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Data = new Schema(
    {
        relationship: { type: String, required: true },
        person: { type: String, required: true },
        currentLocation: { type: String, required: true },
        association: { type: String, required: true },
        birthday: { type: String, required: true },
        companyAndCareer: { type: String, required: true },
        hobbiesAndExpertise: { type: String, required: true },
        notes: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Data', Data)