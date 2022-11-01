import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";

const Footer = () => {

  function getCurrentURL () {
    var n = window.location.href.lastIndexOf('/');
    var lastUrl = window.location.href.substring(n + 1);
    console.log(lastUrl);
    return lastUrl
  }
  
  const url = getCurrentURL();
  var isEnglish = url === '';
  
  return (
    <footer>
      <a href="#" className="footer__logo">DIEGO L.</a>
      {isEnglish &&
        <>
          <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portafolio">Portfolio</a></li>
          </ul>
        </>
      }
      {!isEnglish &&
        <>
          <ul className="permalinks">
            <li><a href="#">Inicio</a></li>
            <li><a href="#about">A Cerca De Mi</a></li>
            <li><a href="#experience">Experiencia</a></li>
            <li><a href="#portafolio">Portafolio</a></li>
          </ul>
        </>
        }
        <ul className="permalinks">
        {isEnglish &&
          <>
            <li><Link >English</Link></li>
            <li><Link to="/es">Spanish</Link></li>
          </>
        }
        {!isEnglish &&
          <>
            <li><Link to="/">Ingles</Link></li>
            <li><Link >Español</Link></li>
          </>
        }
        </ul>
        <ul className="permalinks">
          <li></li>
          <li></li>
        </ul>

      
    </footer>
  )
}

export default Footer