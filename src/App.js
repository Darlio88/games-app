import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import GameDetails from './pages/GameDetails/GameDetails'
import Bottom from './components/Bottom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game-details/:id' element={<GameDetails />} />
        <Route path='/about' element={<About />} />
        </Routes>
        <Bottom />
    </BrowserRouter>
  )
}

export default App