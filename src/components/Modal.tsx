import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-purple-900 bg-opacity-50 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white p-6 rounded-lg max-w-sm w-full shadow-lg border-2 border-pink-300"
        >
          <div className="text-gray-800">
            {children}
          </div>
          <button
            onClick={onClose}
            className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-md hover:from-pink-600 hover:to-purple-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;