import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaUserTie } from 'react-icons/fa';
import profileImage from '../assets/images/profile.jpeg'

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-earth-background-light to-earth-background text-earth-text py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <div className="relative inline-block">
            <img 
              src={profileImage} 
              alt="Alejandra Aguilar" 
              className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-earth-primary shadow-lg"
            />
            <div className="absolute inset-0 rounded-full border-4 border-earth-accent opacity-50 animate-pulse"></div>
          </div>
          <h2 className="text-3xl font-semibold mb-2 text-earth-primary">Alejandra Aguilar</h2>
          <p className="text-earth-secondary">Full Stack Developer | Product Manager</p>
        </motion.div>

        <motion.p className="text-lg mb-8 text-earth-text leading-relaxed" variants={itemVariants}>
          A versatile Full Stack Developer and Product Manager with 5+ years of experience, I combine technical expertise with strategic business acumen. My unique blend of skills allows me to bridge the gap between development and product strategy, implementing solutions that align with business goals and user needs. I'm a problem-solver and strategic thinker, always ready to tackle complex challenges in the tech world.
        </motion.p>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12" variants={itemVariants}>
          {[
            { icon: FaCode, title: "Full Stack Development", description: "Proficient in Python, JavaScript, TypeScript, HTML, CSS, and Ruby. Experienced with React, Node.js, Express, and NestJS." },
            { icon: FaServer, title: "Backend & API Development", description: "Skilled in building robust backend systems and RESTful APIs using Express, NestJS, and GraphQL." },
            { icon: FaDatabase, title: "Database Management", description: "Experienced with SQL databases and ORMs like Prisma. Proficient in designing and optimizing database schemas." },
            { icon: FaTools, title: "Development Tools & Practices", description: "Proficient with Git, experienced in test-driven development using Jest, Mocha, Chai, and Cypress." },
            { icon: FaUserTie, title: "Product Management", description: "Experienced in managing tech products, including online education platforms and corporate universities." }
          ].map((item, index) => (
            <div key={index} className="bg-white/70 p-6 rounded-lg shadow-md border border-earth-background hover:border-earth-accent transition-colors duration-300">
              <item.icon className="text-4xl mb-4 text-earth-primary" />
              <h3 className="text-xl font-semibold mb-2 text-earth-primary">{item.title}</h3>
              <p className="text-earth-secondary">{item.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <a 
            href="https://www.linkedin.com/in/aleaguilar01" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-earth-primary to-earth-secondary text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;