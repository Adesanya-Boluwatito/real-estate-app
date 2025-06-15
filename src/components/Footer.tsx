import React from 'react';
import { FaEnvelope, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { containerStagger, itemFadeInUp, buttonTap } from '../animations';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="App-footer"
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="footer-content">
        <motion.h3 variants={itemFadeInUp}>RealEstate</motion.h3>
        <motion.p variants={itemFadeInUp}>Find your next dream home with us. We make it easy.</motion.p>
        <motion.form className="newsletter-form" variants={itemFadeInUp}>
          <FaEnvelope className="newsletter-icon" />
          <input type="email" placeholder="Enter your email for our newsletter" />
          <motion.button type="submit" whileTap={buttonTap}>
            Subscribe
          </motion.button>
        </motion.form>
      </div>
      <motion.div className="footer-bottom" variants={itemFadeInUp}>
        <p>&copy; {new Date().getFullYear()} RealEstate. All Rights Reserved.</p>
        <div className="footer-socials">
          <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, color: '#1DA1F2' }}><FaTwitter /></motion.a>
          <motion.a href="https://facebook.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, color: '#4267B2' }}><FaFacebookF /></motion.a>
          <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, color: '#E1306C' }}><FaInstagram /></motion.a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer; 