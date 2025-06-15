import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mockData } from '../data/mockData';
import { FaChevronRight, FaRegCheckCircle } from 'react-icons/fa';
import { pageAnimation, containerStagger, itemFadeInUp, buttonTap } from '../animations';

const ApartmentView: React.FC = () => {
  const { towerId, floorId } = useParams<{ towerId: string; floorId: string }>();
  const tower = mockData.find(t => t.id === towerId);
  const floor = tower?.floors.find(f => f.id === floorId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [floorId]);

  if (!tower || !floor) {
    return <div className="view-container"><h2>Apartment or Floor not found.</h2></div>;
  }

  const averagePrice = floor.apartments.reduce((acc, apt) => acc + apt.price, 0) / floor.apartments.length;

  return (
    <motion.div
      className="view-container"
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="breadcrumb">
        <Link to="/">Towers</Link>
        <FaChevronRight />
        <Link to={`/towers/${tower.id}`}>Floor Selection</Link>
        <FaChevronRight />
        <span>Layout Gallery</span>
      </div>
      <div className="apartment-gallery-layout">
        <motion.aside
          className="sidebar"
          variants={containerStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="sidebar-widget" variants={itemFadeInUp}>
            <h3>Floor {floor.floorNumber} Overview</h3>
            <div className="widget-content">
              <div className="info-row">
                <span>Tower:</span>
                <strong>{tower.name}</strong>
              </div>
              <div className="info-row">
                <span>Available Layouts:</span>
                <strong>{floor.apartments.length}</strong>
              </div>
              <div className="info-row">
                <span>Average Price:</span>
                <strong>${averagePrice.toLocaleString()}</strong>
              </div>
            </div>
          </motion.div>
          <motion.div className="sidebar-widget" variants={itemFadeInUp}>
            <h3>Key Features of This Floor</h3>
            <ul className="widget-list">
              {floor.keyFeatures.map(feature => (
                <li key={feature.text}>
                  <FaRegCheckCircle />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.aside>
        <main className="apartment-list-container">
          <div className="view-header">
            <h1>Apartment Layout Gallery</h1>
          </div>
          <motion.div
            className="apartment-list"
            variants={containerStagger}
            initial="hidden"
            animate="visible"
          >
            {floor.apartments.map((apartment) => (
              <motion.div key={apartment.id} variants={itemFadeInUp}>
                <Link to={`/towers/${tower.id}/floors/${floor.id}/apartments/${apartment.id}`} className="apartment-card">
                  <div className="apartment-card-image">
                    <img src={apartment.thumbnailUrl} alt={apartment.unitType} />
                  </div>
                  <div className="apartment-card-content">
                    <h4>{apartment.unitType}</h4>
                    <div className="apartment-details-grid">
                      <span>Size:</span><span>{apartment.area} sq ft</span>
                      <span>Rooms:</span><span>{apartment.specs.bedrooms} Bed, {apartment.specs.bathrooms} Bath</span>
                      <span>Price:</span><span>${apartment.price.toLocaleString()}</span>
                    </div>
                    <motion.div className="button" whileTap={buttonTap}>View Details</motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
};

export default ApartmentView; 