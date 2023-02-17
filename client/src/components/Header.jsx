import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <nav className='navBar'>
                <Link to='/main'>Home</Link>
            </nav>
        </header>
    )
}

export default Header
