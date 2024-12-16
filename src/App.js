import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FooterComponent from "./components/Footer/FooterComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import ProjectsPage from "./pages/ProjectsPage";
import ContributePage from "./pages/ContributePage";
import ProfilePage from "./pages/ProfilePage";
import ComingSoonPage from "./pages/ComingSoonPage";

function App() {
  return (
    < >
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ComingSoonPage />} />
        <Route path="/events" element={<ComingSoonPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/profile" element={<ComingSoonPage />} />
        <Route path="/contact" element={<ComingSoonPage />} />
        <Route path="/events" element={<ComingSoonPage />} />
        <Route path="/profile" element={<ComingSoonPage />} />
        <Route path="/contact" element={<ComingSoonPage />} />
        <Route path="/donate" element={<ComingSoonPage />} />
        <Route path="/join" element={<ComingSoonPage />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
