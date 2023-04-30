import React from 'react'
import './Weathercard.css'

export default function WeatherCard() {
  return (
    <div className='card'>
      <div>
        <p className='city'>Khowai <span>IN</span></p>
        <h1 className='temp'>23&deg;</h1>
        <img src="svg\icons8-sun.svg" alt="" />
        <p>Clear Sky</p>
      </div>
    </div>
  )
}
