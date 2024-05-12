import React from 'react';
import '/src/Components/ContactUs/contactus.css';
import Navbar from "/src/Components/Navbar/navbar.jsx";
import Footer from '/src/Components/Footer/footer.jsx';


const Contact = () => (
    <>
    <Navbar />
  <div>
    <h1 className="contact-title">Contact</h1>
    <div id="contact">
      <div className="contact-info">
        <p>Looking forward to hearing from you</p>
        <div>
          <h3>Phone</h3>
          <p>8493037519</p>
        </div>

        <div>
          <h3>Email</h3>
          <p>mayasirmir02@gmail.com</p>
        </div>
      </div>

      <div className="contact-me">
        <div className="contact-name">
          <div className="f-name">
            <p>First Name</p>
            <input type="text" name="" id="" />
          </div>

          <div className="l-name">
            <p>Last Name</p>
            <input type="text" name="" id="" />
          </div>
        </div>

        <div className="contact-name">
          <div className="emal">
            <p>Email</p>
            <input type="email" name="" id="" />
          </div>

          <div className="Number">
            <p>Number</p>
            <input type="number" name="" id="" />
          </div>
        </div>

        <div className="contact-name message-section">
          <div className="message">
            <p>Message</p>
            <input type="text" name="" id="" />
          </div>

          <div className="button">
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </>
);

export default Contact;
 