import React from 'react'
import loader from './assets/loading-purple-noBG-unscreen.gif'

function Spinner() {
  return (
    <img src={loader} 
    alt="Loading..." 
    
    width = {250}
    className = 'text-center mx-auto' />
  )
}

export default Spinner