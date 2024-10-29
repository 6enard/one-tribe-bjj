import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Programs from './components/Programs/Programs'
import Navbar from './components/Navbar/Navbar'
import Instructors from './components/Instructors/Instructors'


const App = () => {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/programs' element={<Programs />}/>
        <Route path='/instructors' element={<Instructors />}/>
      </Routes>
    </Router>
  )
}

export default App
