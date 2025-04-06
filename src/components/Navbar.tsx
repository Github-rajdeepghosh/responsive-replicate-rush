
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";

const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <header className="border-b border-gray-200 bg-white">
      {/* Top Navigation Bar */}
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/000c6802-9e83-42c6-b866-b442dbcca2e9.png" 
              alt="BookMyShow" 
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Search Bar - Hide on Mobile */}
        {!isMobile && (
          <div className="flex-1 mx-6">
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="search"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
              />
            </div>
          </div>
        )}

        {/* City Selector and Sign In - Collapse on Mobile */}
        <div className="flex items-center gap-2">
          {!isMobile && (
            <div className="flex items-center mr-2">
              <span className="text-sm font-medium">Bhubaneswar</span>
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
          <Button className="rounded-md bg-rose-500 hover:bg-rose-600 text-white">Sign in</Button>
          <Button variant="ghost" className="p-1 lg:hidden">
            <Menu size={24} />
          </Button>
        </div>
      </div>

      {/* Category Navigation */}
      <nav className="bg-white border-b border-gray-200 overflow-x-auto">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-8 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
            <li><Link to="/movies" className="hover:text-rose-500">Movies</Link></li>
            <li><Link to="/stream" className="hover:text-rose-500">Stream</Link></li>
            <li><Link to="/events" className="hover:text-rose-500 text-rose-500">Events</Link></li>
            <li><Link to="/plays" className="hover:text-rose-500">Plays</Link></li>
            <li><Link to="/sports" className="hover:text-rose-500">Sports</Link></li>
            <li><Link to="/activities" className="hover:text-rose-500">Activities</Link></li>
          </ul>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="hidden lg:block bg-white">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-8 py-3 text-xs text-gray-700 justify-end">
            <li><Link to="/list-your-show" className="hover:text-rose-500">ListYourShow</Link></li>
            <li><Link to="/corporates" className="hover:text-rose-500">Corporates</Link></li>
            <li><Link to="/offers" className="hover:text-rose-500">Offers</Link></li>
            <li><Link to="/gift-cards" className="hover:text-rose-500">Gift Cards</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
