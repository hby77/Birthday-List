const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/users', controllers.getAllUsers)
router.get('/users/events', controllers.getAllEvents)
router.get('/users/:id', controllers.getUserById)
router.get('/users/events/:id', controllers.getEventsById)
// router.get('/', (req, res) => res.send('This is root!'))
// router.get('/plants', controllers.getAllPlants)
// router.post('/plants', controllers.createPlant)
// router.put('/plants/:id', controllers.updatePlant)
// router.delete('/plants/:id', controllers.deletePlant)

module.exports = router



