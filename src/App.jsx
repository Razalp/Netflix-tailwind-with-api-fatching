import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/NavBar/Navbar'
import Banner from './componets/Banner/Banner'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>

    
      <Banner/>
    </>
  )
}

export default App
