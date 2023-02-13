import { useState } from 'react'
import axios from 'axios'

export const Signup = (props) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3001', email)
        setEmail('')
        await axios.post('http://localhost:3001', name)
        setName('')
        await axios.post('http://localhost:3001', password)
        setPassword('')
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
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="name">Full Name</label>
            <br />
            <input
                placeholder='Full Name'
                id="name"
                type="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
                placeholder='*******'
                id="password"
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
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