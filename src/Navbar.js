import React, { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="./netflix-logo.png" alt="netflix-logo" />
          <span>Home</span>
          <span>Series</span>
          <span>Films</span>
          <span>New & Popular</span>
          <span>My List</span>
          <span>Browse by Languages</span>
        </div>
        <div className="right">{/* Icons */}</div>

        <img src="" />
        <div className="profile">
          <div className="options"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
