
// Utility function to check if device is mobile
function isMobile() {
  return window.innerWidth < 768;
}

// Handle mobile responsive elements
function handleResponsiveElements() {
  const searchContainer = document.querySelector('.search-container');
  const citySelector = document.querySelector('.city-selector');
  
  if (isMobile()) {
    searchContainer.style.display = 'none';
    citySelector.style.display = 'none';
  } else {
    searchContainer.style.display = 'block';
    citySelector.style.display = 'flex';
  }
}

// Initialize accordions
function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.filter-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', (e) => {
      const accordionId = header.getAttribute('data-accordion');
      const content = document.getElementById(`${accordionId}-content`);
      const chevron = header.querySelector('svg');
      
      // If the click was on the clear button, don't toggle the accordion
      if (e.target.classList.contains('filter-clear')) {
        e.stopPropagation();
        return;
      }
      
      content.classList.toggle('hidden');
      
      // Rotate chevron
      if (content.classList.contains('hidden')) {
        chevron.classList.remove('chevron-up');
        chevron.classList.add('chevron-down');
      } else {
        chevron.classList.remove('chevron-down');
        chevron.classList.add('chevron-up');
      }
    });
  });
  
  // Open Date filter by default
  const dateContent = document.getElementById('date-content');
  const dateChevron = document.getElementById('date-chevron');
  dateContent.classList.remove('hidden');
  dateChevron.classList.remove('chevron-down');
  dateChevron.classList.add('chevron-up');
}

// Handle date filter buttons
function initDateFilters() {
  const dateButtons = document.querySelectorAll('.date-btn');
  const clearButton = document.getElementById('date-clear');
  
  dateButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      dateButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Show clear button
      clearButton.style.display = 'block';
    });
  });
  
  clearButton.addEventListener('click', (e) => {
    e.stopPropagation();
    
    // Remove active class from all buttons
    dateButtons.forEach(btn => btn.classList.remove('active'));
    
    // Hide clear button
    clearButton.style.display = 'none';
  });
}

// Handle category buttons
function initCategoryButtons() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
    });
  });
}

// Event data
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
  }
];

// Render event cards
function renderEvents() {
  const eventsContainer = document.getElementById('events-container');
  
  events.forEach(event => {
    const eventCard = document.createElement('a');
    eventCard.href = `/event/${event.id}`;
    eventCard.className = 'event-card';
    
    eventCard.innerHTML = `
      <div class="event-image-container">
        <img
          src="${event.imageUrl}"
          alt="${event.title}"
          class="event-image"
        />
        ${event.isPromoted ? '<div class="promoted-badge">PROMOTED</div>' : ''}
        <div class="event-date">
          ${event.date}
        </div>
      </div>
      <div class="event-details">
        <h3 class="event-title">${event.title}</h3>
        <p class="event-venue">${event.venue}</p>
        <div class="event-category">${event.category}</div>
        <div class="event-price">${event.price}</div>
      </div>
    `;
    
    eventsContainer.appendChild(eventCard);
  });
}

// Window resize event listener
window.addEventListener('resize', handleResponsiveElements);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  handleResponsiveElements();
  initAccordions();
  initDateFilters();
  initCategoryButtons();
  renderEvents();
});
