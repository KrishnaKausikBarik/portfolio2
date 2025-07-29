import React from 'react'
import './Contact.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import mail_icon from '../../Assets/mail_icon.svg'
import location_icon from '../../Assets/location_icon.svg'
import call_icon from '../../Assets/call_icon.svg'
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
const Contact = () => {


const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3af48546-fc08-4fc4-af38-9758bba25be2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };









  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt='Contact Pattern' />
        </div>
        <div className="contact-section">


            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>Reach out today—let’s start something impactful together.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                  <img src={mail_icon} alt='Mail Icon' />
                  <p>krishnakaushik642@gmail.com</p>
                    </div>
                    <div className="contact-detail">
<img src={call_icon} alt='Call Icon' />
                  <p>+91-7608913568</p>
                    </div>
                    <div className="contact-detail">
<img src={location_icon} alt='Location Icon' />
                  <p>Gothapatana, Malipada, Bhubaneswar, Odisha, India</p>
                    </div>
                </div>
            </div>


<form onSubmit={onSubmit} className="contact-right">
   <label htmlFor="name">Your Name</label>
   <input type="text" id="name" name="name" placeholder="Enter your name" required />


   <label htmlFor="email">Your Email</label>
   <input type="email" id="email" name="email" placeholder="Enter your email" required />

   <label htmlFor="message">Your Message</label>
   <textarea id="message" name="message" rows='8' placeholder="Enter your message here..." required />

   <button type='submit' className="contact-submit">
    Submit Now
   </button>
</form>



        </div>
    </div>
  )
}

export default Contact
