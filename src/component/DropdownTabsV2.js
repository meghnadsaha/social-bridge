// src/DropdownTabs.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure JS is imported for Bootstrap functionality

const DropdownTabsV2 = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [dropdownValue, setDropdownValue] = useState('Action');

  const handleDropdownChange = (value) => {
    setDropdownValue(value);
    setActiveTab(value.toLowerCase());
  };

  return (
    <div className="container my-4">
      {/* Centered Dropdown Above */}
      <div className="dropdown-center mb-3 text-center">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {dropdownValue}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="#" onClick={() => handleDropdownChange('home')}>
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={() => handleDropdownChange('profile')}>
              Action two
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={() => handleDropdownChange('contact')}>
              Action three
            </a>
          </li>
        </ul>
      </div>




      {/* Nav Tabs Below */}
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
            type="button"
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
            type="button"
          >
            Profile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
            type="button"
          >
            Contact
          </button>
        </li>
      </ul>


    </div>
  );
};





export default DropdownTabsV2;

