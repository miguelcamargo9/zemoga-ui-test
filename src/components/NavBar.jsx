import React from "react";

function NavBar() {
  return (
    <div className="container">
      <div className="navBar">
        <div className="logo">
          <h1>Rule of Thumb.</h1>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a href="#">Past Trials</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Log In/Sing Up</a>
            </li>
            <li>
              <button>Search</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
