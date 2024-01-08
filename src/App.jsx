import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componets/NavBar'
import Home from './Pages/Home'

const counterProvider=createContext()

import { Route, Routes } from 'react-router-dom';

function App({childern}) {
  const [count,setConut]=useState(0)
  const increment=()=>setConut(count + 1)
  const deceremt=()=>setConut(count - 1)
  return (
    <>
    <counterProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </counterProvider>
    </>
  );
}

export default App;
