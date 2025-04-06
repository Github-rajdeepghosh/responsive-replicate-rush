
import React from 'react';

interface EventCategoryProps {
  name: string;
  isActive?: boolean;
}

const EventCategory: React.FC<EventCategoryProps> = ({ name, isActive = false }) => {
  return (
    <button 
      className={`px-4 py-1 rounded-full text-sm ${
        isActive 
          ? 'bg-rose-500 text-white' 
          : 'bg-white text-rose-500 border border-rose-500 hover:bg-rose-50'
      }`}
    >
      {name}
    </button>
  );
};

export default EventCategory;
