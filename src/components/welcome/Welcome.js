import React from "react";

function Welcome(props) {
  let name = props.match.params.name || props.name;
  return <div className="welcome">Hey, {name}</div>;
}

export default Welcome;
