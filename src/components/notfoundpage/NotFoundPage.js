import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <p>
          Hate to say this, but you're lost mehn.
          <br />
          <Link to="/">Try Me!</Link>
        </p>
      </div>
    );
  }
}

export default NotFoundPage;
