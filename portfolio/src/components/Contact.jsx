import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    const subject = encodeURIComponent(`Collaboration Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Mit,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // Opens Gmail web compose directly in a new browser tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mitdesai9118@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">Get In Touch</h2>
        <div className="contact-content">
          {/* Left Panel: Contact Information */}
          <div className="console-window contact-info-window reveal-on-scroll delay-100">
            <div className="console-header">
              <div className="console-dots">
                <span className="console-dot red"></span>
                <span className="console-dot yellow"></span>
                <span className="console-dot green"></span>
              </div>
              <div className="console-title">identity.info</div>
              <div className="console-status">active</div>
            </div>
            <div className="console-body info-body">
              <div className="contact-info-section">
                <h3 className="contact-info-title">Contact Info</h3>
                
                <div className="contact-info-item">
                  <FaMapMarkerAlt className="info-icon green-text" />
                  <div className="info-text">
                    <span className="info-label">Location</span>
                    <span className="info-value">Bangalore, India</span>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <FaEnvelope className="info-icon cyan-text" />
                  <div className="info-text">
                    <span className="info-label">Email</span>
                    <a href="mailto:mitdesai9118@gmail.com" className="info-value email-link">
                      mitdesai9118@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-info-section">
                <h3 className="contact-info-title">Collaboration Status</h3>
                <div className="collab-status-list">
                  <div className="collab-item">
                    <span className="collab-bullet green"></span>
                    <span className="collab-text">Available for AI Research</span>
                  </div>
                  <div className="collab-item">
                    <span className="collab-bullet cyan"></span>
                    <span className="collab-text">Available for Software Dev</span>
                  </div>
                  <div className="collab-item">
                    <span className="collab-bullet blue"></span>
                    <span className="collab-text">Open to Remote Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Panel: Interactive Form */}
          <div className="console-window contact-form-window reveal-on-scroll delay-300">
            <div className="console-header">
              <div className="console-dots">
                <span className="console-dot red"></span>
                <span className="console-dot yellow"></span>
                <span className="console-dot green"></span>
              </div>
              <div className="console-title">send_message</div>
              <div className="console-status">ready</div>
            </div>
            <div className="console-body form-body">
              <form onSubmit={handleSubmit} className="simplified-contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="Your name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="Your email address" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" rows="4" className="form-input" placeholder="Let me know how we can collaborate..." required></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                   Send Message <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
