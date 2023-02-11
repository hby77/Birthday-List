const Event = require('../models/event');
const User = require('../models/user')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({ users })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find()
        return res.status(200).json({ events })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getEventsById = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id)
        if (event) {
            return res.status(200).json({ event });
        }
        return res.status(404).send('Event with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createEvent = async (req, res) => {
    try {
        const event = await new Event(req.body)
        await event.save()
        return res.status(201).json({
            event,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


// const getPlantById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const plant = await Plant.findById(id)
//         if (plant) {
//             return res.status(200).json({ plant });
//         }
//         return res.status(404).send('Plant with the specified ID does not exists');
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

// const updatePlant = async (req, res) => {
//     try {
//         const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true})
//         res.status(200).json(plant)
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

// const deletePlant = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleted = await Plant.findByIdAndDelete(id)
//         if (deleted) {
//             return res.status(200).send("Plant deleted");
//         }
//         throw new Error("Plant not found");
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

module.exports = {
    getAllUsers,
    getAllEvents,
    getUserById,
    getEventsById,
    createUser,
    createEvent
}