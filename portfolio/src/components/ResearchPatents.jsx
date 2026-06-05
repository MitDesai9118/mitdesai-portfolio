import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './ResearchPatents.css';

const researchData = [
  {
    id: 1,
    title: 'Deep Learning-Based Visual Pill Recognition and Drug Information Retrieval System',
    venue: 'Department of Computer Science & IT, Jain (Deemed-To-Be-University), Bangalore',
    authors: 'Mit A. Desai, Dr. Raghavendra R',
    year: '2025',
    abstract: 'A deep learning-based framework that detects pills and identifies drugs. The system enables real-time detection of pills, classifying them through convolutional neural networks linked to a comprehensive drug information database containing side effects, substitutes, chemical classes, and therapeutic categories.',
    link: '#'
  }
];

const ResearchPatents = () => {
  return (
    <section id="research" className="research-section">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">Research</h2>
        
        <div className="research-container reveal-on-scroll delay-100">
          {researchData.map((paper) => (
            <div key={paper.id} className="console-window rp-console">
              <div className="console-header">
                <div className="console-dots">
                  <span className="console-dot red"></span>
                  <span className="console-dot yellow"></span>
                  <span className="console-dot green"></span>
                </div>
                <div className="console-title">pill_recognition_2025.txt</div>
                <div className="console-status">// publication</div>
              </div>
              <div className="console-body rp-body">
                <div className="editor-line">
                  <span className="line-num">01</span>
                  <span className="line-content comment">// title of publication</span>
                </div>
                <div className="editor-line">
                  <span className="line-num">02</span>
                  <span className="line-content title-text">{paper.title}</span>
                </div>
                <div className="editor-line">
                  <span className="line-num">03</span>
                  <span className="line-content comment">// authors & venue details</span>
                </div>
                <div className="editor-line">
                  <span className="line-num">04</span>
                  <span className="line-content meta-text">
                    <span className="keyword">authors:</span> {paper.authors}
                  </span>
                </div>
                <div className="editor-line">
                  <span className="line-num">05</span>
                  <span className="line-content meta-text">
                    <span className="keyword">institution:</span> {paper.venue} ({paper.year})
                  </span>
                </div>
                <div className="editor-line">
                  <span className="line-num">06</span>
                  <span className="line-content comment">// abstract details</span>
                </div>
                <div className="editor-line abstract-line">
                  <span className="line-num">07</span>
                  <span className="line-content desc-text">{paper.abstract}</span>
                </div>
                <div className="editor-line">
                  <span className="line-num">08</span>
                  <span className="line-content comment">// reference links</span>
                </div>
                <div className="editor-line btn-line">
                  <span className="line-num">09</span>
                  <span className="line-content">
                    <a href="http://localhost:5000/api/download/paper" download className="btn btn-outline btn-download">
                      Download Paper <FaExternalLinkAlt />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchPatents;
