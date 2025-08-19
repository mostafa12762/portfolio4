import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import CVDownload from "./components/CVDownload";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Certificates />
      <CVDownload />
      <Contact />
    </div>
  );
}

export default App;
