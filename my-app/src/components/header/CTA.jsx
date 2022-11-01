import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {

  function getCurrentURL () {
    var n = window.location.href.lastIndexOf('/');
    var lastUrl = window.location.href.substring(n + 1);
    console.log(lastUrl);
    return lastUrl
  }
  const url = getCurrentURL();
  var isEnglish = url === '';

  return (
    <div className='cta'>
      {isEnglish &&
        <>
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#about" className='btn btn-primary'>About Me</a>
        </>
      }
      {!isEnglish &&
        <>
          <a href={CV} download className='btn'>Descargar CV</a>
          <a href="#about" className='btn btn-primary'>A cerca de mi</a>
        </>
      }
        
    </div>
  )
}

export default CTA