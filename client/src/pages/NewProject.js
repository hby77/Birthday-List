import Header from '../components/Header'
import { useState } from 'react'
import axios from 'axios'


const NewProject = () => {
    const initialState = {
        relationship: '',
        person: '',
        currentLocation: '',
        association: '',
        birthday: '',
        companyAndCareer: '',
        hobbiesAndExpertise: '',
        notes: ''
    }

    const [newProject, setNewProject] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:3001/api/createProject', newProject)
        console.log(res)
        setNewProject(initialState)
    }






    return (
        <div>
            <h1>New Project</h1>
            <Header />
            <form onSubmit={handleSubmit}>
                <input
                    name='relationship'
                    type='text'
                    placeholder='relationship'
                    value={newProject.relationship}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <input
                    name='person'
                    type='text'
                    placeholder='person'
                    value={newProject.person}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <input
                    name='currentLocation'
                    type='text'
                    placeholder='currentLocation'
                    value={newProject.currentLocation}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <input
                    name='association'
                    type='text'
                    placeholder='association'
                    value={newProject.association}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <input
                    name='birthday'
                    type='text'
                    placeholder='birthday'
                    value={newProject.birthday}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <input
                    name='companyAndCareer'
                    type='text'
                    placeholder='companyAndCareer'
                    value={newProject.companyAndCareer}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <input
                    name='hobbiesAndExpertise'
                    type='text'
                    placeholder='hobbiesAndExpertise'
                    value={newProject.hobbiesAndExpertise}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <input
                    name='notes'
                    type='text'
                    placeholder='notes'
                    value={newProject.notes}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <button type="submit">+ Add</button>
            </form>
        </div>
    )
}
export default NewProject