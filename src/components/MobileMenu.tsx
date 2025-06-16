import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuVariants: Variants = {
    closed: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3
      }
    }
  };

  const linkVariants: Variants = {
    closed: {
      opacity: 0,
      y: 20
    },
    open: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <button className="close-menu" onClick={onClose}>
              <FaTimes />
            </button>
            <nav>
              <motion.div
                variants={linkVariants}
                initial="closed"
                animate="open"
                transition={{ delay: 0.2 }}
              >
                <Link to="/" onClick={onClose}>Home</Link>
              </motion.div>
              <motion.div
                variants={linkVariants}
                initial="closed"
                animate="open"
                transition={{ delay: 0.3 }}
              >
                <Link to="/#towers" onClick={onClose}>Towers</Link>
              </motion.div>
              <motion.div
                variants={linkVariants}
                initial="closed"
                animate="open"
                transition={{ delay: 0.4 }}
              >
                <Link to="/about" onClick={onClose}>About</Link>
              </motion.div>
              <motion.div
                variants={linkVariants}
                initial="closed"
                animate="open"
                transition={{ delay: 0.5 }}
              >
                <Link to="/contact" onClick={onClose}>Contact</Link>
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 