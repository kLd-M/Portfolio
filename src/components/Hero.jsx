import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-name">KHALID MADI</h1>
        <h2 className="hero-title">SOFTWARE DEVELOPMENT ENGINEER</h2>
        <div className="social-icons">
          <a href="https://github.com/kLd-M" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/khalidmadi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <a href="#contact" className="contact-btn">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero;
