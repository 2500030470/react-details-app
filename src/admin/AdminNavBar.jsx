import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import './admin.css';
import ViewStudents from './ViewStudents';
import AdminLogout from './AdminLogout';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="admin-container">
      <nav className="admin-navbar">
        <div className="navbar-header">
          <h1>Admin Dashboard</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/admin/view-students" className="nav-link">View Students</Link></li>
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        </ul>
      </nav>

      <div className="admin-content">
        <Routes>
          <Route path="/admin/view-customers" element={<ViewStudents />} />
          <Route path="/admin/logout" element={<AdminLogout />} />
        </Routes>
      </div>
    </div>
  );
}
