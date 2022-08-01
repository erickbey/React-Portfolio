import React from 'react';
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="/#" className="footer__logo">Erick Bey</a>

      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/erick-bey/' target='_blank' rel="noreferrer" className='socials__icons'><BsLinkedin /></a>
        <a href='https://github.com/erickbey' target='_blank' rel="noreferrer" className='socials__icons'><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Erick Bey. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer