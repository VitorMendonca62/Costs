import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { paths } from "./contants/paths";

// Componentes do Layout
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import NewProject from "./pages/NewProject";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

export default function RoutesCosts() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.projects} element={<Projects />} />
        <Route path={paths.projectsID} element={<Project />} />
        <Route path={paths.newProject} element={<NewProject />} />
      </Routes>
      <Footer />
    </Router>
  );
}
