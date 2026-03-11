import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Registration from './Registration';
import AdminLogin from './AdminLogin';
import './style.css';

const MainNavBar = () => {
  return (
    <div>

      <nav className="navbar">
        <div className="navbar-container">

          <div className="navbar-logo">
            <Link to="/" className="logo-link">
            </Link>
          </div>

          <ul className="nav-menu">

            <li className="nav-item">
              <Link to="/registration" className="nav-link">
                Registration
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/admin-login" className="nav-link">
                Admin Login
              </Link>
            </li>

          </ul>

        </div>
      </nav>

      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>

    </div>
  );
};

export default MainNavBar;