// Dashboard.js
import React, { useState, useEffect } from 'react';
import '../css/Dashboard.css';
import { useSession } from './SessionContext';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { format } from 'date-fns';

const Dashboard = () => {
  const { isSessionActive } = useSession();
  const navigate = useNavigate();
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'MMMM dd, yyyy');

  useEffect(() => {
    // Redirect to dashboard if the session is already active
    if (!isSessionActive) {
      navigate('/');
    }
  }, [isSessionActive, navigate]);



  const [checkinCurrentTime, setCheckinCurrentTime] = useState(null);
  const [checkoutCurrentTime, setCheckoutCurrentTime] = useState(null);
  const [isinButtonDisabled, setinButtonDisabled] = useState(false);
  const [isoutButtonDisabled, setoutButtonDisabled] = useState(true);
  const [shouldHideElement, setShouldHideElement] = useState(false);

  const checkinHandleClick = () => {
    const now = new Date();
    const checkinCcurrentTimeString = now.toLocaleTimeString();

    // Store current time in local storage
    localStorage.setItem('checkinCurrentTime', checkinCcurrentTimeString);
    setinButtonDisabled(true);setoutButtonDisabled(false);
    // Update state to display the current time
    setCheckinCurrentTime(checkinCcurrentTimeString);
  };

  const checkoutHandleClick = () => {
    const now = new Date();
    const checkoutCcurrentTimeString = now.toLocaleTimeString();

    // Store current time in local storage
    localStorage.setItem('checkoutCurrentTime', checkoutCcurrentTimeString);
    setShouldHideElement(true);
    // Update state to display the current time
    setCheckoutCurrentTime(checkoutCcurrentTimeString);
  };

  return (
    <div>
    <Helmet>
        <title>Attendance - Dashboard</title>
        <meta name="description" content="Attendance - Dashboard" />
      </Helmet>
    <div className="section dashboard">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
      <h2 className="title">Welcome to Attendance <b>Admin</b>'s Dashboard</h2>
      <div className='checkbox'>
      <h4>Mark the Attendance for today ({formattedDate}) </h4>
      <div class="row">
        <div className='col-lg-2 col-md-3'>
          <button className='checkin' onClick={checkinHandleClick} disabled={isinButtonDisabled}>CHECK IN</button>
        </div>
        <div className='col-lg-2 col-md-3'>
          <button className='checkout' onClick={checkoutHandleClick} disabled={isoutButtonDisabled}>CHECK OUT</button>
        </div>
      </div>
      {checkinCurrentTime && (
      <p className='checkinstatus' style={{ display: shouldHideElement ? 'none' : 'block' }}>You checked in at {checkinCurrentTime}</p>
      )}
      {checkoutCurrentTime && (
      <p className='checkinstatus'>You checked out at {checkoutCurrentTime}</p>
      )}
      </div>
      </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
