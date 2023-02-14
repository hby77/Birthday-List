import Header from '../components/Header'
import { useState } from 'react'


const NewProject = () => {

    const [newProject, setNewProject] = useState({
        relationship: '',
        person: '',
        currentLocation: '',
        association: '',
        birthday: '',
        companyAndCareer: '',
        hobbiesAndExpertise: '',
        notes: ''
    })





    console.log(newProject)
    return (
        <div>
            <h1>New Project</h1>
            <Header />
            <form>
                <input
                    name='relationship'
                    type='text'
                    value={newProject.relationship}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <input
                    name='person'
                    type='text'
                    value={newProject.person}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <input
                    name='currentLocation'
                    type='text'
                    value={newProject.currentLocation}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <input
                    name='association'
                    type='text'
                    value={newProject.association}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <input
                    name='birthday'
                    type='text'
                    value={newProject.birthday}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <input
                    name='companyAndCareer'
                    type='text'
                    value={newProject.companyAndCareer}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <input
                    name='hobbiesAndExpertise'
                    type='text'
                    value={newProject.hobbiesAndExpertise}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
                <input
                    name='notes'
                    type='text'
                    value={newProject.notes}
                    onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                />
            </form>
        </div>
    )
}
export default NewProject