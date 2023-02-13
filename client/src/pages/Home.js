import { Link } from 'react-router-dom'
import Signup from './Signup'
// import axios from 'axios'


const Home = () => {
    return (
        <div className="homeContainer">
            <form className="loginBox">
                <h1>Log In</h1>
                <label htmlFor="email">Email</label>
                <br />
                <input
                    id="email"
                    type="email"
                // onChange=
                // value=
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                    id="password"
                    type="password"
                // onChange=
                // value=
                />
                <br />
                <button type="submit">Log In</button>
                <br />
                <Link to={'/signup'}>
                    <button>Register</button>
                </Link>
            </form>
        </div>
    )
}
export default Home