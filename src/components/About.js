import React from "react";
import user from "../data/user";

function About(props) {
  const { github, linkedin } = user.links;

  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <div>
        <a href={github}>github</a>
        <a href={linkedin}>linknedin</a>
      </div>
    </div>
  );
}

export default About;