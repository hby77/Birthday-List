import Header from '../components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Main = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        const getUserProjects = async () => {
            const res = await axios.get(`http://localhost:3001/api/getUser/${sessionStorage.getItem("userId")}`)
            setProjects(res.data.user.projects)
            console.log(res.data)
        }
        getUserProjects()
    }, [])


    return projects && (
        <div>
            <Header />
            <Link to='/newproject'>
                <button className='createproject'>Create Project</button>
            </Link>
            <div>
                {projects.map((project) => (
                    <h2>{project.relationship}</h2>
                ))}
            </div>
        </div>
    )
}
export default Main