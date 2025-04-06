
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
    <Link to={`/event/${id}`} className="event-card">
      <div className="event-image-container">
        <img
          src={imageUrl}
          alt={title}
          className="event-image"
        />
        {isPromoted && (
          <div className="promoted-badge">
            PROMOTED
          </div>
        )}
        <div className="event-date">
          {date}
        </div>
      </div>
      <div className="event-details">
        <h3 className="event-title">{title}</h3>
        <p className="event-venue">{venue}</p>
        <div className="event-category">{category}</div>
        <div className="event-price">{price}</div>
      </div>
    </Link>
  );
};

export default EventCard;
