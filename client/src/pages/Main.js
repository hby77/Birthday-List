import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import axios from 'axios'

const Main = () => {
    const [projects, setProjects] = useState([])
    const navigate = useNavigate()


    const getUserProjects = async () => {
        try {
            const res = await axios.get(`/api/getUser/${sessionStorage.getItem("userId")}`)
            setProjects(res.data.user.projects)
        } catch (e) {
            console.log(e)
        }
    }

    const createNewProject = async () => {
        try {
            const projectData = await axios.post('/api/createProject', {
                title: 'New Project'
            })
            await axios.put(`/api/updateUsers/${sessionStorage.getItem("userId")}`,
                {
                    projects: [...projects, projectData.data.project],
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
        await axios.delete(`/api/deleteProjects/${id}`)
        getUserProjects()
    }



    return projects && (
        <div className='backgroundpage'>
            <div className='navandbuttoncontainer'>
                <div className='navbarmain'>
                    <Header />
                </div>
                <div className='createprojectcontainer'>
                    <button onClick={createNewProject} className='createproject'>Create Project</button>
                </div>
            </div>
            <div className='centerdiv'>
                <div className='allprojects'>
                    {projects.map((project) => (
                        <div key={project._id}>
                            <div className='projectbuttonboxcontainer'>
                                <div className='projecttitles'>
                                    <h2>{project.title}</h2>
                                </div>
                                <div className='editdeletebuttonbox'>
                                    <button className='editbuttonmain' onClick={() => handleEdit(project._id)}>Edit</button>
                                    <button className='deletebuttonmain' onClick={() => handleDelete(project._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Main