/**
 * Navbar Component
 * Renders the top navigation bar with logo and action buttons.
 */

import React from "react";
import { FiAlignCenter, FiSearch, FiMoon } from "react-icons/fi";

/**
 * Navbar functional component
 */
const Navbar: React.FC = () => {
  return (
    <nav className="app-navbar block">
      <div className="container py-5 lg:py-12 flex items-center justify-between">
        {/* Logo */}
        <h1 className="lg:text-3xl text-2xl app-logo">
          <a href="/" className="text-zinc-900 lg:font-extrabold font-bold">
            <span>PROTO</span>
          </a>
        </h1>

        {/* Action buttons */}
        <div className="flex items-center lg:gap-x-3 gap-x-2">
          <button className="inline-block px-3 py-3 rounded-full text-zinc-800">
            <FiAlignCenter size={26} strokeWidth={1.4} />
            <span className="hidden">(menu)</span>
          </button>
          <button className="inline-block px-3 py-3 rounded-full text-zinc-800">
            <FiSearch size={26} strokeWidth={1.4} />
            <span className="hidden">(search)</span>
          </button>
          <button className="inline-block px-3 py-3 rounded-full text-zinc-800">
            <FiMoon size={26} strokeWidth={1.4} />
            <span className="hidden">(dark mode toggle)</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
/**
 * Exporting Navbar as default for use in other components.
 */
