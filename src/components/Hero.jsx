import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="section hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-content"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-subtitle"
          >
            Hi, my name is
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-title"
          >
            Aryan Raj
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hero-title secondary"
          >
            Computer Science Student at IIT Patna
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hero-description"
          >
            I'm a passionate Computer Science and Data Analytics student, currently pursuing my Bachelor's degree at IIT Patna. 
            I specialize in building responsive web applications and am constantly exploring new technologies.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="hero-buttons"
          >
            <a href="#projects" className="btn">
              View Work
            </a>
            <a href="#contact" className="btn">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero; 