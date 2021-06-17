import React from "react";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Welcome />
      <About />
      <Projects />
    </React.Fragment>
  );
}

export default App;
