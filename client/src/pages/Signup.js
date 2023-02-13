import { useState } from 'react'
import axios from 'axios'

export const Signup = (props) => {
    const initialState = {
        email: '',
        name: '',
        password: ''
    }
    const [formState, setFormState] = useState(initialState)

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3001/api/createUser', formState)
        setFormState(initialState)
    }

    return (
        <div className="homeContainer">
            <form className="loginBox" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <label htmlFor="email">Email</label>
                <br />
                <input
                    placeholder='youremail@gmail.com'
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="name">Full Name</label>
                <br />
                <input
                    placeholder='Full Name'
                    id="name"
                    type="name"
                    value={formState.name}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                    placeholder='*******'
                    id="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Sign Up</button>
                <br />
                <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login Here.</button>
            </form>
        </div>
    )
}
export default Signup