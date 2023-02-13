import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Main from './pages/Main'
// import Project from './pages/Project'

function App() {
  return (
    <div className='appContainer'>
      <Header />
      <div className='routeContainer'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
