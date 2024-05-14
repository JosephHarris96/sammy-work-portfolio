import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'; 
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yccyb9q', 'template_9ju0nhb', form.current, {
        publicKey: 'zcEbY03ShcVRw2ZoS',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("message sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-form">
      <div className="contact-form-inputs">
        <h1><span>// </span>contact</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input type="name" placeholder="Full Name" name="user_name" required />
          <input type="email" placeholder="Email Address" name="user_email" required/>
          <input type="text"  placeholder="Your Enquiry" name="message" required/>
          <div className="contact-form-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
