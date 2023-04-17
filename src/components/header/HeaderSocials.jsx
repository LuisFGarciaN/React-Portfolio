import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

// SOCIAL ICONS AND LINKS

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/lfernandogarcia/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/LuisFGarciaN" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"><FiDribbble /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><IoLogoTwitter/></a>
    </div>
  )
}

export default HeaderSocials