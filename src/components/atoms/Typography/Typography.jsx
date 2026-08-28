import './Typography.css';

function Typography({
  children,
  variant = 'body',
  className = ''
}) {
  const Tag =
    variant === 'title' || variant === 'display'
      ? 'h1'
      : variant === 'heading'
      ? 'h2'
      : variant === 'subheading'
      ? 'h3'
      : 'p';

  return (
    <Tag className={`typography typography--${variant} ${className}`}>
      {children}
    </Tag>
  );
}

export default Typography;