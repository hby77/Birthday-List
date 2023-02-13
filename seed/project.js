const db = require('../db')
const Project = require('../models/project')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const projects = [
        {
            relationship: 'Tier 0',
            person: 'Tyler',
            currentLocation: 'Georgia',
            association: 'General Assembly',
            birthday: '10-23-99',
            companyAndCareer: 'GeneralAssembly/Software Engineer',
            hobbiesAndExpertise: 'Gaming/Programming',
            notes: 'loves sushi'
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