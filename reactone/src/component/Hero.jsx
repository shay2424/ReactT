import React from 'react'
import { useState } from 'react'

const Hero = () => {
    const [counter,updatecounter] = useState(0)
  return (
    <div>
        <button onClick={() => updatecounter(counter+1)}> + </button>
        <h2>{counter}</h2>
        <button onClick={() => updatecounter(counter-1)}> - </button>
    </div>
  )
}

export default Hero