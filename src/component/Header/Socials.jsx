import React from 'react';
import './Socials.css';

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs'

function Socials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/erick-bey/' target='_blank' rel="noreferrer" className='socials__icons'><BsLinkedin /></a>
        <a href='https://github.com/erickbey' target='_blank' rel="noreferrer" className='socials__icons'><BsGithub /></a>
    </div>
  )
}

export default Socials