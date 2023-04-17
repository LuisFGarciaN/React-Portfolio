import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Who Am I</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Traditional Industries</h5>
              <small>More than five years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Industries</h5>
              <small>Automotive, Manufacturing and IT</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>See my works in the Projects Section</small>
            </article>
          </div>
          <p>
          I am currently pursuing a career ull Stack Development at Georgia Institute of Technology College of Engineering Coding Boot Camp. In addition, I have extensive experience in the traditional industry as a product and packaging designer, as well as in process quality assurance.
          </p>
          <p>Web Development always inspired me and I am very passionate about developing applications with a focus on mobile-first design and development. My strengths lie in creativity, teamwork, and building projects from ideation to execution.</p>

          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About