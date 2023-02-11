const db = require('../db')
const User = require('../models/user')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [
        { 
        name: '', 
        email: '',
        password: '',
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