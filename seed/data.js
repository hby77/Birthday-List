const db = require('../db')
const Data = require('../models/data')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const datas = [
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

    await Data.insertMany(datas)
    console.log("Created a data!")
}
const run = async () => {
    await main()
    db.close()
}

run()