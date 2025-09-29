import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  link?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
};

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
