import React, { useState, useEffect } from 'react';
import { useSession } from './SessionContext';
import '../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { activateSession, isSessionActive } = useSession();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
  useEffect(() => {
    // Redirect to dashboard if the session is already active
    if (isSessionActive) {
      navigate('/dashboard');
    }
  }, [isSessionActive, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Empty validation
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    // Simulate authentication logic (replace with actual authentication logic)
    if (username === 'admin' && password === 'admin@2024') {
      activateSession();
      setError('');
      setUsername('');
      setPassword('');
      navigate('/dashboard');
    } else {
      setError('Login failed');
    }
  };

  return (
    <div>
      <Helmet>
        <title>Attendance - Home</title>
        <meta name="description" content="Attendance - Home" />
      </Helmet>
    
    <div className="section home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="error-message">{error}</p>}
              <button type="submit">login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
