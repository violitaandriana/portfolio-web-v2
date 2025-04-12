import Navbar from "./components/layout/Navbar";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/SkillSection";
import ProjectSection from "./components/sections/ProjectSection";
import Footer from "./components/layout/Footer";

// TODO: responsive
function App() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <Footer />
    </>
  );
}

export default App;
