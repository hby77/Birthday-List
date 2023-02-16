import Header from '../components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const NewProject = () => {
    const { id } = useParams()
    const dataState = {
        relationship: '',
        person: '',
        currentLocation: '',
        association: '',
        birthday: '',
        companyAndCareer: '',
        hobbiesAndExpertise: '',
        notes: ''
    }

    const projectState = {
        title: ''
    }
    const [data, setData] = useState([])
    const [project, setProjects] = useState({})
    const [formState, setFormState] = useState(dataState)
    const [titleState, setTitleState] = useState(projectState)




    const getData = async () => {
        try {
            const res = await axios.get(`/api/getProject/${id}`)
            setProjects(res.data.project)
            setData(res.data.project.data)
        } catch (e) {
            console.log(e)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (
            formState.relationship !== '' &&
            formState.person !== '' &&
            formState.currentLocation !== '' &&
            formState.association !== '' &&
            formState.birthday !== '' &&
            formState.companyAndCareer !== '' &&
            formState.hobbiesAndExpertise !== '' &&
            formState.notes !== '' && 
            titleState.title !== ''
        ) {
            const postData = await axios.post("/api/createData", formState)
            await axios.put(`/api/updateProjects/${id}`, {
                title: titleState.title,
                data: [...data, postData.data.data],
            })
            getData()
            setFormState(dataState)
        }
    }


const handleDelete = async(id) => {
    await axios.delete(`/api/deleteDatas/${id}`)
    getData()
}



    useEffect(() => {
        getData()
    }, [])

console.log(project)

    return data && (
        <div>
            <div>
                <h1>{project.title}</h1>
                <Header />
                <form onSubmit={handleSubmit}>
                    <input
                        name='title'
                        type='text'
                        placeholder='project title'
                        value={titleState.relationship}
                        onChange={(e) => setTitleState({ ...titleState, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='relationship'
                        type='text'
                        placeholder='relationship'
                        value={formState.relationship}
                        onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='person'
                        type='text'
                        placeholder='person'
                        value={formState.person}
                        onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='currentLocation'
                        type='text'
                        placeholder='currentLocation'
                        value={formState.currentLocation}
                        onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='association'
                        type='text'
                        placeholder='association'
                        value={formState.association}
                        onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='birthday'
                        type='text'
                        placeholder='birthday'
                        value={formState.birthday}
                        onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='companyAndCareer'
                        type='text'
                        placeholder='companyAndCareer'
                        value={formState.companyAndCareer}
                        onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='hobbiesAndExpertise'
                        type='text'
                        placeholder='hobbiesAndExpertise'
                        value={formState.hobbiesAndExpertise}
                        onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='notes'
                        type='text'
                        placeholder='notes'
                        value={formState.notes}
                        onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}
                    />
                    <button type="submit">+ Add</button>
                </form>
            </div>
            <div>
                {data.map((item) => (
                    <div key={item._id} className='rowdata'>
                        <p>{item.relationship}</p>
                        <p>{item.person}</p>
                        <p>{item.currentLocation}</p>
                        <p>{item.association}</p>
                        <p>{item.birthday}</p>
                        <p>{item.companyAndCareer}</p>
                        <p>{item.hobbiesAndExpertise}</p>
                        <p>{item.notes}</p>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default NewProject



