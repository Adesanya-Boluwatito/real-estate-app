import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { mockData } from '../data/mockData';
import {
  FaChevronRight, FaChevronLeft, FaRegBuilding, FaRulerVertical, FaBed, FaBath,
  FaCompass, FaRegCalendarAlt, FaDollarSign, FaRegCheckCircle
} from 'react-icons/fa';
import { pageAnimation, containerStagger, itemFadeInUp, buttonTap } from '../animations';

const ApartmentDetails: React.FC = () => {
  const { towerId, floorId, apartmentId } = useParams<{ towerId: string; floorId: string; apartmentId: string }>();
  const tower = mockData.find(t => t.id === towerId);
  const floor = tower?.floors.find(f => f.id === floorId);
  const apartment = floor?.apartments.find(a => a.id === apartmentId);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [apartment]);

  if (!tower || !floor || !apartment) {
    return <div className="view-container"><h2>Apartment details not found.</h2></div>;
  }

  const galleryImages = [
    apartment.imageUrl,
    apartment.thumbnailUrl,
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop'
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const mainImage = galleryImages[currentImageIndex];

  return (
    <motion.div
      className="view-container apartment-details-view"
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="breadcrumb">
        <Link to="/">Towers</Link><FaChevronRight />
        <Link to={`/towers/${tower.id}`}>Floor Selection</Link><FaChevronRight />
        <Link to={`/towers/${tower.id}/floors/${floor.id}`}>Layout Gallery</Link><FaChevronRight />
        <span>Detailed Layout View</span>
      </div>

      <div className="view-header">
        <h1>Detailed Layout View: {apartment.unitType}</h1>
      </div>

      <div className="details-content-layout">
        <main className="details-main">
          <div className="image-gallery">
            <div className="main-image">
              <AnimatePresence mode="wait">
                <motion.img
                  key={mainImage}
                  src={mainImage}
                  alt={apartment.unitType}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              <button className="img-arrow img-arrow-left" onClick={handlePrevImage}><FaChevronLeft /></button>
              <button className="img-arrow img-arrow-right" onClick={handleNextImage}><FaChevronRight /></button>
            </div>
            <div className="thumbnail-strip">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail-image ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={img} alt={`${apartment.unitType} view ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </main>
        <motion.aside
          className="details-sidebar"
          variants={containerStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="sidebar-widget" variants={itemFadeInUp}>
            <h3>Specifications</h3>
            <ul className="spec-list">
              <li><FaRegBuilding /><div className="spec-text"><span>Type</span><strong>{apartment.unitType}</strong></div></li>
              <li><FaRulerVertical /><div className="spec-text"><span>Area</span><strong>{apartment.area} sq ft</strong></div></li>
              <li><FaBed /><div className="spec-text"><span>Bedrooms</span><strong>{apartment.specs.bedrooms}</strong></div></li>
              <li><FaBath /><div className="spec-text"><span>Bathrooms</span><strong>{apartment.specs.bathrooms}</strong></div></li>
              <li><FaCompass /><div className="spec-text"><span>Exposure</span><strong>{apartment.specs.exposure}</strong></div></li>
              <li><FaRegCalendarAlt /><div className="spec-text"><span>Floor</span><strong>{apartment.specs.floor}</strong></div></li>
              <li><FaDollarSign /><div className="spec-text"><span>Price</span><strong>${apartment.price.toLocaleString()}</strong></div></li>
            </ul>
          </motion.div>
          <motion.div className="sidebar-widget" variants={itemFadeInUp}>
            <h3>Amenities</h3>
            <ul className="amenities-list">
              {apartment.amenities.map(amenity => (
                <li key={amenity.text}><FaRegCheckCircle /><span>{amenity.text}</span></li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="sidebar-widget" variants={itemFadeInUp}>
            <h3>Experience in 3D</h3>
            <p>Explore the layout in an immersive 3D environment for a complete virtual tour.</p>
            <motion.button className="button" whileTap={buttonTap}>View 3D Model</motion.button>
          </motion.div>
          <motion.div className="sidebar-widget" variants={itemFadeInUp}>
            <h3>Contact Agent</h3>
            <p>Ready to take the next step? Connect with our expert agent for personalized assistance and schedule a visit.</p>
            <motion.button className="button-outline" whileTap={buttonTap}>Contact Us</motion.button>
          </motion.div>
        </motion.aside>
      </div>
    </motion.div>
  );
};

export default ApartmentDetails; 