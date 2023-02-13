import { useState } from 'react'

export const Signup = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
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
            <button type="submit">Log In</button>
            <br />
            <button>Signup</button>
        </form>
    </div>
    )
}
export default Signup