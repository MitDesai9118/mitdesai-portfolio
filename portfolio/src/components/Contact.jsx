import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">Get In Touch</h2>
        <div className="contact-content">
          {/* Left Console: Contact Information */}
          <div className="console-window contact-info-window reveal-on-scroll delay-100">
            <div className="console-header">
              <div className="console-dots">
                <span className="console-dot red"></span>
                <span className="console-dot yellow"></span>
                <span className="console-dot green"></span>
              </div>
              <div className="console-title">identity.info</div>
              <div className="console-status">// read-only</div>
            </div>
            <div className="console-body info-body">
              <div className="cli-line comment">// contact details</div>
              
              <div className="cli-line">
                <span className="prompt">mit@desai-pc:~$</span> get-location
              </div>
              <div className="cli-output primary">Bangalore, India</div>
              
              <div className="cli-line">
                <span className="prompt">mit@desai-pc:~$</span> get-email
              </div>
              <div className="cli-output primary">mitdesai9118@gmail.com</div>

              <div className="cli-line comment">// open for collaborations</div>
              <div className="cli-line">
                <span className="prompt">mit@desai-pc:~$</span> check-status --collab
              </div>
              <div className="cli-output">
                <pre className="json-data">
{`{
  "research": "available",
  "software_dev": "available",
  "remote": true
}`}
                </pre>
              </div>
            </div>
          </div>
          
          {/* Right Console: Interactive Form */}
          <div className="console-window contact-form-window reveal-on-scroll delay-300">
            <div className="console-header">
              <div className="console-dots">
                <span className="console-dot red"></span>
                <span className="console-dot yellow"></span>
                <span className="console-dot green"></span>
              </div>
              <div className="console-title">contact.sh</div>
              <div className="console-status">// write-mode</div>
            </div>
            <div className="console-body form-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="cli-line comment">// initialize sender parameters</div>
                
                <div className="form-group console-input-group">
                  <div className="input-prompt">
                    <span className="prompt">mit@desai-pc:~$</span> export NAME=
                  </div>
                  <input type="text" id="name" placeholder='"John Doe"' required />
                </div>

                <div className="form-group console-input-group">
                  <div className="input-prompt">
                    <span className="prompt">mit@desai-pc:~$</span> export EMAIL=
                  </div>
                  <input type="email" id="email" placeholder='"john@example.com"' required />
                </div>

                <div className="form-group console-input-group">
                  <div className="input-prompt">
                    <span className="prompt">mit@desai-pc:~$</span> export MESSAGE=
                  </div>
                  <textarea id="message" rows="4" placeholder='"Let me know how we can collaborate..."' required></textarea>
                </div>

                <div className="cli-line comment">// dispatch payload</div>
                <div className="submit-container">
                  <span className="prompt">mit@desai-pc:~$</span>
                  <button type="submit" className="btn btn-primary console-submit-btn">
                     ./send_message.sh <FaPaperPlane />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
