import React from "react";

const SocialLinks = (props) => {
  return (
    <div className="social">
      <a
        href="https://linkedin.com/in/kg457"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Linkedin profile"
      >
        {" "}
        <i className="fab fa-linkedin" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/igoswamik"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {" "}
        <i className="fab fa-github" />
      </a>
    </div>
  );
};

export default SocialLinks;
