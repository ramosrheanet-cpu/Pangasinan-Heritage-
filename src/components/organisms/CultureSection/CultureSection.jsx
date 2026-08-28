import cultureData from '../../../data/cultureData';
import './CultureSection.css';

function CultureSection() {
  return (
    <section className="culture-section">

      <div className="culture-section__heading">

        <span>
          LIVING HERITAGE
        </span>

        <h2>
          Culture is more than history.
        </h2>

        <p>
          It lives through the food we share,
          festivals we celebrate and traditions
          passed from one generation to another.
        </p>

      </div>

      <div className="culture-section__grid">

        {cultureData.map((item) => (
          <article
            className="culture-card"
            key={item.title}
          >

            <span className="culture-card__category">
              {item.category}
            </span>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.description}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}

export default CultureSection;