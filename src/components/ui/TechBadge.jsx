/**
 * TechBadge - Reusable technology tag component
 * Displays a technology name in a styled pill/badge format
 * Supports size variants: "sm" (default) or "md"
 */
const TechBadge = ({ name, size = "sm" }) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border border-brown/20 bg-beige font-medium text-brown transition-all duration-300 hover:border-brown/40 hover:bg-brown hover:text-beige ${sizeClasses[size]}`}
    >
      {name}
    </div>
  );
};

export default TechBadge;
