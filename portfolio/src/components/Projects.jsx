import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Eco Drop Scheduler',
    description: 'An AI-powered e-waste collection scheduling system featuring demand prediction, K-Means hotspot clustering, route optimization, and carbon emission tracking.',
    tags: ['React', 'FastAPI', 'Supabase', 'Scikit-learn', 'LLaMA3'],
    file: 'eco_drop.py',
    github: 'https://github.com/MitDesai9118',
    live: '#'
  },
  {
    id: 2,
    title: 'PillDetect AI',
    description: 'Advanced image-based medication identification system using MobileNetV2 and Cosine Similarity, featuring a smart fallback mechanism and live medical context via Wikipedia API.',
    tags: ['React', 'Python', 'Flask', 'TensorFlow', 'OpenCV'],
    file: 'pill_detect.py',
    github: 'https://github.com/MitDesai9118',
    live: 'https://pilldetectai-websystem.onrender.com'
  },
  {
    id: 3,
    title: 'Fitex',
    description: 'A comprehensive full-stack web application designed for fitness tracking, workout planning, and client progress analytics.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    file: 'fitex.jsx',
    github: 'https://github.com/MitDesai9118',
    live: 'https://fitex-website.onrender.com'
  },
  {
    id: 4,
    title: 'Yoga Club Management System',
    description: 'A comprehensive web application designed to streamline operations, manage class bookings, and elevate marketing efforts for yoga studios.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    file: 'yoga_club.php',
    github: 'https://github.com/MitDesai9118',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div key={project.id} className={`console-window project-card reveal-on-scroll delay-${(idx + 1) * 100}`}>
              <div className="console-header">
                <div className="console-dots">
                  <span className="console-dot red"></span>
                  <span className="console-dot yellow"></span>
                  <span className="console-dot green"></span>
                </div>
                <div className="console-title">{project.file}</div>
                <div className="console-status">// project_info</div>
              </div>
              <div className="console-body project-body">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="mini-tag green">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /> Code</a>
                  <a href={project.live} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
