import React, { useEffect } from 'react';
import '../css/About.css';
import { useSession } from './SessionContext';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const About = function(){

  const { isSessionActive } = useSession();
  const navigate = useNavigate();
  useEffect(() => {
    // Redirect to dashboard if the session is already active
    if (!isSessionActive) {
      navigate('/');
    }
  }, [isSessionActive, navigate]);
    return (
      <div>
    <Helmet>
        <title>Attendance - About</title>
        <meta name="description" content="Attendance - About" />
      </Helmet>
      
    <div className="section about">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4">
      <h2>About</h2>
      
      </div>
        </div>
      </div>
    </div>
    </div>
    )
}

export default About