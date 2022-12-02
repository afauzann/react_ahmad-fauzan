import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Navbars from "../component/Navbar/Navbar";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

function SetupRouters() {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default SetupRouters;
