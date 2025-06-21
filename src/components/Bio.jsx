import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Bio.css';
// Import the CV file directly to ensure it's included in the build
import cvFile from '../assets/cv.pdf';
// Import the profile image
import profileImg from '../assets/profile.jpg';

function Bio() {
  return (
    <section className="bio" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="bio-content">
          <div className="bio-image">
            <img src={profileImg} alt="Profile" />
          </div>
          <div className="bio-text">
            <p>
              Recent Computer Science graduate with a solid foundation in software engineering principles and practical
              experience in web application development using Django. Proven ability to work in collaborative
              environments, leveraging strong problem-solving skills and a commitment to continuous learning.
            </p>
            <p>
              Currently pursuing a specialized training program focused on Python development, modern web technologies, and
              database management to further enhance my technical expertise. Seeking opportunities in software
              engineering to contribute to impactful projects.
            </p>
            <a href={cvFile} download="Khalid_Madi_CV.pdf" className="cv-btn">
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;
