import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import { FaGithub } from 'react-icons/fa'
import { GrDeploy } from 'react-icons/gr'

// SIX OF MY PROJECTS.....

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather Dashboard',
    desc: 'A weather dashboard so that the user would be able to see the weather forecast for multiple cities. Technologies: HTML, CSS Bootstrap, jQuery, Moment.js and Open Weather API',
    github: 'https://github.com/LuisFGarciaN/Weather-Dashboard.git',
    demo: 'https://github.com/LuisFGarciaN'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Refactor-Code',
    desc: 'Optimize the accessibilty, and readability through semantic HTML and well-structured CSS.',
    github: 'https://github.com/LuisFGarciaN/Refactor-Code',
    demo: 'https://github.com/LuisFGarciaN'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Work-Day-Scheduler',
    desc: 'Calendar application that allow the user to save events.',
    github: 'https://github.com/LuisFGarciaN/Work-Day-Scheduler',
    demo: 'https://github.com/LuisFGarciaN'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Password-Randomizer',
    desc: 'Unique Password Generator',
    github: 'https://github.com/stellalph/MERN-Ski-Resort.git',
    demo: 'https://github.com/LuisFGarciaN'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Note Taker',
    desc: 'A note taker application used to write and save notes allowing the users to better organize their thoughts. Technologies: Node.js and its dependencies, Insomnia and Express.js',
    github: 'https://github.com/LuisFGarciaN/Note-Taker',
    demo: 'https://github.com/LuisFGarciaN'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Team-Profile-Generator',
    desc: 'HTML webpage that displays summaries for each person.',
    github: 'https://github.com/LuisFGarciaN/Team-Profile-Generator',
    demo: 'https://github.com/LuisFGarciaN'
  },


]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, desc, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{desc}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer" ><FaGithub />Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer"><GrDeploy />Deployed Link</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
export default Portfolio