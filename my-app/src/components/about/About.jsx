import React from 'react'
import './about.css'
import ME from '../../assets/images/cc.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

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
              <h5>Experience</h5>
              <small>7 Months Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5 completed</small>
            </article>
          </div>

          <p>
          I am a passionate software engineer, with tendency to Front-end line,  Knowledgeable in user interface, testing, and debugging processes. Proficient in some technologies like React, JavaScript and Java. Always open to learn new things. Adaptability to projects and team collaboration.
          </p>

          <a href="#experience" className='btn btn-primary'>My Experience</a>
        </div>
      </div>

      

    </section>
  )
}

export default About