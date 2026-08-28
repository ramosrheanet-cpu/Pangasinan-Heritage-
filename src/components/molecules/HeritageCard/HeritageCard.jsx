import { Link } from 'react-router-dom';

import './HeritageCard.css';

function HeritageCard({ item }) {

  return (
    <article className="heritage-card">

      <div className="heritage-card__image-wrapper">

        {item.image ? (
  <img
    src={item.image}
    alt={item.title}
    className="heritage-card__image"
  />
) : (
  <div className="heritage-card__placeholder">
    {item.title}
  </div>
)}

        <span className="heritage-card__category">
          {item.category}
        </span>

      </div>


      <div className="heritage-card__content">

        <span className="heritage-card__location">
          {item.location}
        </span>

        <h3>
          {item.title}
        </h3>

        <p>
          {item.description}
        </p>

        <Link
          to={`/heritage#${item.id}`}
          className="heritage-card__link"
        >
          Discover story →
        </Link>

      </div>

    </article>
  );
}

export default HeritageCard;