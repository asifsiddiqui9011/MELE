// import Hero from "./components/Hero";
// import Pricing from "./components/Pricing";
import Footer from "./components/footer_section/Footer";
import Navbar from "./components/Navbar";
// import ContactUs from "./components/Contact";
// import OurClients from "./components/OurClients";
// import Projects from "./components/Projects";
// import About from "./components/About";
// import Services from "./components/Services";
// import FAQ from "./components/FAQ";

// import StatsSection from "./components/StatsSection";
// import BookNow from "./components/BookNow";
import Home from "./Pages/Home/Home";
import { Routes,Route } from "react-router-dom";
import Career from "./Pages/Career/Career";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServiceDesc from "./components/ServiceDesc/ServiceDesc";
import ProjectDesc from "./components/ProjectDesc/ProjectDesc";
import bgimg from './assets/bg.jpg'

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, [location]);
  return <>{props.children}</>;
};


const App = () => {
  return (
    <main className="bg-cover bg-fixed bg-center bg-no-repeat" style={{backgroundImage: `url(${bgimg})`}} >
      <Navbar />
      <ScrollToTop>
      <Routes>
       
        <Route
        path="/"
        element={<Home/>}
        />
        <Route
        path="/career"
        element={<Career/>}
        />
        <Route path={"/service"} element={<ServiceDesc/> }>
            <Route path=':serviceId' element={<ServiceDesc/>}/>
        </Route>
        <Route path={"/project"} element={<ProjectDesc/>}>
             <Route path=':index' element={<ProjectDesc/>}/>
        </Route>
       
      </Routes>
      </ScrollToTop>
      
      {/* <Hero />
      <About />
      <Services />
      <StatsSection/>
      <Projects />
      <BookNow/>
      <Pricing />
      <OurClients />
      <ContactUs />
      <FAQ /> */}
      <Footer />
    </main>
  );
};

export default App;
