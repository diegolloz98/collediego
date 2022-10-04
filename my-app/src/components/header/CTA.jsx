import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' >Download CV</a>
        <a href="#about" className='btn btn-primary'>About Me</a>
    </div>
  )
}

export default CTA