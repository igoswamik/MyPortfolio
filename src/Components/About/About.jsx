import React from "react";
import "./About.css";

const About = (props) => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who am I?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Kulbhushan Goswami.</h4>
            <p>
              I am a full-stack developer and a competitive programmer based in
              the city prayagraj of U.P, India.
            </p>
            <p>
              I love what I do and I enjoy being challenged and engaging with
              projects that require me to work outside my comfort and knowledge
              set, as continuing to learn new languages and development
              techniques are important to me. I also love playing football, a
              hobby I'm taking along since my childhood.
            </p>
          </div>
          <div className="title">
            <h3>What do I do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a FullStack Developer</h4>
            <p>
              For the front-end I usually work with Javascript, either
              standalone or including popular frameworks like ReactJS. I also
              make the web pretty by using Sass, CSS and, whenever needed, any
              of their friends: Bootstrap, Bulma, etc.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express,
              MongoDB, etc).
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Also love Competitive coding.</h4>
            <p>
              I enjoy taking part in various coding contests conducted on
              platforms like codeforces, codechef, leetcode, interviewBit etc.
            </p>
            <p>As I find problem solving to be very fun and exciting.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
