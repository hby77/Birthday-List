const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.get('/users', controllers.getAllUsers)
router.get('/users/projects', controllers.getAllProjects)
router.get('/users/:id', controllers.getUserById)
router.get('/users/projects/:id', controllers.getProjectsById)
router.post('/createUser', controllers.createUser)
router.post('/createProject', controllers.createProject)
router.put('/updateUsers/:id', controllers.updateUser)
router.put('/updateProjects/:id', controllers.updateProject)
router.delete('/deleteUsers/:id', controllers.deleteUser)
router.delete('/deleteProjects/:id', controllers.deleteProject)


module.exports = router



