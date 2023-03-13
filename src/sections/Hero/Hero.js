import React from 'react'
import { PrimaryButton } from '../../combonents/index'

import './Hero.css'
const Hero = () => {
  return (
    <div className='hero-main'>
      <div className='hero-text'>
       <div className='hero-subtitle'>Welcome to cyborg</div>
       <div className='hero-title'><em>Browse</em> Our Popular Games Here</div> 
       <PrimaryButton>Browse Now</PrimaryButton>
      </div>
    </div>

  )
}

export default Hero