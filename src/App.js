import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Project from "./components/Project/Project"
import Footer from "./components/Footer/Footer"
import projectsJSON from "./data/projects.json"
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <section class="grid" id="work">
        {projectsJSON.map(project => (<Project {...project} />))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
