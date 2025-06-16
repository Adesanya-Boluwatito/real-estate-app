import React from 'react';
import { motion } from 'framer-motion';
import { containerStagger, itemFadeInUp } from '../animations';

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
        <motion.p variants={itemFadeInUp}>
          Find your next dream home with us. We make it easy.
        </motion.p>
        <motion.form className="newsletter-form" variants={itemFadeInUp}>
          <input type="email" placeholder="Enter your email for our newsletter" />
          <button type="submit">Subscribe</button>
        </motion.form>
      </div>
    </motion.footer>
  );
};

export default Footer; 