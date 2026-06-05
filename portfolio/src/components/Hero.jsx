import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaTerminal,
  FaDownload
} from 'react-icons/fa';
import mitAvatar from '../assets/mit_desai_avatar.png';
import './Hero.css';

const Hero = () => {
  const handleViewWorkClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('projects');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="badge-container fade-in-up delay-100">
            <span className="hero-badge">
              <FaTerminal className="icon" /> $ ./introduce --self
            </span>
          </div>

          <h1 className="name fade-in-up delay-200">
            &lt;building/&gt; the web you <span className="highlight-text">actually</span> want to use.
          </h1>

          <p className="bio fade-in-up delay-300">
            independent design + engineering for ambitious teams. specializing in deep learning architectures, computer vision models, and interactive high-performance web systems.
          </p>

          <div className="hero-actions fade-in-up delay-400">
            <a href="http://localhost:5000/api/download/resume" download className="btn btn-primary">
              Download Resume
            </a>
            <a href="#projects" onClick={handleViewWorkClick} className="btn btn-outline btn-explore">
              View Work <FaArrowRight />
            </a>
          </div>

          <div className="social-links fade-in-up delay-500">
            <a href="https://github.com/MitDesai9118" target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mitdesai9118/" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:mitdesai9118@gmail.com" title="Email"><FaEnvelope /></a>
          </div>
        </div>

        <div className="hero-visual fade-in delay-300">
          <div className="console-window">
            <div className="console-header">
              <div className="console-dots">
                <span className="console-dot red"></span>
                <span className="console-dot yellow"></span>
                <span className="console-dot green"></span>
              </div>
              <div className="console-title">profile_identity.json</div>
              <div className="console-status">online</div>
            </div>

            <div className="console-body">
              {/* Profile Details */}
              <div className="profile-details">
                <div className="profile-header">
                  <h3 className="profile-name">Mit A. Desai</h3>
                  <p className="profile-role">Software Engineer</p>
                </div>

                <div className="profile-info-list">
                  <div className="info-item">
                    <span className="info-label">Location</span>
                    <span className="info-value">Bengaluru, India</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Availability</span>
                    <span className="info-value">Immediate</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Status</span>
                    <span className="info-value status-active">Available</span>
                  </div>
                </div>

                <div className="profile-section-title">Core Stack</div>
                <div className="stack-tags">
                  <span className="mini-tag green">Python</span>
                  <span className="mini-tag cyan">JavaScript</span>
                  <span className="mini-tag blue">React.js</span>
                  <span className="mini-tag purple">HTML/CSS</span>
                  <span className="mini-tag purple">SQL/MongoDB</span>
                </div>

                <div className="profile-section-title">Direct Links</div>
                <div className="contact-tags">
                  <a href="mailto:mitdesai9118@gmail.com" className="mini-tag green clickable-tag" title="Email: mitdesai9118@gmail.com">
                    <FaEnvelope className="tag-icon" /> Email
                  </a>
                  <a href="https://github.com/MitDesai9118" target="_blank" rel="noreferrer" className="mini-tag cyan clickable-tag" title="GitHub">
                    <FaGithub className="tag-icon" /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/mitdesai9118/" target="_blank" rel="noreferrer" className="mini-tag blue clickable-tag" title="LinkedIn">
                    <FaLinkedin className="tag-icon" /> LinkedIn
                  </a>
                  <a href="http://localhost:5000/api/download/resume" download className="mini-tag purple clickable-tag" title="Download Resume">
                    <FaDownload className="tag-icon" /> Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
