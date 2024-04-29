import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-form">
      <div className="contact-form-inputs">
        <h1><span>// </span>contact</h1>
        <input type="name" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required/>
        <input type="text"  placeholder="Your Enquiry" required/>
        <div className="contact-form-button">
            <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
