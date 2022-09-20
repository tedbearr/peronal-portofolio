import React from "react";
import "../styles/Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is ..</h2>
        <div className="prompt">
          <p> A Human who write the code </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>HTML</span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>HTML</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>HTML</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
