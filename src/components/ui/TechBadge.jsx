/**
 * TechBadge - Reusable technology tag component
 * Displays a technology name in a styled pill/badge format
 * Supports size variants: "sm" (default) or "md"
 * Supports variant: "default" or "accent" (vermillion)
 */
const TechBadge = ({ name, size = "sm", variant = "default" }) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
  };

  const variantClasses = {
    default:
      "border-brown/20 bg-beige text-brown hover:border-brown/40 hover:bg-ink hover:text-beige",
    accent:
      "border-vermillion/30 bg-beige text-vermillion hover:border-vermillion hover:bg-vermillion hover:text-beige",
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border font-medium transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {name}
    </div>
  );
};

export default TechBadge;
