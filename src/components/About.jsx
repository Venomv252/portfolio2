import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Git",
    "GitHub",
    "Problem-solving",
    "Teamwork"
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="about-text"
            >
              <p>
                Hello! I'm Aryan Raj, a Computer Science and Data Analytics student at 
                Indian Institute of Technology Patna (Expected 2027). With a strong academic 
                record (CPI: 8.74), I'm passionate about technology and its potential to 
                create meaningful impact.
              </p>
              <p>
                Based in Patna, India, I'm constantly working on improving my skills in 
                web development and exploring new technologies. I combine my technical 
                skills with strong problem-solving abilities and excellent teamwork 
                capabilities to create efficient and innovative solutions.
              </p>
              <p className="skills-heading">
                Here are the key technologies and skills I work with:
              </p>
              
              <ul className="skills-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>

              <div className="education-section">
                <h3 className="education-title">Education</h3>
                <div className="education-item">
                  <h4>Bachelor of Science in Computer Science and Data Analytics</h4>
                  <p>Indian Institute of Technology Patna</p>
                  <p>Expected Graduation: 2027</p>
                  <p>CPI: 8.74</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="about-image-wrapper"
            >
              <div className="about-image-container">
                <img
                  src={profile}
                  alt="Aryan Raj"
                  className="about-image"
                />
                <div className="about-image-border"></div>
              </div>
            </motion.div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 