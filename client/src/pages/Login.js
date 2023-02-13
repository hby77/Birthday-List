import { useState } from 'react'
import axios from 'axios'


const Home = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3001', email)
        setEmail('')
        await axios.post('http://localhost:3001', password)
        setPassword('')
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
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
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
                <button type="submit">Log In</button>
                <br />
                <button onClick={() => props.onFormSwitch('signup')}>Don't have an account? Signup Here.</button>
            </form>
        </div>
    )
}
export default Home