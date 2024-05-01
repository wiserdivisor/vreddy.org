import React from 'react';
import dp from "../images/suntex.png";
import automation from "../images/automation.png";
import frontend from "../images/frontend.png";
import backend from "../images/backend.png";
import database from "../images/database.png";

import "./home.css"

import SkillCard from "./skillcard.js";

function Home({ children }) {
  return(
    <div className="body">

      <div className="inyourface">
        LOOKING FOR A FULLSTACKER?
      </div>

      <div className="eclipse-container">
        <div className="eclipse">
          <div className="undivine-inline">
            One who can design and implement solutions... End to End?
          </div>
        </div>
      </div>

      <div className="brag-container">
        <div className="row">
          <SkillCard img={automation} title="Automation" sub="Lightning-fast workflow." />
          <SkillCard img={frontend} title="Frontend" sub="A Stunning UI." />
        </div>

        <div style={{margin:"30px"}}>
          <p className="divine-inline">
            One whose skills pierce ALL realms of Software Development.
          </p>
        </div>

        <div className="row">
          <SkillCard img={backend} title="Backend" sub="Perfect business logic." />
          <SkillCard img={database} title="Database" sub="Persistent and relaible data." />
        </div>
      </div>

      <div className="inyourface">YOU JUST FOUND <br/>THE ONE</div>

      <div className="intro-container">
        <img className="surya" src={dp}></img>
        <div className="intro">
          Hello, I'm <p className="divine-inline">Vignesh</p><br/>
          I enjoy solving problems with software/hardware.<br/>
          I primarily speak C++17 and Python.<br/>
          I use frames like: Qt || React || Node.
        </div>
      </div>

    </div>
  );
}

export default Home;
