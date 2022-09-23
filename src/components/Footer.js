import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.instagram.com/teddyybeaarrr/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/teddy-setiawan-58aa09229/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://m.facebook.com/spratiwia"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
      </div>
      <p> &copy; 2022 Teddy Setiawan </p>
    </div>
  );
}

export default Footer;
