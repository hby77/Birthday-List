import { useState } from 'react'
import axios from 'axios'


const Home = (props) => {
    const initialState = {
        email: '',
        password: ''
    }

    const [formStates, setFormStates] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.get(`http://localhost:3001/api/use`, {
            params: {
                result: formStates
            }
        })
        const currentUser = res.data
        console.log(currentUser)
            setFormStates(initialState)
        if (currentUser) login(currentUser)
    }

    const login = (currentUser) => {
        console.log(currentUser)
        sessionStorage.setItem("userId", currentUser._id)
    }



    return (
        <div className="homeContainer">
            <form className="loginBox" onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <label htmlFor="email">Email</label>
                <br />
                <input
                    placeholder='youremail@gmail.com'
                    id="email"
                    type="email"
                    value={formStates.email}
                    onChange={(e) => setFormStates({ ...formStates, [e.target.id]: e.target.value })}
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                    placeholder='*******'
                    id="password"
                    type="password"
                    value={formStates.password}
                    onChange={(e) => setFormStates({ ...formStates, [e.target.id]: e.target.value })}
                />
                <br />
                <button type="submit">Log In</button>
                <br />
                <button onClick={() => props.onFormSwitch('signup')}>Don't have an account? Signup Here.</button>
            </form>
        </div>
    )
}
export default Home