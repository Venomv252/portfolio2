import { motion } from 'framer-motion';
import projectImg from '../assets/project.avif';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of your project. What it does, what technologies you used, and what you learned.",
      image: projectImg,
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Another amazing project you've built. Highlight the key features and your role in development.",
      image: projectImg,
      tech: ["Next.js", "Tailwind", "Firebase"],
      github: "https://github.com",
      live: "https://example.com",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="projects-content"
        >
          <h2 className="section-title">My Projects</h2>
          
          <div className="projects-grid">
            {projects.map(({ id, title, description, image, tech, github, live }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: id * 0.2 }}
                viewport={{ once: true }}
                className="project-card"
              >
                <div className="project-image-container">
                  <img
                    src={image}
                    alt={title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        GitHub
                      </a>
                      <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{title}</h3>
                  <p className="project-description">{description}</p>
                  
                  <div className="project-tech">
                    {tech.map((item) => (
                      <span
                        key={item}
                        className="tech-tag"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Background decoration */}
          <div className="absolute top-1/4 right-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 