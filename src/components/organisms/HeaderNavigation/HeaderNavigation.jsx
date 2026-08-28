import { useState } from 'react';
import { Link } from 'react-router-dom';

import NavigationItem
  from '../../molecules/NavigationItem/NavigationItem';

import './HeaderNavigation.css';

function HeaderNavigation() {

  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="site-header">

      <div className="site-header__inner">

        <Link
          to="/"
          className="site-brand"
          onClick={closeMenu}
        >

          <span className="site-brand__symbol">
            P
          </span>

          <span className="site-brand__text">

            <strong>
              PANGASINAN
            </strong>

            <small>
              HERITAGE
            </small>

          </span>

        </Link>


        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? '×' : '☰'}
        </button>


        <nav
          className={`site-nav ${
            open ? 'site-nav--open' : ''
          }`}
        >

          <NavigationItem
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavigationItem>

          <NavigationItem
            to="/heritage"
            onClick={closeMenu}
          >
            Heritage
          </NavigationItem>

          <NavigationItem
            to="/about"
            onClick={closeMenu}
          >
            Our Story
          </NavigationItem>

        </nav>

      </div>

    </header>
  );
}

export default HeaderNavigation;