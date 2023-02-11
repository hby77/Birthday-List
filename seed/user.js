const db = require('../db')
const User = require('../models/user')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [
        { 
        name: 'HB', 
        email: 'hby0818@gmail.com',
        password: '1234',
        } 
    ]

    await User.insertMany(users)
    console.log("Created some users!")
}
const run = async () => {
    await main()
    db.close()
}

run()