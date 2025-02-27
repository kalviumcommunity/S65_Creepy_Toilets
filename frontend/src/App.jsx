import React from 'react'
import Landing from './components/Landing/Landing'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Toilet from './components/Toilets/Toilet'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Toilet />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App