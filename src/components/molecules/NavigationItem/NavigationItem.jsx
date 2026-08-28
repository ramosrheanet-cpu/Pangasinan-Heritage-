import { NavLink } from 'react-router-dom';
import './NavigationItem.css';

function NavigationItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `navigation-item ${
          isActive ? 'navigation-item--active' : ''
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default NavigationItem;