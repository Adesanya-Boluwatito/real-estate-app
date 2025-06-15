import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <motion.header
      className={`App-header ${isHomePage ? 'home-header' : 'page-header'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <div className="logo">
        <Link to="/">
          Real<span>Estate</span>
        </Link>
      </div>
      <nav>
        <Link to="/#towers">Towers</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </motion.header>
  );
};

export default Header; 