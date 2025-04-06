
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FilterAccordion = ({ title, children, onClear }) => {
  const [isOpen, setIsOpen] = useState(title === "Date");

  return (
    <div className="filter-accordion">
      <div 
        className="filter-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="filter-title">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          <span>{title}</span>
        </div>
        {onClear && (
          <button 
            className="filter-clear"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
          >
            Clear
          </button>
        )}
      </div>
      <div className={`filter-content ${isOpen ? '' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

export default FilterAccordion;
