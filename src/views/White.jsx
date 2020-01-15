import React from "react";
import { Link } from "react-router-dom";

class White extends React.Component {
  render() {
    console.log(this.props.location);
    const { title } = this.props.location.state;
    return (
      <div>
        <h1>{title}</h1>
        <Link to="/"> back</Link>
      </div>
    );
  }
}

export default White;
