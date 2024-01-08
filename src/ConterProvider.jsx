import React, { createContext, useState } from 'react'
const ConterText=createContext()
const ConterProvider = ({childern}) => {
    const [count,setConut]=useState(0)
    const increment=()=>setConut(count + 1)
    const deceremt=()=>setConut(count - 1)
  return (
    <div>
    
    </div>
  )
}

export default ConterProvider
