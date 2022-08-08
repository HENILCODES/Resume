import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './topbar';
import Navbar from './navbar';
import Social from './social';
import About from './about';
import './CSS/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Social />
    <Header />
    <Navbar />
    <About />
  </React.StrictMode>
);

