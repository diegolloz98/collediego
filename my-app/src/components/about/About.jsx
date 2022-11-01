import React from 'react'
import './about.css'
import ME from '../../assets/images/cc.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {

  function getCurrentURL () {
    var n = window.location.href.lastIndexOf('/');
    var lastUrl = window.location.href.substring(n + 1);
    console.log(lastUrl);
    return lastUrl
  }
  const url = getCurrentURL();
  var isEnglish = url === '';

  return (
    <section id='about'>
      {isEnglish &&
        <>
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </>
      }
      {!isEnglish &&
        <>
          <h5>Conoceme</h5>
          <h2>A cerca de mi</h2>
        </>
      }

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              {isEnglish &&
                <>
                  <h5>Experience</h5>
                  <small>7 Months Working</small>
                </>
              }
              {!isEnglish &&
                <>
                  <h5>Experiencia</h5>
                  <small>7 Meses trabajando</small>
                </>
              }
              
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              {isEnglish &&
                <>
                  <h5>Projects</h5>
                  <small>5 completed</small>
                </>
              }
              {!isEnglish &&
                <>
                  <h5>Proyectos</h5>
                  <small>5 completados</small>
                </>
              }
              
            </article>
          </div>
          {isEnglish &&
                <>
                  <p>
                    I am a passionate software engineer, with tendency to Front-end line,  
                    Knowledgeable in user interface, testing, and debugging processes. 
                    Proficient in some technologies like React, JavaScript and Java. 
                    Always open to learn new things. Adaptability to projects and team
                    collaboration.
                  </p>
                </>
          }
          {!isEnglish &&
                <>
                 <p>
                    Soy un ingeniero de software apasionado, con tendencia a Front-end,
                    Conocedor de la interfaz de usuario, pruebas y procesos de depuración.
                    Competente en algunas tecnologías como React, JavaScript y Java.
                    Siempre abierto a aprender cosas nuevas. Adaptabilidad a proyectos y 
                    colaboración en equipo.
                  </p>
                </>
            }
          
          {isEnglish &&
                <>
                  <a href="#experience" className='btn btn-primary'>My Experience</a>
                </>
              }
              {!isEnglish &&
                <>
                  <a href="#experience" className='btn btn-primary'>Mi experiencia</a>
                </>
              }
          
        </div>
      </div>

      

    </section>
  )
}

export default About