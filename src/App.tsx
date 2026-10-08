import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Process from "./components/Process";
import Faq from "./components/Faq";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="wrap">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Services />
      <Process />
      <Faq />
      <Contact />
    </div>
  );
}
