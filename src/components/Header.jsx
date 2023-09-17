import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Raj Jaiswal.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Projects
      </a>
      {/* <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a> */}
      <a onClick={() => setMenuOpen(false)} href="certificate">
        Certificates
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Work Experience
      </a>
      {/* <a onClick={() => setMenuOpen(false)} href="#testimonial">
        Testimonial
      </a> */}
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:rajjaiswal2060@gmail.com">
      <button>E-mail</button>
    </a>
  </>
);

export default Header;