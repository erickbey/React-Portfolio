import React from 'react';
import './Projects.css';
import Natours from '../../assets/natours-cover-image.jpg';
import DiscGolf from '../../assets/disc-golf-cover-image.jpg';
import DogTinder from '../../assets/dog-tinder-cover-image.jpg';

function Projects() {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={DiscGolf} alt='disc golf basket' />
          </div>
          <h3>Disc Golf E-Commerce Site</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/erickbey/dg-site" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://erick-dg.herokuapp.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Natours} alt='disc golf basket' />
          </div>
          <h3>Natours Tour Booking Site</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/erickbey/natours" className='btn'>Github</a>
            <a href="https://erick-natours.herokuapp.com/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={DogTinder} alt='disc golf basket' />
          </div>
          <h3>Dog Friend Tinder (Coming Soon!)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/erickbey/dog-tinder" className='btn'>Github</a>
            <a href="https://erick-natours.herokuapp.com/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects