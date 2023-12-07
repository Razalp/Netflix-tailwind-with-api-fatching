import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div className='Banner'>
      <div className='Content'>
        <h1 className='title'>Movie Name</h1>
        <div className='Banner-button'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='descrption'>MY DISCRPTIONS</h1>
      </div>
    </div>
  )
}

export default Banner
