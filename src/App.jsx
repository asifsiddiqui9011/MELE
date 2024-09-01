import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ContactUs from "./components/Contact";
import OurClients from "./components/OurClients";
import Projects from "./components/Projects";
import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoTicker />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <OurClients />
      <ContactUs />
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;
