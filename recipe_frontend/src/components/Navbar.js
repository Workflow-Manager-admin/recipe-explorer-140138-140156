import React from "react";
import "./Navbar.css";

/**
 * PUBLIC_INTERFACE
 * Navigation bar with application title and search input.
 * 
 * Props:
 *   - search: current search string
 *   - onSearchChange: (event) => void
 */
function Navbar({ search, onSearchChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="brand-primary">Recipe</span>
        <span className="brand-secondary">Explorer</span>
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search recipes or ingredients..."
        value={search}
        onChange={onSearchChange}
        aria-label="Search recipes"
      />
    </nav>
  );
}

export default Navbar;
