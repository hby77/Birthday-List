const db = require('../db')
const Project = require('../models/project')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const projects = [
        {
            title: 'Project 1'
        } 
    ]

    await Project.insertMany(projects)
    console.log("Created a project!")
}
const run = async () => {
    await main()
    db.close()
}

run()