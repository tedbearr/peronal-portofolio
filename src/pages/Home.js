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
        <h2>Hi, My name is Teddy Setiawan</h2>
        <div className="prompt">
          <p> Web Programmer </p>
          <a
            href="https://www.linkedin.com/in/teddy-setiawan-58aa09229/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <EmailIcon />
          <a
            href="https://github.com/tedbearr"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>HTML, CSS, ReactJS, BootStrap</span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>
              NodeJs, ExpressJS, MySQL, PostgreSQL, Laravel, CodeIgniter, Zend
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, PHP</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
