/**
 * Button Component
 * A reusable button component that supports optional links, custom classes, and button types.
 */

import React from "react";

/**
 * Props type for Button component
 */
type ButtonProps = {
  children: React.ReactNode; // Content inside the button
  link?: string; // Optional URL; if provided, an <a> overlay is rendered
  className?: string; // Optional additional CSS classes
  type?: "button" | "submit" | "reset"; // HTML button type
};

/**
 * Button component
 * Renders a styled button with optional link overlay.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  link,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`text-zinc-300 bg-zinc-950 rounded-full px-8 py-2.5 relative font-medium inline-block ${className}`}
    >
      {link && (
        <a href={link} className="absolute top-0 left-0 w-full h-full"></a>
      )}
      {children}
    </button>
  );
};

export default Button;
/**
 * Exporting Button as default for use in other components.
 */
