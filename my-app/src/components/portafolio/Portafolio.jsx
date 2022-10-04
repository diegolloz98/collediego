import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/images/calendar.jpg'
import IMG2 from '../../assets/images/GymApp.png'
import IMG3 from '../../assets/images/3d.png'
import IMG4 from '../../assets/images/portfolio4.jpg'

const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div class='container portfolio__container'>
        <article className='portfolio__item'>
          <div class='portfolio__item-image'>
            <img src={IMG1} alt="proyect" />
          </div>
          <h3>React Calendar (No libraries)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/diegolloz98/calendar" className='btn' target='_blank' >Github</a>
            <a href="https://collecalendar.herokuapp.com/" className='btn btn-primary' target='_blank' >Link</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div class='portfolio__item-image'>
            <img src={IMG2} alt="proyect" />
          </div>
          <h3>GymApp (Flutter)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/diegolloz98/GymAppFlutter" className='btn' target='_blank' >Github</a>
            <a href="https://www.youtube.com/watch?v=LZxomSE_RKo&ab_channel=DiegoLepe" className='btn btn-primary' target='_blank' >Link</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div class='portfolio__item-image'>
            <img src={IMG3} alt="proyect" />
          </div>
          <h3>Cinema Web App (Angular)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/diegolloz98/cinefan" className='btn' target='_blank' >Github</a>
          </div>
        </article>
        
        
        

      </div>
    </section>
  )
}

export default Portafolio