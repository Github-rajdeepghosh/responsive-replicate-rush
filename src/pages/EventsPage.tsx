
import { useState } from "react";
import Navbar from "@/components/Navbar";
import EventCategory from "@/components/EventCategory";
import EventCard from "@/components/EventCard";
import FilterAccordion from "@/components/FilterAccordion";
import DateFilter from "@/components/DateFilter";

const EventsPage = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const eventCategories = [
    { name: "Comedy Shows", isActive: true },
    { name: "Music Shows", isActive: false },
    { name: "Performances", isActive: false },
    { name: "Workshops", isActive: false },
    { name: "Kids", isActive: false },
    { name: "Exhibitions", isActive: false },
  ];

  const events = [
    {
      id: "1",
      title: "Sagar Waali Qawwali Bharat Tour 2025",
      venue: "Dreamcity Resorts: Bhubaneswar",
      category: "Concerts",
      price: "₹ 999 onwards",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=967&q=80",
      date: "Sat, 17 May",
      isPromoted: true,
    },
    {
      id: "2",
      title: "Sit Down Ashish ft. Ashish Vidyarthi",
      venue: "The Space: Bhubaneswar",
      category: "Stand up Comedy",
      price: "₹ 499",
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
      date: "Sun, 20 Apr",
      isPromoted: true,
    },
    {
      id: "3",
      title: "Alan Walker India Tour - Bhubaneshwar",
      venue: "Wonderla: Bhubaneswar",
      category: "Concerts",
      price: "₹ 1000 onwards",
      imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
      date: "Sat, 19 Apr",
    },
    {
      id: "4",
      title: "MAIN SHAYAR TOH NAHI ft Manhar Seth",
      venue: "Bhanja Kala Mandap: Bhubaneswar",
      category: "Stand up Comedy",
      price: "₹ 499 onwards",
      imageUrl: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
      date: "Fri, 11 Apr",
    },
  ];

  const handleClearDateFilter = () => {
    setSelectedDate(null);
  };

  return (
    <div>
      <Navbar />
      
      <div className="container main-content">
        {/* Filters Section */}
        <div className="filters-section">
          <div className="filters-card">
            <h2 className="filters-title">Filters</h2>
            
            <div>
              <FilterAccordion 
                title="Date" 
                onClear={selectedDate ? handleClearDateFilter : undefined}
              >
                <DateFilter 
                  selectedDate={selectedDate} 
                  onSelectDate={setSelectedDate} 
                />
              </FilterAccordion>
              
              <FilterAccordion title="Languages" onClear={() => {}}>
                <div>
                  Language filters would go here
                </div>
              </FilterAccordion>
              
              <FilterAccordion title="Categories" onClear={() => {}}>
                <div>
                  Category filters would go here
                </div>
              </FilterAccordion>
              
              <FilterAccordion title="More Filters" onClear={() => {}}>
                <div>
                  Additional filters would go here
                </div>
              </FilterAccordion>
              
              <FilterAccordion title="Price" onClear={() => {}}>
                <div>
                  Price range filters would go here
                </div>
              </FilterAccordion>
            </div>
            
            <button className="browse-venues-btn">
              Browse by Venues
            </button>
          </div>
        </div>
        
        {/* Events Content */}
        <div className="events-section">
          <div>
            <h1 className="events-title">Events In Bhubaneswar</h1>
            
            {/* Categories Bar */}
            <div className="event-categories">
              {eventCategories.map((category, index) => (
                <EventCategory 
                  key={index}
                  name={category.name} 
                  isActive={category.isActive} 
                />
              ))}
            </div>
          </div>
          
          {/* Event Cards Grid */}
          <div className="events-grid">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
