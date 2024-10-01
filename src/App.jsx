import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  // Locomotive Scroll
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      smoothTouch: true,
      touchMultiplier: 1,
    },
  });

  return (
    <Router>
      <div className="w-full min-h-screen bg-black text-white">
        <Navbar />
        <HeroSection />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
