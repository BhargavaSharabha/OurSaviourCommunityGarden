import React, { useState, useEffect } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import { jwtDecode } from 'jwt-decode';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');


useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log('Decoded JWT:', decoded); // Log the decoded token
        if (decoded.exp * 1000 > Date.now()) {
          setIsAuthenticated(true);
          if (decoded.user_id) {
            fetchUsername(decoded.user_id);
          } else {
            console.error('User ID not found in token');
          }
        } else {
          localStorage.removeItem('token');
        }
      } catch (error) {
        console.error('Failed to decode JWT:', error);
        localStorage.removeItem('token');
      }
    }
  }, []);

  const fetchUsername = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8000/users/${userId}`);
      const data = await response.json();
      setUsername(data.username);
    } catch (error) {
      console.error('Failed to fetch username:', error);
    }
  };

  return (
    <div className="App">
            {isAuthenticated ? (
                <Dashboard setAuth={setIsAuthenticated} username={username} />
            ) : (
                <Login setAuth={setIsAuthenticated} />
            )}
        </div>
  );
}

export default App;
