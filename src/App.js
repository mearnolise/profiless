import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Grade from './pages/Grade'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/grade" element={<Grade />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
