import './Icon.css';

function Icon({ symbol, label }) {
  return (
    <span
      className="icon"
      role="img"
      aria-label={label}
    >
      {symbol}
    </span>
  );
}

export default Icon;