const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema(
    {   
        title: { type: String, required: false },
        data: [{ type: Schema.Types.ObjectId, ref: "Data" }]
    },
    { timestamps: true },
)

module.exports = mongoose.model('Project', Project)