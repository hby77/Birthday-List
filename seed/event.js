const db = require('../db')
const Event = require('../models/event')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const events = [
        { 
        location: '', 
        time: '',
        date: '',
        bdayPerson: '',
        comments: '',
        joinedList: '',
        giftList: '',
        creatorId: '',
        } 
    ]

    await Event.insertMany(events)
    console.log("Created some events!")
}
const run = async () => {
    await main()
    db.close()
}

run()