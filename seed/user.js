const db = require('../db')
const User = require('../models/user')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [
        { 
        name: 'HB', 
        password: '1234',
        email: 'hby0818@gmail.com'
        } 
    ]

    await User.insertMany(users)
    console.log("Created a user!")
}
const run = async () => {
    await main()
    db.close()
}

run()