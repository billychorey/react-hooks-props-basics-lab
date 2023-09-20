import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";
import Links from "./Links";

function App() {
  return (
    <div>
      <NavBar />
      <Home
        name={user.name}
        city={user.city}
        color={user.color}
      />
     <About
        bio={user.bio}
       
      />
      <Links
        github={user.links.github} 
        linkedin = {user.links.linkedin}
      /> 
    </div>
  );
}

export default App;