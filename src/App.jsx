import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Automation from "./pages/Automation";
import CICD from "./pages/CICD";
import Cloud from "./pages/Cloud";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/cicd" element={<CICD />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route
              path="/certifications"
              element={<Certifications />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </main>

      <Footer />
    </>
  );
}

export default App;