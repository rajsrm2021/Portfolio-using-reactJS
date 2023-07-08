import React from "react";
import me from '../assets/github.jpeg'
import {
  
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div id="footer">
      <footer>
        <div>
          <img src={me} alt="founder" />

          <h2>Raj Kumar Jaiswal</h2>
          <p>Coding Karo jake DSA pe dhyan do.</p>
        </div>
        <aside>
          <h2>socoal media</h2>

          <article>
            <a href="https://github.com/rajsrm2021" target="blank">
              <AiFillGithub />{" "}
            </a>
          </article>
          <article>
            <a href="https://www.linkedin.com/in/kumarjaiswal/" target="blank">
              <AiFillLinkedin />{" "}
            </a>
          </article>
          <article>
            <a href="https://instagram.com/rajjaiswal_rk?igshid=MzNlNGNkZWQ4Mg==" target="blank">
              <AiFillInstagram />{" "}
            </a>
          </article>
        </aside>
        <a href="#home">
          <AiOutlineArrowUp />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
