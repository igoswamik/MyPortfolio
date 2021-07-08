import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">I do</span>
          <span className="line">competitive coding</span>
          <span className="line">
            <span className="color">&</span> development.
          </span>
        </h1>
        <div className="buttons">
          <a
            href="https://drive.google.com/file/d/1KGieKplWlRaQ-ktWMrDWNifKD4ql9pqw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            my resume
          </a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
