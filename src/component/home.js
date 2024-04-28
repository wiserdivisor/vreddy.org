import React from 'react';
import dp from "./../suntex.png";

import "./home.css"

import GraphBox from "./graphbox.js";

function Home({ children }) {
  return(
    <div className="body">

      <GraphBox>
      </GraphBox>

      <div className="intro-container">
        <img className="surya" src={dp}></img>
        <div className="intro">
          Hello, I'm <p className="divine-inline">Vignesh</p><br/>
          I enjoy solving problems with software/hardware.<br/>
          Got a hard problem? Tell me more.<br/>
          Mail: vignesh@vreddy.org
        </div>
      </div>

      <div className="brag-container">
        <p className="oneliner">I'm as fullstack as one can get.</p>
        <div className="row">
          <div className="portrait-card"></div>
          <div className="portrait-card"></div>
          <div className="portrait-card"></div>
          <div className="portrait-card"></div>
        </div>
      </div>

    </div>
  );
}

export default Home;
