
import React from 'react';

interface EventCategoryProps {
  name: string;
  isActive?: boolean;
}

const EventCategory: React.FC<EventCategoryProps> = ({ name, isActive = false }) => {
  return (
    <button className={`category-btn ${isActive ? 'active' : ''}`}>
      {name}
    </button>
  );
};

export default EventCategory;
