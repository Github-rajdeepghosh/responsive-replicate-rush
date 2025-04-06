
import { Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <header className="header">
      {/* Top Navigation Bar */}
      <div className="container top-nav">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img 
              src="/lovable-uploads/000c6802-9e83-42c6-b866-b442dbcca2e9.png" 
              alt="BookMyShow" 
            />
          </Link>
        </div>

        {/* Search Bar - Hide on Mobile */}
        {!isMobile && (
          <div className="search-container">
            <Search className="search-icon" size={18} />
            <input
              type="search"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              className="search-input"
            />
          </div>
        )}

        {/* City Selector and Sign In - Collapse on Mobile */}
        <div className="user-actions">
          {!isMobile && (
            <div className="city-selector">
              <span>Bhubaneswar</span>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
          <button className="sign-in-btn">Sign in</button>
          <button className="menu-btn">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Category Navigation */}
      <nav className="main-nav">
        <div className="container">
          <ul>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/stream">Stream</Link></li>
            <li><Link to="/events" className="active">Events</Link></li>
            <li><Link to="/plays">Plays</Link></li>
            <li><Link to="/sports">Sports</Link></li>
            <li><Link to="/activities">Activities</Link></li>
          </ul>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="secondary-nav">
        <div className="container">
          <ul>
            <li><Link to="/list-your-show">ListYourShow</Link></li>
            <li><Link to="/corporates">Corporates</Link></li>
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/gift-cards">Gift Cards</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
