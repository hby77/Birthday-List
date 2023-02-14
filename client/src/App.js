import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Main from './pages/Main'
import Project from './pages/Project'
import NewProject from './pages/NewProject'

function App() {
  const [currentState, setCurrentState] = useState('login')

  const toggleState = (stateName) => {
    setCurrentState(stateName)
  }

  return (
    <div className='appContainer'>
      <div className='routeContainer'>
        <Routes>
          <Route path="/" element={currentState === 'login' ? <Login onFormSwitch={toggleState} /> : <Signup onFormSwitch={toggleState}/>} />
          <Route path="/main" element={<Main />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
