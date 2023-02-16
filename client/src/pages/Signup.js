import { useState } from 'react'
import axios from 'axios'

const Signup = (props) => {
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
        const res = await axios.post('/api/createUser', formState)

        setFormState(initialState)
    }

    return (
        <div className='loginbackground'>
            <div className="homeContainer">
                <form className="loginBox" onSubmit={handleSubmit}>
                    <h1 className='loginname'>Sign Up</h1>
                    <label htmlFor="email"></label>
                    <br />
                    <br />
                    <input
                        className='textboxlogin'
                        placeholder='Email'
                        id="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="name"></label>
                    <br />
                    <input
                        className='textboxlogin'
                        placeholder='Name'
                        id="name"
                        type="name"
                        value={formState.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="password"></label>
                    <br />
                    <input
                        className='textboxlogin'
                        placeholder='Password'
                        id="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                    <br />
                    <button className='submitbutton' type="submit">Sign Up</button>
                    <br />
                    <label><a href='#' className='loginlink' onClick={() => props.onFormSwitch('login')}>Already have an account? Login Here.</a></label> 
                </form>
            </div>
        </div>
    )
}
export default Signup