import { BrowserRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import MainNavBar from './pages/MainNavBar';
import AdminNavBar from './admin/AdminNavBar';
import StudentNavBar from './student/StudentNavBar';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    const adminStatus = sessionStorage.getItem('isAdmin') === 'true';
    const studentStatus = sessionStorage.getItem('isStudent') === 'true';

    setIsAdmin(adminStatus);
    setIsStudent(studentStatus);
  }, []);

  return (
     <BrowserRouter>
         {isAdmin && <AdminNavBar/>}
         {isStudent && <StudentNavBar/>}
         {!isAdmin && !isStudent && <MainNavBar/>}
     </BrowserRouter>
  );
}

export default App;
