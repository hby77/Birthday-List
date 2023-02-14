import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <nav className='navBar'>
                <Link to='/main'>Nav Bar</Link>
            </nav>
        </header>
    )
}

export default Header
