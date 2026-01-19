/**
 * TechBadge - Reusable technology tag component
 * Displays a technology name in a styled pill/badge format
 * Supports size variants: "sm" (default) or "md"
 */
const TechBadge = ({ name, size = "sm" }) => {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <div
      className={`flex items-center rounded-full bg-red-800/10 text-red-700 ${sizeClasses[size]}`}
    >
      {name}
    </div>
  );
};

export default TechBadge;
