import { Link } from 'react-router-dom';

import MainTemplate
  from '../../components/templates/MainTemplate/MainTemplate';

import Typography
  from '../../components/atoms/Typography/Typography';

import Button
  from '../../components/atoms/Button/Button';

import HeritageGrid
  from '../../components/organisms/HeritageGrid/HeritageGrid';

import HeritageStats
  from '../../components/organisms/HeritageStats/HeritageStats';

import CultureSection
  from '../../components/organisms/CultureSection/CultureSection';

import heritageData
  from '../../data/heritageData';

import './Home.css';

function Home() {
  const featured = heritageData.filter(
    item => item.featured
  );

  return (
    <MainTemplate>

      {/* HERO */}

      <section className="hero">

        <div className="hero__overlay"></div>

        <div className="hero__content">

          <span className="hero__eyebrow">
            PANGASINAN HERITAGE
          </span>

          <h1>
            Where heritage
            meets the sea.
          </h1>

          <p>
            Discover the stories, traditions,
            landscapes and flavors that make
            Pangasinan uniquely Pangasinense.
          </p>

          <div className="hero__actions">

            <Link to="/heritage">
              <Button>
                Explore Heritage
              </Button>
            </Link>

            <Link to="/about">
              <Button variant="ghost">
                Our Story
              </Button>
            </Link>

          </div>

        </div>

        <div className="hero__scroll">
          SCROLL TO DISCOVER
        </div>

      </section>


      {/* INTRODUCTION */}

      <section className="intro-section">

        <div className="intro-section__label">
          THE PROVINCE
        </div>

        <div className="intro-section__content">

          <h2>
            A province shaped by
            land, sea and memory.
          </h2>

          <div>

            <p>
              Pangasinan carries a heritage
              shaped by its coastline,
              agricultural communities,
              fishing traditions, faith,
              cuisine and historic places.
            </p>

            <p>
              Its name is associated with
              <em> panag-asin-an</em>,
              meaning a place where salt
              is made — a reminder of the
              province's longstanding connection
              with the sea.
            </p>

            <Link to="/about">
              Discover the story →
            </Link>

          </div>

        </div>

      </section>


      {/* FEATURED HERITAGE */}

      <section className="featured-section">

        <div className="section-heading">

          <div>

            <span>
              DISCOVER
            </span>

            <h2>
              Stories of place
            </h2>

          </div>

          <Link to="/heritage">
            View all heritage →
          </Link>

        </div>

        <HeritageGrid
          items={featured}
        />

      </section>


      {/* CULTURE */}

      <CultureSection />


      {/* STATISTICS */}

      <HeritageStats />

    </MainTemplate>
  );
}

export default Home;