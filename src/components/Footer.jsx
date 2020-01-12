import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footermenu">
        <ul>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="footermenu">
        <span>Follow Us</span>
        <img
          className="followicon"
          src="./images/Facebook.png"
          alt="Facebook"
        />
        <img className="followicon" src="./images/Twitter.png" alt="twitter" />
      </div>
    </footer>
  );
}

export default Footer;
