import React from 'react';
import "./layout.css";
import { Outlet } from 'react-router-dom';

function Layout({ children }) {
  return(
    <div className="layout">
      <div className="header">
        <a href="/">
          <div className="divine">V I G N E S H</div>
          <div className="divine">R E D D Y</div>
        </a>
        <sub>Discipline is dignity. Hesitation is defeat.</sub>
      </div>
      <div className="menubar">
        <div className="menu">
        <a href="/blog">Read</a>
        <a href="https://www.youtube.com/@kerneldiver" target="_blank">Watch</a>
        <a href="/contact">Contact</a>
        <a href="#">Play</a>
        <a href="#">Shop</a>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
