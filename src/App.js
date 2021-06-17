import React from "react";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default App;
