import React from 'react';
import './Nav.css';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import { AiFillMessage } from 'react-icons/ai';
import { useState } from 'react'

function Nav() {
  const [active, setActive] = useState('#')

  return (
    <nav>
        <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><FaHome /></a>
        <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><FaUser /></a>
        <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><FaBook /></a>
        <a href="#projects" onClick={() => setActive('#projects')} className={active === '#projects' ? 'active' : ''}><HiCode /></a>
        <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><AiFillMessage /></a>
    </nav>
  )
}

export default Nav