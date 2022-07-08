import React from "react";
import instagram from "../Styles/instagram.png";
import linkedin from "../Styles/linkedin.png";
import git from "../Styles/git.png";
import "../Styles/footer.css";

export default function Footer() {
  return (
    <div className="footercontainer">
      <div className="socials">
        <a href="https://www.instagram.com/imchinmay17._/" target="_blank">
          <img src={instagram} alt="instagram" className="socialimage" />
        </a>
        <a href="https://www.linkedin.com/in/chinmay-borah-46a865229/" target="_blank">
          <img src={linkedin} alt="instagram" className="socialimage" />
        </a>
        <a href="https://github.com/chinmay200" target="_blank">
          <img src={git} alt="instagram" className="socialimage" />
        </a>
      </div>
    </div>
  );
}
