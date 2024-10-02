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
import bgimg from './assets/bg.jpg'
import StatsSection from "./components/StatsSection";
import BookNow from "./components/BookNow";

const App = () => {
  return (
    <main className="bg-cover bg-fixed bg-center bg-no-repeat" style={{backgroundImage: `url(${bgimg})`}}>
      <Navbar />
      <Hero />
      {/* <LogoTicker /> */}
      <About />
      <Services />
      <StatsSection/>
      <Projects />
      <BookNow/>
      <Pricing />
      <OurClients />
      <section id="contact">
      <ContactUs />
      </section>
     
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;
