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
        <a href="/blog">Read</a>
        <a href="#" target="blank">Watch</a>
        <a href="#" target="blank">Play</a>
        <a href="#" target="blank">Shop</a>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
