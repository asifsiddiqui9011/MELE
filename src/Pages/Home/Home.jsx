
import ContactUs from "../../components/Contact";
import OurClients from "../../components/OurClients";
import Projects from "../../components/Project/Projects";
import About from "../../components/About/About";
import Services from "../../components/service/Services";
import FAQ from "../../components/FAQ";
import StatsSection from "../../components/StatsSection";
import BookNow from "../../components/BookNow";
import Hero from "../../components/Hero/Hero";
import Pricing from "../../components/Pricing";


const Home = () => {
  return (
    <section >
      <Hero />
      <About />
      <Services />
      <StatsSection/>
      <Projects />
      <BookNow/>
      <Pricing />
      <OurClients />
      <ContactUs />
      <FAQ />
    </section>
  )
}

export default Home
