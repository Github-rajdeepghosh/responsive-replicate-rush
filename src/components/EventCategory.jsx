
import React from 'react';

const EventCategory = ({ name, isActive = false }) => {
  return (
    <button className={`category-btn ${isActive ? 'active' : ''}`}>
      {name}
    </button>
  );
};

export default EventCategory;
