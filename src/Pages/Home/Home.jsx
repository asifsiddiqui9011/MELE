
import ContactUs from "../../components/Contact";
import OurClients from "../../components/OurClients";
import Projects from "../../components/Projects";
import About from "../../components/About";
import Services from "../../components/Services";
import FAQ from "../../components/FAQ";
import StatsSection from "../../components/StatsSection";
import BookNow from "../../components/BookNow";
import Hero from "../../components/Hero";
import Pricing from "../../components/Pricing";
import bgimg from '../../assets/bg.jpg'

const Home = () => {
  return (
    <div className="bg-cover bg-fixed bg-center bg-no-repeat" style={{backgroundImage: `url(${bgimg})`}}>
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
    </div>
  )
}

export default Home
