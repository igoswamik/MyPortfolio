import React, { useState } from "react";
import SocialLinks from "../SocialLinks";
import "./Contact.css";
import Footer from "../Footer/Footer";
import * as emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_nTnGyi4rpoLTBNBIk76xE");

const Contact = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "message sent from portfolio",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = state;
    console.log("submit=", name, email, message);
    let templateParams = {
      from_name: email,
      to_name: "igoswamik457@gmail.com",
      subject: subject + "by" + name,
      message_html: message,
    };
    emailjs.send(
      "gmail",
      "template_ddn2gdj",
      templateParams,
      "user_nTnGyi4rpoLTBNBIk76xE"
    );
    resetForm();
  };
  const resetForm = () => {
    setState({
      name: "",
      email: "",
      subject: "message sent from portfolio",
      message: "",
    });
  };
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setState({ [e.target.name]: e.target.value });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below or send an email to {""}
              <span className="mail">
                igoswamik
                <i className="fas fa-at at" />
                gmail
                <i className="fas fa-circle dot" />
                com
              </span>
              :
            </p>
          </div>
          <SocialLinks />
        </div>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            name="name"
            value={state.name}
            onChange={handleChange}
            type="text"
            required
          />
          <input
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
            type="email"
            required
          />
          <textarea
            placeholder="Message"
            type="text"
            value={state.messages}
            onChange={handleChange}
            name="message"
          />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
