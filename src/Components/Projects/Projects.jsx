import React from "react";
import Project from "./Project";
import "./Projects.css";
import PersonalLibraryImg from "./Images/PersonalLibrary.jpg";
const Projects = (props) => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Projects</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>major</u> projects I've been working on lately.
            All of these were built during my development learning journey at
            IIT Guwahati{" "}
            <a
              href="https://github.com/igoswamik"
              target="_blank"
              rel="noopener noreferrer"
            >
              My github Profile
            </a>
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="RentHouse."
            img={PersonalLibraryImg}
            tech="js css react node"
            // link="https://yagoestevez-anon-msg-board.glitch.me/"
            repo="https://github.com/igoswamik/rentHouse-front-end"
          >
            <small>
              Built using Node, Express, MongoDB, Websocket, CSS + Bootstrap,
              React.js and React Router.
            </small>
            <p>
              This is a full-stack website which supports user authentication ,
              search/filter options, real time chatting between client and owner
              and complete CRUD operation for posts/reviews/comments.
            </p>
          </Project>
          <Project
            title="YelpCamp"
            img="https://user-images.githubusercontent.com/51289274/113733438-173fd280-9718-11eb-8a0d-8e13f1ab3d45.png"
            tech="js node css"
            link="https://afternoon-scrubland-99691.herokuapp.com/"
            repo="https://github.com/igoswamik/YelpCamp"
          >
            <small>
              Built using Node, Express, MongoDB, JS , CSS + Bootstrap and
              passport.js
            </small>
            <p>
              YelpCamp is a Yelp style website for campsites that supports user
              log in, posting campgrounds, reviews and comments, and editing
              previous submissions.
            </p>
          </Project>
          <Project
            title="Personal Library."
            img={PersonalLibraryImg}
            tech="js node css"
            link="https://yagoestevez-personal-library.glitch.me/"
            repo="https://github.com/yagoestevez/fcc-personal-library"
          >
            <small>
              Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap
              and Pug.
            </small>
            <p>
              A full-stack website to store book titles and comments to each
              book into a remote database.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;
