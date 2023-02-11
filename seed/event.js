const db = require('../db')
const Event = require('../models/event')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const events = [
        { 
        location: 'Shorty Howell Park', 
        time: '2pm',
        date: '10-23-1999',
        bdayPerson: 'Tyler',
        comments: 'Dont forget to bring food',
        joinedList: ['bob', 'david', 'danny'],
        giftList: ['pencil', 'paper', 'waterbottle'],
        creatorId: 'HB',
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