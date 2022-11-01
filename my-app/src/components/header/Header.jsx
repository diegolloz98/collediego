import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/mee.png'
import HeaderSocial from './HeaderSocials'


const Header = () => {

  function getCurrentURL () {
    var n = window.location.href.lastIndexOf('/');
    var lastUrl = window.location.href.substring(n + 1);
    console.log(lastUrl);
    return lastUrl
  }
  const url = getCurrentURL();
  var isEnglish = url === '';

  return (
    <header>
      <div className="container header___container">
      {isEnglish &&
        <><h5>Hello I'm</h5><h1>Diego L</h1></>
      }
      {!isEnglish &&
        <><h5>Hola, soy</h5><h1>Diego L</h1></>
      }
        {isEnglish &&
        <h5 className="text-light">Software Developer</h5>
        }
        {!isEnglish &&
        <h5 className="text-light">Desarrollador de Software</h5>
        }
        <CTA/>
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        {isEnglish &&
          <>
            <a href="#portafolio" className="scroll__down">Scroll Down</a>
          </>
      }
      {!isEnglish &&
        <>
          <a href="#portafolio" className="scroll__down">Deslizar hacia abajo</a>
        </>
      }
        
      </div>
    </header>
  )
}

export default Header