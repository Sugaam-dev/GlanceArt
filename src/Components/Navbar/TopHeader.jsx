

import React from "react";
import { Link } from "react-router-dom"; 
import "./TopHeader.css";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

const TopHeader = ({ isWhiteMode }) => {
  return (
    <div className={`top-header ${isWhiteMode ? 'top-header-white' : ''}`}>
      <div className="top-left">
        <Link to="/about">About us</Link> 
        <Link to="/reviews">Reviews</Link>
        <Link to="/inspiration">Inspiration</Link>
        <Link to="/guide">Buying Guide</Link>
        <Link to="/b2b">B2B</Link>
      </div>

      <div className="top-right">
        <FaInstagram className="top-icon" />
        <FaFacebookF className="top-icon" />
        <FaPinterestP className="top-icon" />
      </div>
    </div>
  );
};

export default TopHeader;