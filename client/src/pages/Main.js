import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import axios from 'axios'

const Main = () => {
    const [projects, setProjects] = useState([])
    const navigate = useNavigate()

    const getUserProjects = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/api/getUser/${sessionStorage.getItem("userId")}`)
            setProjects(res.data.user.projects)
        } catch (e) {
            console.log(e)
        }
    }

    const createNewProject = async () => {
        try {
            const res = await axios.post('http://localhost:3001/api/createProject', {
                title: 'Create a new project'
            })
            navigate(`/newproject/${res.data.project._id}`)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getUserProjects()
    }, [])

    return projects && (
        <div>
            <Header />
                <button onClick={createNewProject} className='createproject'>Create Project</button>
            <div>
                {projects.map((project) => (
                    <h2>{project.relationship}</h2>
                ))}
            </div>
        </div>
    )
}
export default Main