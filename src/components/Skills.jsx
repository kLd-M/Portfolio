import './Skills.css';

function Skills() {
  const languagesAndFrameworks = [
    { name: 'Python', level: 90 },
    { name: 'Django', level: 85 },
    { name: 'C++', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'React', level: 70 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'Oracle/SQL', level: 80 },
    { name: 'Linux/Bash', level: 75 },
    { name: 'AWS', level: 65 },
  ];

  const foundationAndConcepts = [
    { name: 'Data Structures & Algorithms', level: 85 },
    { name: 'OOP & Design Patterns', level: 80 },
    { name: 'SOLID Principles', level: 75 },
    { name: 'Agile Methodology', level: 70 },
    { name: 'Version Control (Git)', level: 85 },
    { name: 'Software Development Life Cycle', level: 75 },
  ];

  // Function to render skill items
  const renderSkills = (skillsArray) => {
    return skillsArray.map((skill, index) => (
      <div className="skill-item" key={index}>
        <div className="skill-name">{skill.name}</div>
        <div className="skill-bar">
          <div
            className="skill-level"
            style={{ width: `${skill.level}%` }}
            data-level={`${skill.level}%`}
          ></div>
        </div>
      </div>
    ));
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-categories-container">
          <div className="skills-category">
            <h3 className="category-title">Foundations & Concepts</h3>
            <div className="skills-list">
              {renderSkills(foundationAndConcepts)}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Languages & Frameworks</h3>
            <div className="skills-list">
              {renderSkills(languagesAndFrameworks)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
