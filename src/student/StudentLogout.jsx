import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StudentLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      
      sessionStorage.removeItem('isStudent');
      sessionStorage.removeItem('studentUsername');
      sessionStorage.removeItem('studentName');
      sessionStorage.removeItem('studentEmail');
      sessionStorage.removeItem('studentId');

      console.log('Student logged out successfully');

      setTimeout(() => {
        window.location.href = '/';
      }, 500);
    };

    handleLogout();
  }, [navigate]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2>Logging out...</h2>
        <p>You will be redirected shortly.</p>
      </div>
    </div>
  );
}
