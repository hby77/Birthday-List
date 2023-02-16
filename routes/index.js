const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/certify', controllers.certifyUser)

router.get('/getAllUsers', controllers.getAllUsers)
router.post('/createUser', controllers.createUser)
router.put('/updateUsers/:id', controllers.updateUser)
router.delete('/deleteUsers/:id', controllers.deleteUser)

router.get('/getAllProjects', controllers.getAllProjects)
router.post('/createProject', controllers.createProject)
router.put('/updateProjects/:id', controllers.updateProject)
router.delete('/deleteProjects/:id', controllers.deleteProject)

router.get('/getAllDatas', controllers.getAllDatas)
router.post('/createData', controllers.createData)
router.put('/updateDatas/:id', controllers.updateData)
router.delete('/deleteDatas/:id', controllers.deleteData)

router.get('/getUser/:id', controllers.getUserById)
router.get('/getProject/:id', controllers.getProjectsById)
router.get('/getData/:id', controllers.getDatasById)
module.exports = router