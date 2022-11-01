import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/images/calendar.jpg'
import IMG2 from '../../assets/images/GymApp.png'
import IMG3 from '../../assets/images/3d.png'
import IMG4 from '../../assets/images/money.png'

const Portafolio = () => {

  function getCurrentURL () {
    var n = window.location.href.lastIndexOf('/');
    var lastUrl = window.location.href.substring(n + 1);
    console.log(lastUrl);
    return lastUrl
  }

  const url = getCurrentURL();
  var isEnglish = url === '';

  return (
    <section id='portafolio'>
      {isEnglish &&
        <>
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
        </>
      }
      {!isEnglish &&
        <>
          <h5>Mi Trabajo Reciente</h5>
          <h2>Portafolio</h2>
        </>
      }
      <div class='container portfolio__container'>
        <article className='portfolio__item'>
          <div class='portfolio__item-image'>
            <img src={IMG1} alt="proyect" />
          </div>
          {isEnglish &&
            <>
              <h3>React Calendar (No libraries)</h3>
            </>
          }
          {!isEnglish &&
            <>
              <h3>Calendario en React (Sin librerias)</h3>
            </>
          }
          
          <div className="portfolio__item-cta">
            <a href="https://github.com/diegolloz98/calendar" className='btn' target='_blank' >Github</a>
            <a href="https://collecalendar.herokuapp.com/" className='btn btn-primary' target='_blank' >Link</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div class='portfolio__item-image'>
            <img src={IMG2} alt="proyect" />
          </div>
          {isEnglish &&
            <>
              <h3>Mobile Gym App (Dart)</h3>
            </>
          }
          {!isEnglish &&
            <>
              <h3>Aplicacion Móvil Para Gimnasio en Dart</h3>
            </>
          }
          
          <div className="portfolio__item-cta">
            <a href="https://github.com/diegolloz98/GymAppFlutter" className='btn' target='_blank' >Github</a>
            <a href="https://www.youtube.com/watch?v=LZxomSE_RKo&ab_channel=DiegoLepe" className='btn btn-primary' target='_blank' >Link</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div class='portfolio__item-image'>
            <img src={IMG3} alt="proyect" />
          </div>
          {isEnglish &&
            <>
              <h3>Cinema Web App (Angular)</h3>
            </>
          }
          {!isEnglish &&
            <>
              <h3>Aplicación Web de Cine en Angular</h3>
            </>
          }
          
          <div className="portfolio__item-cta">
            <a href="https://github.com/diegolloz98/cinefan" className='btn' target='_blank' >Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div class='portfolio__item-image'>
            <img src={IMG4} alt="proyect" />
          </div>
          {isEnglish &&
            <>
              <h3>Money Management App (HTML)</h3>
            </>
          }
          {!isEnglish &&
            <>
              <h3> Aplicación Web para el manejo de tu dinero en HTML y JavaScript</h3>
            </>
          }
          <div className="portfolio__item-cta">
            <a href="https://github.com/diegolloz98/Ctrl-Money" className='btn' target='_blank' >Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portafolio