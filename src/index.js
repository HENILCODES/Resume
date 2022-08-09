import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header,Social} from './header';
import Navbar from './navbar';
import About from './about';
import './CSS/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Social nikename="Henil Code"/>
    <Header name="Henil Prajapati"/>
    <Navbar />
    <About age="19" email="henilcode@gmail.com" address="Vapi Gunjan" number="9081807209" />
  </React.StrictMode>
);

