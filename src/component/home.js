import React from 'react';

import "./home.css"

import GraphBox from "./graphbox.js";
import SkillCard from "./skillcard.js";

function Home({ children }) {
  return(
    <div className="body">

      <div className="inyourface">
        LOOKING FOR A 
        <p style={{ color:"#ff3333", display: "inline" }}> 10X </p>
        DEV?
      </div>

      <div className="eclipse-container">
        <div className="eclipse">
          <div className="undivine-inline">
            One who can design and implement solutions...<br/> End to End
          </div>
        </div>
      </div>
      <hr style={{ color:"white", width: "30%", size:"1px" }}/>
      <div className="brag-container">
        <div className="row">
          <SkillCard img="/image/automation.jpg" title="Automation" sub="Lightning-fast workflow." />
          <SkillCard img="/image/frontend.jpg" title="Frontend" sub="A Stunning UI." />
        </div>

        <div style={{margin:"30px"}}>
          <p className="divine-inline">
            One whose skills pierce ALL realms of Software Development.
          </p>
        </div>

        <div className="row">
          <SkillCard img="/image/backend.jpg"  title="Backend" sub="Perfect business logic." />
          <SkillCard img="/image/database.jpg"  title="Database" sub="Persistent and relaible data." />
        </div>
      </div>

      <div className="inyourface">YOU JUST FOUND <br/>THE ONE</div>

      <div className="intro-container">
        <img className="surya" src= "/image/suntex.jpg"></img>
        <div className="intro">
          Hello, I'm <p className="divine-inline">Vignesh</p><br/>
          I enjoy solving problems with software/hardware.<br/>
          I primarily speak C++11 and Python.<br/>
        </div>
      </div>

      {/*<GraphBox />*/}

    </div>
  );
}

export default Home;
