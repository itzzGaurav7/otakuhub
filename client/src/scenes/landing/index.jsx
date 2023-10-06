import "./landingPage.css";
import Home from "./Components/Home";
import About from "./Components/About";

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function Landing() {
  return (
    <div className="landing">
      <Home />
      <About />

      <Contact />
      <Footer />
    </div>
  );
}

export default Landing
