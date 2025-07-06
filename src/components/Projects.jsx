import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      name: 'Job Tracker App',
      description: 'A full-stack app to track job applications, using React, Node.js, PostgreSQL.',
      liveLink: '#',
      github: 'https://github.com/yourusername/job-tracker'
    },
    {
      name: 'Portfolio Website',
      description: 'The site you’re seeing right now — built using React and inspired by retro UI.',
      liveLink: '#',
      github: 'https://github.com/yourusername/portfolio-site'
    },
    {
      name: 'Device Integration (Hector)',
      description: 'Secure payment terminal integration using WebSockets and SSL certs.',
      liveLink: '#',
      github: '#'
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noreferrer">Live</a>
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
