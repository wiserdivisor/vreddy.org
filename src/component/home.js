import React from 'react';
import dp from "./../suntex.png";

import "./home.css"

import GraphBox from "./graphbox.js";

function Home({ children }) {
  return(
    <div className="body">

      <GraphBox />

      <div className="intro-container">
        <img className="surya" src={dp}></img>
        <div className="intro">
          Hello, I'm <p className="divine-inline">Vignesh</p><br/>
          I enjoy solving problems with software/hardware.<br/>
          I primarily speak C++17 and Python.<br/>
          I use frames like: Qt || React || Node.
          {/*
          Got a hard problem? Tell me more.<br/>
          Mail: vignesh@vreddy.org*/}
        </div>
      </div>
      <div className="question">
        LOOKING FOR A FULLSTACKER?
      </div>
      <div className="brag-container">
        <div className="eclipse-container">
          <div className="eclipse">
            <div className="undivine-inline">I can handle your Entire Solution. End to End.</div>
          </div>
        </div>
        <div className="row">
          <div className="portrait-card">
            AUT<br/>OMA<br/>TION
          </div>
          <div className="portrait-card">
            FRO<br/>NTE<br/>ND
          </div>
          <div className="portrait-card">
            BAC<br/>KE<br/>ND
          </div>
          <div className="portrait-card">
            DAT<br/>AB<br/>ASE
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;
