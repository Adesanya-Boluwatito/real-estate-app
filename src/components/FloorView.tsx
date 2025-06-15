import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mockData } from '../data/mockData';
import { FaChevronRight } from 'react-icons/fa';
import { pageAnimation, containerStagger, itemFadeInUp } from '../animations';

const FloorView: React.FC = () => {
  const { towerId } = useParams<{ towerId: string }>();
  const tower = mockData.find(t => t.id === towerId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!tower) {
    return <div className="view-container"><h2>Tower not found.</h2></div>;
  }

  return (
    <motion.div
      className="view-container floor-selection-view"
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="breadcrumb">
        <Link to="/">Towers</Link>
        <FaChevronRight />
        <span>Floor Selection</span>
      </div>
      <div className="view-header">
        <h1>Select Your Floor for {tower.name}</h1>
        <p>Explore the available floors in {tower.name} and choose the perfect level for your future home. Click on a floor to view its detailed apartment layouts.</p>
      </div>
      <motion.div
        className="floor-grid"
        variants={containerStagger}
        initial="hidden"
        animate="visible"
      >
        {tower.floors.map((floor) => (
          <motion.div key={floor.id} variants={itemFadeInUp}>
            <Link
              to={`/towers/${tower.id}/floors/${floor.id}`}
              className="floor-card"
            >
              {floor.floorNumber}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FloorView; 