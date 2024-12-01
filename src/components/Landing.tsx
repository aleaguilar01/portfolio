import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaBriefcase,
  FaRobot,
} from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { IconType } from 'react-icons';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.3;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <mesh
      ref={mesh}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.1 : 1}
    >
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshPhongMaterial color={hovered ? "#E0A458" : "#2D3047"} />
    </mesh>
  );
};

const CustomBackground = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingShape />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  );
};

const AITextGenerator = () => {
  const [text, setText] = useState('');
  const fullText = "Welcome to Alejandra's Portfolio";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold text-earth-background-light mb-8">
      {text}
      <span className="animate-blink">|</span>
    </h1>
  );
};

const NavigationCard: React.FC<{
  icon: IconType;
  title: string;
  path: string;
}> = ({ icon: Icon, title, path }) => {
  const controls = useAnimation();

  return (
    <motion.div
      className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: "rgba(224, 164, 88, 0.1)", // Accent color with low opacity
      }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => controls.start({ y: -10 })}
      onHoverEnd={() => controls.start({ y: 0 })}
    >
      <Link to={path} className="flex flex-col items-center">
        <motion.div animate={controls}>
          <Icon className="text-4xl mb-2 text-earth-secondary" />
        </motion.div>
        <h2 className="text-lg font-semibold text-earth-primary">{title}</h2>
      </Link>
    </motion.div>
  );
};

const Landing: React.FC = () => {
  return (
    <div className="relative flex-grow flex flex-col">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
          <CustomBackground />
        </Canvas>
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        <header className="w-full py-10 bg-gradient-to-r from-earth-primary to-earth-secondary bg-opacity-70">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AITextGenerator />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-2 text-earth-background-light"
            >
              Software Developer | Full Stack Developer | Product Manager
            </motion.p>
            <p className="text-lg text-earth-background-light">
              Combining Technical Expertise with Strategic Business Acumen
            </p>
          </div>
        </header>

        <div className="flex-grow flex items-center justify-center p-4 bg-gradient-to-b from-earth-background-light to-earth-background bg-opacity-70">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl w-full"
          >
            <NavigationCard icon={FaLaptopCode} title="About Me" path="/about" />
            <NavigationCard icon={FaCode} title="Skills" path="/skills" />
            <NavigationCard icon={FaBriefcase} title="Experience" path="/experience" />
            <NavigationCard icon={FaRobot} title="Projects" path="/projects" />
            <NavigationCard icon={FaGraduationCap} title="Education" path="/education" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;