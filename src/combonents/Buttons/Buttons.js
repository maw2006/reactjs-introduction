import React from 'react'
import './Buttons.css'

const PrimaryButton = (props) => {
    return (
      <div className='button primary-btn'>
        <a href='/#'>{props.children}</a>
      </div>
    )
  }

  const SecandryButton = (props) => {
    return (
      <div className='button Secandry-btn'>
        <a href='/#'>{props.children}</a>  
      </div>
    )
  } 

export default PrimaryButton
export {SecandryButton}