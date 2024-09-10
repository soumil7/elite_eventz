import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Package from './Pages/Package/Package'
import Service from './Pages/Service/Service'
import Contact from './Pages/Contact/Contact'
import Registration from './Pages/Registration/Registration'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/package' element={<Package/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/register' element={<Registration/>}/> 
      </Routes> 
    </div>
  )
}

export default App

