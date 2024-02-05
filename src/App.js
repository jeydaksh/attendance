import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/dashboard'
            element={<Dashboard />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
