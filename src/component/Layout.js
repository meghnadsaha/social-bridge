import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  return (
    <div className="dropdown-center mb-3 text-center">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Actions
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><Link className="dropdown-item" to="/home">Home</Link></li>
        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
        <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};


// Example Tab Components
const Home = () => <div><h3>Home Content</h3><p>Welcome to the Home tab!</p></div>;
const Profile = () => <div><h3>Profile Content</h3><p>Here is your profile information.</p></div>;
const Contact = () => <div><h3>Contact Content</h3><p>Get in touch with us here.</p></div>;


const TabContent = () => {
  const location = useLocation();

  const renderTabContent = () => {
    switch (location.pathname) {
      case '/home':
        return <Home/>;
      case '/profile':
        return <Profile/>;
      case '/contact':
        return <Contact/>;
      default:
        return <Home/>;
    }
  };

  return (
    <div className="tab-content mt-3">
           {/* Nav Tabs Below */}
           <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      {renderTabContent()}
    </div>
  );
};

const Layout = () => {
  return (
    <Router>
      <Header />
      <div className="container my-4">
      <h1>Dynamic Tab Switching via Dropdown</h1>

        <div className="row g-4">
          <div className="col-lg-8 vstack gap-4">
            <TabContent />
          </div>
          <div className="col-lg-4">
           <h1>Right sidebar content</h1>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
