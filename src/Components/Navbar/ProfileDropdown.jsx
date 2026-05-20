

// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ProfileDropdown.css';

// const ProfileDropdown = ({ userEmail, isWhiteMode }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSignOut = () => {
//     localStorage.clear();
//     setIsOpen(false);
//     navigate('/login');
//   };

//   return (
//     <div className="nk-profile-dropdown" ref={dropdownRef}>
//       <div className={`nk-profile-trigger ${isWhiteMode ? 'dark' : 'light'}`} onClick={() => setIsOpen(!isOpen)}>
//         <div className="nk-avatar-icon">
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//             <circle cx="12" cy="7" r="4"></circle>
//           </svg>
//         </div>
//         <span className="nk-arrow-icon">⌃</span>
//       </div>

//       {isOpen && (
//         <div className="nk-dropdown-menu">
//           <div className="nk-menu-user">
//             <div className="nk-avatar-small">👤</div>
//             <span className="nk-user-email-text">{userEmail}</span>
//           </div>
//           <hr />
//           <ul className="nk-menu-links">
//             {/* This line will now work because /profile is defined in your router */}
//             <li onClick={() => navigate('/profile')}>Profile</li>
//             <li className="nk-logout-btn" onClick={handleSignOut}>Sign out</li>
//             </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileDropdown;

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileDropdown.css';

const ProfileDropdown = ({ userEmail, isWhiteMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    localStorage.clear();
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <div className="nk-profile-dropdown" ref={dropdownRef}>
      <div className={`nk-profile-trigger ${isWhiteMode ? 'dark' : 'light'}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="nk-avatar-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="nk-dropdown-menu">
          <div className="nk-menu-user">
            <div className="nk-avatar-small">👤</div>
            <span className="nk-user-email-text">{userEmail}</span>
          </div>
          <hr />
          <ul className="nk-menu-links">
            <li onClick={() => { navigate('/profile'); setIsOpen(false); }}>Profile</li>
            <li className="nk-logout-btn" onClick={handleSignOut}>Sign out</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;