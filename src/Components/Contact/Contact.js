import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pwzroe4', 'template_kes5qae', form.current, 'Zf1wwkxU2EdTLrkSq')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        toast.success('Email sent, Thanks for connecting'); // Display a success toast
      })
      .catch((error) => {
        console.error(error.text);
        toast.error('Failed to send email. Please try again.'); // Display an error toast
      });
  };

  return (
    <section className="contact">
      <div id="contactMe">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name" />
          <input type="email" className="email" placeholder="Your Email" name="your_email" />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          

        </form>
      </div>
    </section>
  );
};

export default Contact;
