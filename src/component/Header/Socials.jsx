import React from 'react';

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs'

function Socials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/erick-bey/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/erickbey' target='_blank' rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default Socials