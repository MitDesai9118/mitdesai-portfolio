import React from 'react';
import { FaCertificate, FaChevronLeft, FaChevronRight, FaLightbulb, FaExternalLinkAlt } from 'react-icons/fa';
import './Certificates.css';

const certificatesData = [
  {
    id: 1,
    title: 'AI Text Summarization with Hugging Face',
    issuer: 'LinkedIn',
    date: 'January 2026',
    link: 'https://linkedin.com'
  },
  {
    id: 2,
    title: 'Applied AI: Building NLP Apps with Hugging Face Transformers',
    issuer: 'LinkedIn',
    date: 'January 2026',
    link: 'https://linkedin.com'
  },
  {
    id: 3,
    title: 'Develop Your Skills with Large Language Models',
    issuer: 'LinkedIn',
    date: 'January 2026',
    link: 'https://linkedin.com'
  },
  {
    id: 4,
    title: 'Machine Learning and AI Foundations: Clustering and Association',
    issuer: 'LinkedIn',
    date: 'January 2026',
    link: 'https://linkedin.com'
  },
  {
    id: 5,
    title: 'CertNexus Certified IoT Security Practitioner Cert Prep by InfoSec',
    issuer: 'LinkedIn',
    date: 'January 2026',
    link: 'https://linkedin.com'
  },
  {
    id: 6,
    title: 'Practical Blockchain and Cryptocurrency',
    issuer: 'LinkedIn',
    date: 'January 2026',
    link: 'https://linkedin.com'
  },
  {
    id: 7,
    title: 'IoT Product Security',
    issuer: 'LinkedIn',
    date: 'January 2026',
    link: 'https://linkedin.com'
  },
  {
    id: 8,
    title: 'Learning Cryptography and Network Security',
    issuer: 'LinkedIn',
    date: 'February 2026',
    link: 'https://linkedin.com'
  },
  {
    id: 9,
    title: 'Introduction to Contemporary Operating Systems and Hardware 1b',
    issuer: 'Illinois Tech',
    date: 'September 2024',
    credentialId: '9RHEAKAHFG8E',
    link: 'https://linkedin.com'
  },
  {
    id: 10,
    title: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    date: 'October 2024',
    credentialId: '8W0IH3SN0V6Q',
    link: 'https://linkedin.com'
  },
  {
    id: 11,
    title: 'Introduction to Object-Oriented Programming with Java',
    issuer: 'LearnQuest',
    date: 'September 2024',
    credentialId: 'UU11AOCLVUIM',
    link: 'https://linkedin.com'
  },
  {
    id: 12,
    title: 'Data Structures in C',
    issuer: 'University of Michigan',
    date: 'October 2024',
    credentialId: 'POVNK7S67ESQ',
    link: 'https://linkedin.com'
  },
  {
    id: 13,
    title: 'Cloud Computing Essentials with Azure Management',
    issuer: 'Microsoft',
    date: 'October 2024',
    credentialId: 'LL3LN00REL6C',
    link: 'https://linkedin.com'
  },
  {
    id: 14,
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM',
    date: 'October 2024',
    credentialId: 'PGRJHWJ25UER',
    link: 'https://linkedin.com'
  },
  {
    id: 15,
    title: 'Designing User Interfaces and Experiences (UI/UX)',
    issuer: 'IBM',
    date: 'March 2025',
    credentialId: 'W4KVYPR3EYLA',
    link: 'https://linkedin.com'
  },
  {
    id: 16,
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    date: 'March 2025',
    credentialId: 'P22SQW7AQVM5',
    link: 'https://linkedin.com'
  },
  {
    id: 17,
    title: 'Relational Database Administration (DBA)',
    issuer: 'IBM',
    date: 'March 2025',
    credentialId: 'LAPCJUZDSKLJ',
    link: 'https://linkedin.com'
  },
  {
    id: 18,
    title: 'Introduction to Embedded Machine Learning',
    issuer: 'Edge Impulse',
    date: 'March 2025',
    credentialId: 'SIQ5BUYQ6LGG',
    link: 'https://linkedin.com'
  },
  {
    id: 19,
    title: 'Machine Learning and NLP Basics',
    issuer: 'Edureka',
    date: 'September 2025',
    credentialId: 'CJZ0GF0Q5PC6',
    link: 'https://linkedin.com'
  },
  {
    id: 20,
    title: 'Research Methodologies',
    issuer: 'Queen Mary University of London',
    date: 'September 2025',
    credentialId: 'XSQY4YNNPFEO',
    link: 'https://linkedin.com'
  },
  {
    id: 21,
    title: 'R Programming Essentials with Microsoft Tools',
    issuer: 'Microsoft',
    date: 'September 2025',
    credentialId: '7WPH2LCV8SB6',
    link: 'https://linkedin.com'
  }
];

const patentData = [
  {
    id: 1,
    title: 'AI-Based Intelligent System for Predictive E-Waste Collection Scheduling and Carbon-Efficient Resource Allocation',
    status: 'Application published',
    number: '202641025718',
    description: 'An integrated approach combining machine learning-based demand prediction, K-Means clustering for hotspot detection, Nearest Neighbor route optimization, and carbon emission tracking within a unified e-waste collection scheduling platform.'
  }
];

const Certificates = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = certificatesData.length;

  const getWrappedDiff = (index) => {
    let diff = index - activeIndex;
    if (diff < -total / 2) diff += total;
    if (diff > total / 2) diff -= total;
    return diff;
  };

  const getCardStyle = (index) => {
    const diff = getWrappedDiff(index);
    const absDiff = Math.abs(diff);

    if (absDiff > 2) {
      return {
        opacity: 0,
        transform: `translateX(${diff > 0 ? 100 : -100}px) scale(0.8)`,
        zIndex: 0,
        pointerEvents: 'none'
      };
    }

    const zIndex = 10 - absDiff;
    const scale = 1 - absDiff * 0.05;
    
    // Spacing between cards: tighter since it's a 2-column layout now
    const spacing = isMobile ? 18 : 32;
    const translateX = diff * spacing;
    const translateY = absDiff * (isMobile ? 5 : 8);
    const rotate = diff * (isMobile ? 1 : 2);
    const opacity = 1 - absDiff * 0.25;

    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
      zIndex,
      opacity,
      pointerEvents: diff === 0 ? 'auto' : 'none'
    };
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">Patents & Certifications</h2>
        
        <div className="pc-grid">
          {/* Left Column: Certifications Console */}
          <div className="console-window pc-column reveal-on-scroll delay-100">
            <div className="console-header">
              <div className="console-dots">
                <span className="console-dot red"></span>
                <span className="console-dot yellow"></span>
                <span className="console-dot green"></span>
              </div>
              <div className="console-title">certifications.sh</div>
              <div className="console-status">// verify: active</div>
            </div>
            
            <div className="console-body cert-console-body">
              <div className="cert-stack-container">
                <div className="cert-stack">
                  {certificatesData.map((cert, index) => {
                    const diff = getWrappedDiff(index);
                    const isActive = diff === 0;
                    return (
                      <div 
                        key={cert.id} 
                        className={`cert-card cert-stack-item ${isActive ? 'active-card' : ''}`}
                        onClick={() => {
                          if (!isActive) {
                            setActiveIndex(index);
                          }
                        }}
                        style={{
                          ...getCardStyle(index),
                          cursor: !isActive ? 'pointer' : 'default'
                        }}
                      >
                        <span className="cert-number">{index + 1}</span>
                        <div className="cert-icon">
                          <FaCertificate />
                        </div>
                        <div className="cert-info">
                          <h3 className="cert-title">{cert.title}</h3>
                          <p className="cert-issuer">{cert.issuer}</p>
                          <p className="cert-date">{cert.date}</p>
                          {cert.credentialId && (
                            <p className="cert-id">Cred ID: <code>{cert.credentialId}</code></p>
                          )}
                          <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
                            Verify Credential
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="cert-controls-container">
                  <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous Slide">
                    <FaChevronLeft />
                  </button>
                  <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next Slide">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Patents Console */}
          <div className="console-window pc-column reveal-on-scroll delay-300">
            <div className="console-header">
              <div className="console-dots">
                <span className="console-dot red"></span>
                <span className="console-dot yellow"></span>
                <span className="console-dot green"></span>
              </div>
              <div className="console-title">patents.json</div>
              <div className="console-status">// database</div>
            </div>
            
            <div className="console-body patent-console-body">
              <div className="patents-list">
                {patentData.map((patent) => (
                  <div key={patent.id} className="patent-card-content">
                    <span className="mini-tag green status-tag">{patent.status}</span>
                    <h4 className="patent-title">{patent.title}</h4>
                    <div className="patent-meta">
                      <span className="meta-label">App No:</span> <code className="meta-value">{patent.number}</code>
                    </div>
                    <p className="patent-desc">{patent.description}</p>
                    <a href="http://localhost:5000/api/download/patent" download className="btn btn-outline btn-download">
                      Download Details <FaExternalLinkAlt />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
