
import React from "react";

const DateFilter = ({ selectedDate, onSelectDate }) => {
  return (
    <div>
      <div className="date-options">
        <button
          className={`date-btn ${selectedDate === "today" ? 'active' : ''}`}
          onClick={() => onSelectDate("today")}
        >
          Today
        </button>
        <button
          className={`date-btn ${selectedDate === "tomorrow" ? 'active' : ''}`}
          onClick={() => onSelectDate("tomorrow")}
        >
          Tomorrow
        </button>
        <button
          className={`date-btn ${selectedDate === "weekend" ? 'active' : ''}`}
          onClick={() => onSelectDate("weekend")}
        >
          This Weekend
        </button>
      </div>
      <div className="date-range">
        <input type="checkbox" id="date-range" className="checkbox" />
        <label htmlFor="date-range" className="checkbox-label">Date Range</label>
      </div>
    </div>
  );
};

export default DateFilter;
