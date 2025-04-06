
import { useState } from "react";
import Navbar from "@/components/Navbar";
import EventCategory from "@/components/EventCategory";
import EventCard from "@/components/EventCard";
import FilterAccordion from "@/components/FilterAccordion";
import DateFilter from "@/components/DateFilter";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const EventsPage = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const isMobile = useIsMobile();

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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Section */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-xl font-bold mb-4">Filters</h2>
              
              <div className="space-y-3">
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
                  {/* Languages filter content */}
                  <div className="text-sm text-gray-500">
                    Language filters would go here
                  </div>
                </FilterAccordion>
                
                <FilterAccordion title="Categories" onClear={() => {}}>
                  {/* Categories filter content */}
                  <div className="text-sm text-gray-500">
                    Category filters would go here
                  </div>
                </FilterAccordion>
                
                <FilterAccordion title="More Filters" onClear={() => {}}>
                  {/* More filters content */}
                  <div className="text-sm text-gray-500">
                    Additional filters would go here
                  </div>
                </FilterAccordion>
                
                <FilterAccordion title="Price" onClear={() => {}}>
                  {/* Price filter content */}
                  <div className="text-sm text-gray-500">
                    Price range filters would go here
                  </div>
                </FilterAccordion>
              </div>
              
              <div className="mt-4">
                <Button className="w-full border border-rose-500 bg-white hover:bg-rose-50 text-rose-500">
                  Browse by Venues
                </Button>
              </div>
            </div>
          </div>
          
          {/* Events Content */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-4">Events In Bhubaneswar</h1>
              
              {/* Categories Bar */}
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {events.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventsPage;
