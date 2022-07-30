import React from 'react';
import './Header.css';
import CTA from './CTA';
import Myself from '../../assets/profile-pic(no-background).png';
import Socials from './Socials';

function Header() {
  return (
    <header>
        <div className='container header__container'>
            <h5>Hello I am</h5>
            <h1>Erick Bey</h1>
            <h5 className='text-light'>Fullstack Developer</h5>

            <CTA />
            <Socials />

            <div className='myself'>
                <img src={Myself} alt='' />
            </div>

            <a href='#contact' className='scroll__down'>Scroll Down</a>

            
        </div>
    </header>
  )
}

export default Header