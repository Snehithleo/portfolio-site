import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        I'm a full stack software engineer with a strong foundation in Java, Spring Boot,
        React, and Angular. I’ve built real-time, scalable systems deployed on AWS and designed
        with secure, modular architecture.
      </p>

      <div className="skills">
        <span className="skill">Java</span>
        <span className="skill">Spring Boot</span>
        <span className="skill">React</span>
        <span className="skill">Angular</span>
        <span className="skill">AWS</span>
        <span className="skill">Kafka</span>
        <span className="skill">Node.js</span>
        <span className="skill">PostgreSQL</span>
      </div>
    </section>
  );
};

export default About;
