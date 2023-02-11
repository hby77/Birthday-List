const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/users', controllers.getAllUsers)
router.get('/users/events', controllers.getAllEvents)
router.get('/users/:id', controllers.getUserById)
router.get('/users/events/:id', controllers.getEventsById)
router.post('/createUser', controllers.createUser)
router.post('/createEvent', controllers.createEvent)
// router.get('/', (req, res) => res.send('This is root!'))
// router.get('/plants', controllers.getAllPlants)
// router.put('/plants/:id', controllers.updatePlant)
// router.delete('/plants/:id', controllers.deletePlant)

module.exports = router



