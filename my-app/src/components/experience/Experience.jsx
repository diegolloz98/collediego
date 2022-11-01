import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {

  function getCurrentURL () {
    var n = window.location.href.lastIndexOf('/');
    var lastUrl = window.location.href.substring(n + 1);
    console.log(lastUrl);
    return lastUrl
  }
  
  const url = getCurrentURL();
  var isEnglish = url === '';

  return (
    <section id='experience'>
      {isEnglish &&
        <>
          <h5>What Skills I Have</h5>
          <h2>My Experience</h2>
        </>
      }
      {!isEnglish &&
        <>
          <h5>Las Habilidades Que Tengo</h5>
          <h2>Mi Experiencia</h2>
        </>
      }

      <div className='container experience__container'>
        <div className='experience__frontend'>
          {isEnglish &&
            <>
              <h3>Frontend Development</h3>
            </>
          }
          {!isEnglish &&
            <>
              <h3>Desarrollo Frontend</h3>
            </>
          }
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                {isEnglish &&
                  <>
                    <small className='text-light'>Experienced</small>
                  </>
                }
                {!isEnglish &&
                  <>
                    <small className='text-light'>Con Experiencia</small>
                  </>
                }
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                {isEnglish &&
                  <>
                    <small className='text-light'>Experienced</small>
                  </>
                }
                {!isEnglish &&
                  <>
                    <small className='text-light'>Con Experiencia</small>
                  </>
                }
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                {isEnglish &&
                  <>
                    <small className='text-light'>Experienced</small>
                  </>
                }
                {!isEnglish &&
                  <>
                    <small className='text-light'>Con Experiencia</small>
                  </>
                }
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Angular</h4>
                {isEnglish &&
                  <>
                    <small className='text-light'>Skillful</small>
                  </>
                }
                {!isEnglish &&
                  <>
                    <small className='text-light'>Hábil</small>
                  </>
                }
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                {isEnglish &&
                  <>
                    <small className='text-light'>Experienced</small>
                  </>
                }
                {!isEnglish &&
                  <>
                    <small className='text-light'>Con Experiencia</small>
                  </>
                }
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Dart</h4>
                {isEnglish &&
                  <>
                    <small className='text-light'>Skillful</small>
                  </>
                }
                {!isEnglish &&
                  <>
                    <small className='text-light'>Hábil</small>
                  </>
                }
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
        {isEnglish &&
            <>
              <h3>Backend Development</h3>
            </>
          }
          {!isEnglish &&
            <>
              <h3>Desarrollo Backend</h3>
            </>
          }
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                {isEnglish &&
                  <>
                    <small className='text-light'>Skillful</small>
                  </>
                }
                {!isEnglish &&
                  <>
                    <small className='text-light'>Hábil</small>
                  </>
                }
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience