import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componets/NavBar'
import Home from './Pages/Home'

import {Route , Routes} from 'react-router-dom';
function App() {


  return (
    <>
     <NavBar/>
     <Routes>
      <Route path='/' elmenet={<Home/>}></Route>
     </Routes>
    </>
  )
}

export default App
