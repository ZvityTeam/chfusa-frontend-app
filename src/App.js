import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FooterComponent from "./components/Footer/FooterComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import ProjectsPage from "./pages/ProjectsPage";
import ContributePage from "./pages/ContributePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <main className="min-h-screen" >
      <HeaderComponent />
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </>
      <FooterComponent />
    </main>
  );
}

export default App;
