import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Login from './pages/Login'
import Signup from './pages/Signup'
// import Project from './pages/Project'

function App() {
  const [currentState, setCurrentState] = useState('login')

  const toggleState = (stateName) => {
    setCurrentState(stateName)
  }

  return (
    <div className='appContainer'>
      <Header />
      <div className='routeContainer'>
        {
          currentState === 'login' ? <Login onFormSwitch={toggleState} /> : <Signup onFormSwitch={toggleState}/>
        }

      </div>
    </div>
  );
}

export default App;
