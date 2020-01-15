import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: ""
    };
    this.viewMenu = this.viewMenu.bind(this);
  }

  viewMenu() {
    const { isActive } = this.state;
    const newIsActive = isActive === "" ? "is-active" : "";
    this.setState({ isActive: newIsActive });
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className="container">
        <div
          className="burger-menu"
          onClick={() => {
            this.viewMenu();
          }}
        >
          <FontAwesomeIcon icon={faAlignJustify} />
        </div>
        <header className="navBar">
          <div className="logo">
            <h1>Rule of Thumb.</h1>
          </div>
          <nav className={"menu " + isActive}>
            <ul>
              <li>
                <Link
                  to={{
                    pathname: "/pasttrials",
                    state: {
                      title: "Past Trials"
                    }
                  }}
                >
                  Past Trials
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/howitworks",
                    state: {
                      title: "How It Works"
                    }
                  }}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/login",
                    state: {
                      title: "Log In/Sing Up"
                    }
                  }}
                >
                  Log In/Sing Up
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faSearch} />
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default NavBar;
