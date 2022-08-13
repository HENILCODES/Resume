import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header,Social} from './header';
import Navbar from './navbar';
import {About,Knowledge} from './content';
import { Project } from './project';
import './CSS/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Social nikename="Henil Code"/>
    <Header name="Henil Prajapati"/>
    <Navbar />
    <About email="henilcode@gmail.com" address="Vapi Gunjan" number="9081807209" />
    <Knowledge />
    <Project/>
  </React.StrictMode>
);

