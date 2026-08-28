import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">

      <div className="site-footer__top">

        <div className="site-footer__brand">

          <div className="site-footer__logo">
            P
          </div>

          <div>
            <strong>
              PANGASINAN
            </strong>

            <span>
              HERITAGE
            </span>
          </div>

        </div>


        <p>
          A digital showcase of Pangasinan's
          culture, history, places and traditions.
        </p>


        <nav>

          <Link to="/">
            Home
          </Link>

          <Link to="/heritage">
            Heritage
          </Link>

          <Link to="/about">
            Our Story
          </Link>

        </nav>

      </div>


      <div className="site-footer__bottom">

        <span>
          © 2026 Pangasinan Heritage
        </span>

        <span>
          Built with Atomic Design
        </span>

      </div>

    </footer>
  );
}

export default Footer;