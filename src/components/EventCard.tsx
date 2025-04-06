
import { Link } from "react-router-dom";

interface EventCardProps {
  id: string;
  title: string;
  venue: string;
  category: string;
  price: string;
  imageUrl: string;
  date: string;
  isPromoted?: boolean;
}

const EventCard = ({
  id,
  title,
  venue,
  category,
  price,
  imageUrl,
  date,
  isPromoted = false,
}: EventCardProps) => {
  return (
    <Link to={`/event/${id}`} className="block rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-72 object-cover object-center"
        />
        {isPromoted && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
            PROMOTED
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2">
          {date}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-bold text-base line-clamp-2 mb-1">{title}</h3>
        <p className="text-sm text-gray-700 mb-1">{venue}</p>
        <div className="text-sm text-gray-600 mb-1">{category}</div>
        <div className="text-gray-800 font-medium">{price}</div>
      </div>
    </Link>
  );
};

export default EventCard;
