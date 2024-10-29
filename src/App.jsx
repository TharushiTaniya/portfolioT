import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './App.css';

function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <a href="#home" onClick={() => onNavigate('home')}>Home</a>
      <a href="#about" onClick={() => onNavigate('about')}>About</a>
      <a href="#projects" onClick={() => onNavigate('projects')}>Projects</a>
      <a href="#contact" onClick={() => onNavigate('contact')}>Contact</a>
    </nav>
  );
}

function ProjectCard({ title, description, image, tags }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A revolutionary app that transforms ideas into reality using cutting-edge technology.",
      image: "https://source.unsplash.com/random/800x600?tech",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Project Beta",
      description: "An innovative solution for modern businesses seeking digital transformation.",
      image: "https://source.unsplash.com/random/800x600?business",
      tags: ["Vue.js", "Firebase", "TailwindCSS"]
    },
    {
      title: "Project Gamma",
      description: "A state-of-the-art platform revolutionizing user experiences.",
      image: "https://source.unsplash.com/random/800x600?design",
      tags: ["React Native", "GraphQL", "AWS"]
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar onNavigate={scrollToSection} />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="profile-image">
          <img 
            src="https://source.unsplash.com/random/400x400?portrait" 
            alt="Profile"
          />
        </div>
        <h1>Hello, I'm Your Name</h1>
        <p>Full-stack Developer & UI/UX Enthusiast</p>
        <div className="hero-buttons">
          <button onClick={() => scrollToSection('projects')}>View Projects</button>
          <button className="outline-button" onClick={() => scrollToSection('contact')}>Contact Me</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with a keen eye for design and a love for creating
          seamless user experiences. With expertise in modern web technologies, I bring
          ideas to life through clean code and thoughtful design principles.
        </p>
        <img src="https://source.unsplash.com/random/800x800?coding" alt="Working" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
        <div className="contact-icons">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaEnvelope /></a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
