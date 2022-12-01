import React from 'react'
import quad from '../assets/quad.jpeg';
import '../styles/contact.css'
function Contact() {
  return (
    <div className="contact">
        <div className="leftSide" style={{  backgroundImage: `url(${quad})`}}></div>
        <div className="rightSide">
            <h1>Contact Us and Give Us Suggestions to Improve the App!</h1>

            <form id="contact-form" method="POST">
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder="Enter your name" type="text" />
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter your email" type="email" />
                <label htmlFor="message">Message</label>
                <textarea rows="6" placeholder="Enter your message" name="message" required> </textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact