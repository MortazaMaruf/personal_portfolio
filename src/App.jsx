import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'

const App = () => {
  return (

    <Router>
      
      <main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </main>
    </Router>
  )
}

export default App
