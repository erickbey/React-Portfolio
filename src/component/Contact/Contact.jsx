import React from 'react';
import './Contact.css';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__info-container">
          <article className="contact__info">
            <MdEmail className='contact__info-icon' />
            <h4>Email</h4>
            <h5>erickbey10@gmail.com</h5>
            <a href="mailto:erickbey10@gmail.com" target='_blank' rel="noreferrer">Send A Message</a>
          </article>
        </div>

        {/* <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact