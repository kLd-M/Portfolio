import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faSpinner, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Set submitting status
    setStatus({
      submitting: true,
      submitted: false,
      success: false,
      message: ''
    });

    // Replace these with your actual EmailJS service, template, and user IDs
    // You'll get these when you set up your EmailJS account
    const serviceId = 'kldd__';
    const templateId = 'template_aoumfnk';
    const userId = 'k8yxVOtxExifiMGlk';

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Update status
        setStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: 'Message sent successfully! I will get back to you soon.'
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        // Update status
        setStatus({
          submitting: false,
          submitted: true,
          success: false,
          message: 'Failed to send message. Please try again later.'
        });
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>kld.madi88@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>+201211620340</p>
              </div>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>Alexandria, Egypt</p>
              </div>
            </div>
            <div className="contact-social">
              <h3>Connect With Me</h3>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://linkedin.com/in/khalidmadi" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {status.submitted && (
              <div className={`form-status ${status.success ? 'success' : 'error'}`}>
                <FontAwesomeIcon icon={status.success ? faCheckCircle : faExclamationCircle} />
                <p>{status.message}</p>
              </div>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={status.submitting}
            >
              {status.submitting ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin /> Sending...
                </>
              ) : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

