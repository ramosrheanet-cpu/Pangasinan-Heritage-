import MainTemplate
  from '../../components/templates/MainTemplate/MainTemplate';

import Typography
  from '../../components/atoms/Typography/Typography';

import './About.css';

function About() {

  return (
    <MainTemplate>

      <section className="about-hero">

        <span>
          OUR STORY
        </span>

        <h1>
          Preserving stories.
          Connecting generations.
        </h1>

        <p>
          Pangasinan Heritage is a digital
          showcase created to make the province's
          natural and cultural heritage easier
          to explore and appreciate.
        </p>

      </section>


      <section className="about-content">

        <article>

          <span>
            WHY THIS PROJECT
          </span>

          <h2>
            Heritage should be accessible.
          </h2>

          <p>
            Cultural heritage is not limited to
            museums and historical buildings.
            It can be found in food, festivals,
            faith, landscapes, livelihoods,
            stories and everyday traditions.
          </p>

          <p>
            This website brings those elements
            together in one responsive digital
            experience.
          </p>

        </article>


        <article>

          <span>
            A LIVING HERITAGE
          </span>

          <h2>
            More than a destination.
          </h2>

          <p>
            Pangasinan's identity has been shaped
            by its relationship with the sea,
            agriculture, communities and cultural
            traditions.
          </p>

          <p>
            The goal of this project is not only
            to show places, but to tell the stories
            behind them.
          </p>

        </article>

      </section>


      <section className="about-highlight">

        <div>

          <span>
            HERITAGE × DIGITAL
          </span>

          <h2>
            Designing a digital
            doorway to Pangasinan.
          </h2>

        </div>

        <p>
          Built using a component-based
          Atomic Design approach, the website
          is designed to remain consistent,
          reusable and responsive across
          desktop, tablet and mobile devices.
        </p>

      </section>

    </MainTemplate>
  );
}

export default About;