import React, { useState } from "react";
import { FaCompass, FaIdBadge, FaUserCog, FaBookmark } from "react-icons/fa";
import { FaUser, FaRegCommentDots, FaCog, FaQuestionCircle,} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileSettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">
        <span className="icon-wrapper">
          <FaUser className="custom-icon" />
        </span>
      </button>
      {isOpen && (
        <div id="myDropdown" className="dropdown-content">
          <Link to="#home">
            <FaIdBadge /> Profile
          </Link>
          <Link to="#about">
            <FaUserCog /> About
          </Link>
          <Link to="#User resume">
            <FaCompass /> My resume
          </Link>
          <Link to="#users jobs">
            <FaBookmark /> My Jobs
          </Link>
          <Link to="#reviews">
            <FaRegCommentDots /> Users Reviews
          </Link>
          <Link to="#user settings">
            <FaCog /> Users Settings
          </Link>
          <Link to="#about">
            <FaQuestionCircle /> Help center
          </Link>
          <hr />
          <h9>
            ©2023Career-facet-cookies-privacy-Terms Accessibility at
            career-facet
          </h9>
          <hr />
          <Link to="#logout">Logout</Link>
        </div>
      )}
    </div>
  );
};



export default ProfileSettingsDropdown;
