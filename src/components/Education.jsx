import './Education.css';

function Education() {
  const education = [
    {
      degree: 'Full Stack Development using Python',
      institution: 'Information Technology Institute',
      year: 'March 2025 - June 2025',
      description: 'Comprehensive software development specialization, focusing on Python frameworks (Django, Flask), web development, database systems, and software engineering best practices. Completed a course on Ubuntu Linux Essentials.'
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'MUST University, College of Information Technology',
      year: '2018 - 2022',
      description: 'GPA: 3.54. Graduation project: Designed and architected a solution (NP-complete problem) that creates both students\' and college\'s schedules with least conflicts implementing hybrid genetic algorithms for approximate optimal results as a three-tier web application.'
    },
    {
      degree: 'Thanaweya Amma',
      institution: 'Middle East Secondary Language School',
      year: '2013 - 2016',
      description: 'Graduation percentage: 95.96%'
    }
  ];

  const experience = [
    {
      position: 'Software Development Engineer',
      company: 'Egyptian Army (Military Service)',
      year: 'Jul 2023 - Sep 2024',
      description: 'Developed and maintained an interactive Django-based web application, enhancing functionality while ensuring scalability. Served as IT administrator for a network domain, managing infrastructure, user accounts, and technical support.'
    },
    {
      position: 'Software Development Intern',
      company: 'Vodafone Egypt',
      year: 'Aug 2020 - Sep 2020',
      description: 'Collaborated with a senior web designer to implement a web service using C#, JavaScript, and MVC architecture. Gained practical experience in Agile SDLC through hands-on participation in development sprints.'
    },
    {
      position: 'Admission Representative',
      company: 'Cedar Point Amusement Park, Ohio, USA',
      year: 'Jun 2018 - Sep 2018',
      description: 'Participated in a cultural exchange program, managing guest admissions, ticket sales, and customer service.'
    }
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p className="timeline-year">{item.year}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: '60px' }}>Experience</h2>
        <div className="timeline">
          {experience.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.position}</h3>
                <h4>{item.company}</h4>
                <p className="timeline-year">{item.year}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
