import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes >
        <Route path='/Parinsoft_web/'element={<Home/>}></Route>
        <Route path='/About'element={<About/>}></Route>
        <Route path='/Services'element={<Services/>}></Route>
        <Route path='/Contact'element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
