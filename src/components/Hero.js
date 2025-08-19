import React from "react";
import Typed from "react-typed";

const Hero = () => (
  <section id="about" className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center" data-aos="fade-up">
    <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
    <h1 className="text-5xl font-bold mb-2">Mostafa Nader</h1>
    <Typed
      strings={["SOC Analyst"]}
      typeSpeed={60}
      backSpeed={40}
      loop
      className="text-xl text-blue-600"
    />
  </section>
);

export default Hero;
