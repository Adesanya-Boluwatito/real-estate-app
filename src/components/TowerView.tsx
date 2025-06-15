import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Tower } from '../data/mockData';
import {
  pageAnimation, containerStagger, itemFadeInUp,
  iconHover, buttonTap
} from '../animations';
import { FaRegCheckCircle, FaRegLightbulb, FaThLarge, FaMapMarkerAlt, FaAtom, FaLeaf, FaShieldAlt, FaCity, FaHandshake } from 'react-icons/fa';
import heroVideo from '../assets/Hero Image.mp4';

interface TowerViewProps {
  towers: Tower[];
}

const TowerView: React.FC<TowerViewProps> = ({ towers }) => {
  return (
    <motion.div variants={pageAnimation} initial="initial" animate="animate" exit="exit">
      <div className="hero">
        <video className="hero-video" autoPlay loop muted playsInline key={heroVideo}>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Find Your Dream Apartment
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}>
            Explore exclusive towers and floor plans with unparalleled ease.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={buttonTap}
              className="cta-button"
              onClick={() => document.getElementById('towers')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Towers
            </motion.button>
          </motion.div>
        </div>
      </div>

      <section id="towers" className="content-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Discover Our Prestigious Towers
        </motion.h2>
        <motion.div
          className="towers-container"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {towers.map((tower) => (
            <motion.div key={tower.id} variants={itemFadeInUp} className="tower-card-wrapper">
              <div className="tower-card">
                <div 
                  className="tower-card-image" 
                  style={{ backgroundImage: `url(${tower.imageUrl})` }}
                ></div>
                <div className="tower-card-content">
                  <h3>{tower.name}</h3>
                  <p>{tower.description}</p>
                  <ul className="tower-card-features">
                    {tower.features.map(feature => (
                      <li key={feature}><FaRegCheckCircle /> {feature}</li>
                    ))}
                  </ul>
                  <Link to={`/towers/${tower.id}`} className="button">
                    View Floors
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="why-us" className="content-section why-us-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{duration: 0.5, delay: 0.2}}>Why Choose Us?</motion.h2>
        <motion.div className="features-grid" variants={containerStagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="feature-card" variants={itemFadeInUp}>
            <motion.div whileHover={iconHover}><FaRegLightbulb /></motion.div>
            <h3>Expert Guidance</h3>
            <p>Navigate the market with insights from seasoned real estate professionals.</p>
          </motion.div>
          <motion.div className="feature-card" variants={itemFadeInUp}>
            <motion.div whileHover={iconHover}><FaThLarge /></motion.div>
            <h3>Diverse Floor Plans</h3>
            <p>Explore a wide array of layouts tailored to every lifestyle and need.</p>
          </motion.div>
          <motion.div className="feature-card" variants={itemFadeInUp}>
            <motion.div whileHover={iconHover}><FaMapMarkerAlt /></motion.div>
            <h3>Prime Locations</h3>
            <p>Discover properties in highly sought-after neighborhoods with excellent connectivity.</p>
          </motion.div>
        </motion.div>
      </section>

      <section id="partners" className="content-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{duration: 0.5, delay: 0.2}}>Our Trusted Partners</motion.h2>
        <motion.div className="partners-grid" variants={containerStagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={itemFadeInUp} whileHover={{y: -5}}><FaAtom /></motion.div>
          <motion.div variants={itemFadeInUp} whileHover={{y: -5}}><FaLeaf /></motion.div>
          <motion.div variants={itemFadeInUp} whileHover={{y: -5}}><FaShieldAlt /></motion.div>
          <motion.div variants={itemFadeInUp} whileHover={{y: -5}}><FaCity /></motion.div>
          <motion.div variants={itemFadeInUp} whileHover={{y: -5}}><FaHandshake /></motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default TowerView; 