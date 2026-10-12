import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        <div className="experience-heading">
          <span>EXPERIENCE</span>
          <h2>My Professional Journey</h2>
          <p>
            My journey of learning, building projects, and gaining
            practical experience in data analytics and technology.
          </p>
        </div>

        <div className="timeline">

            {/* Creators */}

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Software Developer Intern</h3>
                  <h4>Creintors Automation Solutions Pvt Ltd Belguam</h4>
                </div>

                <span className="experience-date">
                  2025
                </span>
              </div>

              <p className="experience-description">
               Developed and maintained web application features using C# and ASP.NET MVC.
               Designed and implemented application logic following the MVC architecture.
               Worked with MySQL for database design, queries, CRUD operations, and data management.
               Developed responsive and user-friendly frontend interfaces using HTML, CSS, JavaScript, and related web technologies.
               Integrated frontend components with backend services and database operations.
               Debugged application issues, tested features, and improved overall application functionality.
               Collaborated with the development team to understand requirements and implement software solutions.
              </p>
             <br />
              <div className="experience-tags">
               <span>C#</span>
                <span> ASP.NET MVC </span>
                 <span> .NET </span>
                  <span> MySQL </span>
                   <span> SQL </span> 
                    <span>HTML/CSS </span>
                     <span> JavaScript </span>
                      <span> Web Development </span>
              </div>
            </div>
          </div>



          {/* Oasis Infobyte */}

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Data Analyst Intern</h3>
                  <h4>Oasis Infobyte</h4>
                </div>

                <span className="experience-date">
                  2026
                </span>
              </div>

              <p className="experience-description">
                During my internship at Oasis Infobyte, I gained hands-on experience in data analytics, Python programming, data preprocessing, exploratory data analysis (EDA), and machine learning. I worked on practical projects involving data cleaning, data visualization, sentiment analysis, and customer segmentation, applying analytical techniques to extract meaningful insights from datasets. I strengthened my technical skills in Python, Pandas, NumPy, Matplotlib, and Scikit-learn while improving my problem-solving, critical thinking, and data-driven decision-making abilities. This internship provided valuable practical exposure to real-world data science workflows and enhanced my readiness for entry-level Data Analyst and Data Science roles.

  **Key Highlights:**
- Completed assigned internship projects and practical tasks.
- Applied data analysis and machine learning techniques to real-world datasets.
- Developed skills in data cleaning, visualization, and model evaluation.
- Improved technical proficiency and analytical problem-solving abilities.

**Performance Metrics:** Projects Completed: 100% | Data Analysis Accuracy: 98 | Tasks Completed: 100
              </p>

              <div className="experience-tags">
                <span>Python</span>
                <span>Pandas</span>
                <span>SQL</span>
                <span>Data Analysis</span>
                <span>Visualization</span>
              </div>
            </div>
          </div>


          
          {/* Academic & Personal Projects */}

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Data Analytics Projects</h3>
                  <h4>Academic & Personal Projects</h4>
                </div>

                <span className="experience-date">
                  2024 – 2026
                </span>
              </div>

              <p className="experience-description">
                Built practical projects using Python, SQL, Power BI,
                React, and databases to solve real-world problems and
                strengthen technical and analytical skills.
              </p>

              <div className="experience-tags">
                <span>Power BI</span>
                <span>Python</span>
                <span>SQL</span>
                <span>React</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;