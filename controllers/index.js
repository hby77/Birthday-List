const Data = require('../models/data')
const User = require('../models/user')
const Project = require('../models/project')

const certifyUser = async (req, res) => {
    try {
        const currentUser = await User.findOne({email: req.query.result.email, password: req.query.result.password})
        return res.status(201).json(currentUser)
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({ users })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find()
        return res.status(200).json({ projects })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllDatas = async (req, res) => {
    try {
        const datas = await Data.find()
        return res.status(200).json({ datas })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate("projects")
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getDatasById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Data.findById(id)
        if (data) {
            return res.status(200).json({ data });
        }
        return res.status(404).send('Data with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getProjectsById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findById(id).populate("data")
        if (project) {
            return res.status(200).json({ project });
        }
        return res.status(404).send('Project with the specified ID does not exists');
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

const createProject = async (req, res) => {
    try {
        const project = await new Project(req.body)
        await project.save()
        return res.status(201).json({
            project,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createData = async (req, res) => {
    try {
        const data = await new Data(req.body)
        await data.save()
        return res.status(201).json({
            data,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(project)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateData = async (req, res) => {
    try {
        const data = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(data)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("User deleted");
        }
        throw new Error("User not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Project.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Project deleted");
        }
        throw new Error("Project not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Data.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Data deleted");
        }
        throw new Error("Data not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    certifyUser,
    getAllUsers,
    getAllDatas,
    getAllProjects,
    getUserById,
    getDatasById,
    getProjectsById,
    createUser,
    createData,
    createProject,
    updateUser,
    updateData,
    updateProject,
    deleteUser,
    deleteData,
    deleteProject
}