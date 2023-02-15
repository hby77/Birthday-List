import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import axios from 'axios'

const Main = () => {
    const [projects, setProjects] = useState([])
    const [receivedData, setReceivedData] = useState([])
    const navigate = useNavigate()

    const getUserProjects = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/api/getUser/${sessionStorage.getItem("userId")}`)
            setProjects(res.data.user.projects)
            console.log("USER", res.data.user)
        } catch (e) {
            console.log(e)
        }
    }

    const createNewProject = async () => {
        try {
            const projectData = await axios.post('http://localhost:3001/api/createProject', {
                title: 'Create a new project'
            })
            setReceivedData([...receivedData, projectData.data.project])
            await axios.put(`http://localhost:3001/api/updateUsers/${sessionStorage.getItem("userId")}`,
                {
                    projects: [...receivedData, projectData.data.project],
                }
            )
            getUserProjects()
        } catch (e) {
        }
    }
    
    useEffect(() => {
        getUserProjects()
    }, [])

    const handleEdit = (id) => {
        navigate(`/newproject/${id}`)
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/api/deleteProjects/${id}`)
        getUserProjects()
    }



    return projects && (
        <div>
            <Header />
            <button onClick={createNewProject} className='createproject'>Create Project</button>
            <div>
                {projects.map((project) => (
                    <div key={project._id}>
                        <h2>{project.title}</h2>
                        <button onClick={() => handleEdit(project._id)}>Edit</button>
                        <button onClick={() => handleDelete(project._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Main