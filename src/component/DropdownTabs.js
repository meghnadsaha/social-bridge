// src/DropdownTabs.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DropdownTabs = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleDropdownChange = (e) => {
    setActiveTab(e.target.value);
  };

  return (
    <div className="container my-4">
      {/* Dropdown Above */}
      <div className="mb-3">
        <label htmlFor="tabDropdown" className="form-label">
          Select a Tab
        </label>
        <select
          className="form-select"
          id="tabDropdown"
          value={activeTab}
          onChange={handleDropdownChange}
        >
          <option value="home">Home</option>
          <option value="profile">Profile</option>
          <option value="contact">Contact</option>
        </select>
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

      {/* Tab Content */}
      <div className="tab-content mt-3">
        {activeTab === 'home' && (
          <div className="tab-pane fade show active p-3">
            <h3>Home Content</h3>
            <p>Welcome to the Home tab!</p>
          </div>
        )}
        {activeTab === 'profile' && (
          <div className="tab-pane fade show active p-3">
            <h3>Profile Content</h3>
            <p>Here is your profile information.</p>
          </div>
        )}
        {activeTab === 'contact' && (
          <div className="tab-pane fade show active p-3">
            <h3>Contact Content</h3>
            <p>Get in touch with us here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownTabs;
