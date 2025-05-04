import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/home'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes >
        <Route path='/'element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
