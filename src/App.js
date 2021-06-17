import React from "react";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import About from "./components/About";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Welcome />
      <About />
    </React.Fragment>
  );
}

export default App;
