
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterAccordionProps {
  title: string;
  children: React.ReactNode;
  onClear?: () => void;
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({
  title,
  children,
  onClear,
}) => {
  const [isOpen, setIsOpen] = useState(title === "Date");

  return (
    <div className="border-b border-gray-200">
      <div 
        className="flex items-center justify-between py-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          <span className="ml-2 text-gray-700 font-medium">{title}</span>
        </div>
        {onClear && (
          <button 
            className="text-gray-500 text-sm hover:text-gray-700"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
          >
            Clear
          </button>
        )}
      </div>
      <div className={`pb-3 ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

export default FilterAccordion;
