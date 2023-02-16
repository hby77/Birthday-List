import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Home = (props) => {

    const navigate = useNavigate();

    const initialState = {
        email: '',
        password: ''
    }

    const [formStates, setFormStates] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.get(`/api/certify`, {
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

        navigate("/main")
    }



    return (
        <div className='loginbackground'>
            <div className="homeContainer">
                <form className="loginBox" onSubmit={handleSubmit}>
                    <h1 className='loginname'>Welcome Back</h1>
                    <h4 className='signtext'>Sign into your account</h4>
                    <label htmlFor="email"></label>
                    <br />
                    <input
                        className='textboxlogin'
                        placeholder='Email'
                        id="email"
                        type="email"
                        value={formStates.email}
                        onChange={(e) => setFormStates({ ...formStates, [e.target.id]: e.target.value })}
                    />
                    <br />
                    <label htmlFor="password"></label>
                    <br />
                    <input
                        className='textboxlogin'
                        placeholder='Password'
                        id="password"
                        type="password"
                        value={formStates.password}
                        onChange={(e) => setFormStates({ ...formStates, [e.target.id]: e.target.value })}
                    />
                    <br />
                    <button className='loginbutton' type="submit">Log In</button>
                    <br />
                    <button className='loginbutton' onClick={() => props.onFormSwitch('signup')}>Don't have an account? Signup Here.</button>
                </form>
            </div>
        </div>
    )
}
export default Home