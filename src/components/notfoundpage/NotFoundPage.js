import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <p>
        Hate to say this but you're lost mehn.
        <br />
        <Link to="/">Help Me!</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
