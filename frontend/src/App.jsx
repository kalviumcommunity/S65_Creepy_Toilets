import React from 'react'
import Landing from './components/Landing/Landing'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Toilet from './components/Toilets/Toilet'
import CreateToilet from './CreateToilet/CreateToilet'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Toilet />} />
      <Route path='/create' element={<CreateToilet />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App