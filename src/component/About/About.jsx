import React from 'react';
import './About.css';
import Me from '../../assets/standing-on-mountain(1).jpg';


function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt='standing on a mountain' />
          </div>
        </div>

        <div className='about__content'>
          <p>
            Hello! My name is Erick Bey and I am a fullstack web developer with a passion learn new things and grow my skills. I enjoy getting out in nature, playing disc golf, spending time with my family and dogs, and creating new things.
            I am ready to join a team to contiribute my skills and grow as we make progress towards our goals.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About