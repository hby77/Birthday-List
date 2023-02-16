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
        title: '',
        data: []
    }
    const [receivedData, setReceivedData] = useState([])
    const [data, setData] = useState([])

    const [newData, setNewData] = useState(dataState)
    const [newProject, setNewProject] = useState(projectState)




    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/api/getProject/${id}`)
            setData(res.data.project.data)
        } catch (e) {
            console.log(e)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (
            newData.relationship !== '' &&
            newData.person !== '' &&
            newData.currentLocation !== '' &&
            newData.association !== '' &&
            newData.birthday !== '' &&
            newData.companyAndCareer !== '' &&
            newData.hobbiesAndExpertise !== '' &&
            newData.notes !== ''
        ) {
            const postData = await axios.post("http://localhost:3001/api/createData", newData)
            await axios.put(`http://localhost:3001/api/updateProjects/${id}`, {
                data: [...data, postData.data.data],
            })
            getData()
            setNewData(dataState)
        }
    }


const handleDelete = async(id) => {
    await axios.delete(`http://localhost:3001/api/deleteDatas/${id}`)
    getData()
}



    useEffect(() => {
        getData()
    }, [receivedData])



    return data && (
        <div>
            <div>
                <h1>Ayooo</h1>
                <Header />
                <form onSubmit={handleSubmit}>
                    <input
                        name='title'
                        type='text'
                        placeholder='project title'
                        value={newProject.relationship}
                        onChange={(e) => setNewProject({ ...newProject, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='relationship'
                        type='text'
                        placeholder='relationship'
                        value={newData.relationship}
                        onChange={(e) => setNewData({ ...newData, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='person'
                        type='text'
                        placeholder='person'
                        value={newData.person}
                        onChange={(e) => setNewData({ ...newData, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='currentLocation'
                        type='text'
                        placeholder='currentLocation'
                        value={newData.currentLocation}
                        onChange={(e) => setNewData({ ...newData, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='association'
                        type='text'
                        placeholder='association'
                        value={newData.association}
                        onChange={(e) => setNewData({ ...newData, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='birthday'
                        type='text'
                        placeholder='birthday'
                        value={newData.birthday}
                        onChange={(e) => setNewData({ ...newData, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='companyAndCareer'
                        type='text'
                        placeholder='companyAndCareer'
                        value={newData.companyAndCareer}
                        onChange={(e) => setNewData({ ...newData, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='hobbiesAndExpertise'
                        type='text'
                        placeholder='hobbiesAndExpertise'
                        value={newData.hobbiesAndExpertise}
                        onChange={(e) => setNewData({ ...newData, [e.target.name]: e.target.value })}
                    />
                    <input
                        name='notes'
                        type='text'
                        placeholder='notes'
                        value={newData.notes}
                        onChange={(e) => setNewData({ ...newData, [e.target.name]: e.target.value })}
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



