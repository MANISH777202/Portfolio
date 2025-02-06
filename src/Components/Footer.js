import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Manish Tiwari</h4>
      <h4>Copyright &copy; 2024 MT</h4>
      <div className="footerLinks">
        <a href="https://github.com/MANISH777202" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/manish-tiwari-2b2513272/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:manishtiwari2498@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
