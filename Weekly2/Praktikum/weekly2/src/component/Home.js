import "./Home.css";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Navbars from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Welcome from "./Welcome/Welcome";

function Home() {
  return (
    <>
      <Navbars />
      <Welcome />
      <Contact />
      <About />
      <Footer />
    </>
  );
}

export default Home;
