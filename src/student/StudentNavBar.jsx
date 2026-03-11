import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import './student.css';
import StudentLogout from './StudentLogout';

export default function StudentNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isStudent');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="customer-container">
      <nav className="customer-navbar">
        <div className="navbar-header">
          <h1>Student Dashboard</h1>
        </div>
        <ul className="navbar-links">
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        </ul>
      </nav>

      <div className="student-content">
        <Routes>
          <Route path="/student/logout" element={<StudentLogout />} />
        </Routes>
      </div>
    </div>
  );
}
