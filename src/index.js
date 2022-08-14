import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header,Social} from './header';
import Navbar from './navbar';
import {About,Knowledge} from './content';
import { Project } from './project';
import './CSS/main.css';

const name = "Henil Code";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Social nikename={name}/>
    <Header name="Henil Prajapati"/>
    <Navbar />
    <About email="henilcode@gmail.com" address="Vapi Gunjan" number="9081807209" />
    <Knowledge />
    <Project/>
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
      <div className="thank text-center">
        <h1 className='white' ><i class="bi bi-emoji-smile"></i> Thank You <i className="bi bi-emoji-smile"></i></h1>
      </div>
      <div className="footer">
        <span>&copy; 2022 {name}</span>
      </div>
  </React.StrictMode>
);