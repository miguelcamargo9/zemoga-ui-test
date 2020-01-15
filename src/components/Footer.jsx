import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footermenu">
        <ul>
          <li>
            <Link
              to={{
                pathname: "/terms",
                state: {
                  title: "Terms and Conditions"
                }
              }}
            >
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/privacy",
                state: {
                  title: "Privacy Policy"
                }
              }}
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/contact",
                state: {
                  title: "Contact Us"
                }
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="footericons">
        <span>Follow Us</span>
        <img className="faceicon" src="./images/Facebook.png" alt="Facebook" />
        <img className="twittericon" src="./images/Twitter.png" alt="twitter" />
      </div>
    </footer>
  );
}

export default Footer;
