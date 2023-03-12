import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { paths } from "./contants/paths";

// Componentes do Layout
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";

export default function RoutesCosts() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path={paths.home} element={<Home />} />
        {/* <Route path={paths.projects} element={<Projects />} />
        <Route path={paths.newProjects} element={<NewProjects />} />
        <Route path={paths.company} element={<Company />} />
        <Route path={paths.contact} element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
