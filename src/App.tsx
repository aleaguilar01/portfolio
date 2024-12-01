import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronDown, Copy, Linkedin, Mail } from 'lucide-react'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Modal from './components/Modal'
import Landing from './components/Landing'

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState<boolean>(false)
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const email = 'aleaguilar01@gmail.com'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <nav className="bg-gray-800 p-4 sticky top-0 z-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold hover:text-blue-400 transition-colors">Alejandra Aguilar</Link>
            <div className="hidden md:flex space-x-6">
              {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((item) => (
                <Link key={item} to={`/${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">{item}</Link>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                <ChevronDown size={24} className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 md:hidden w-full z-10"
            >
              {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="block py-2 px-4 hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<Landing />} />
        </Routes>

        <footer className="bg-gray-800 text-white py-6 mt-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Alejandra Aguilar. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="https://www.linkedin.com/in/aleaguilar01" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <button onClick={() => setIsEmailModalOpen(true)} className="text-white hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </button>
            </div>
          </div>
        </footer>
        <Modal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)}>
          <h2 className="text-2xl font-bold mb-4">Contact Email</h2>
          <p className="mb-4">{email}</p>
          <button
            onClick={copyToClipboard}
            className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            {isCopied ? (
              <>
                <Check size={20} className="mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy size={20} className="mr-2" />
                Copy to Clipboard
              </>
            )}
          </button>
        </Modal>
      </div>
    </Router>
  )
}

export default App