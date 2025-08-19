import React from "react";

const Certificate = ({ title, link }) => (
  <div className="bg-white shadow-lg rounded p-4 text-center transition transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
      View Certificate
    </a>
  </div>
);

const Certificates = () => {
  const data = [
    { title: "Network Infrastructure", link: "https://drive.google.com/file/d/1bbbqX87fDUUHDbktDGyX97sffUDkj82L/view?usp=drivesdk" },
  ];

  return (
    <section id="certificates" className="py-12 bg-gray-50" data-aos="fade-up">
      <h2 className="text-3xl font-semibold mb-6 text-center">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {data.map((cert, idx) => <Certificate key={idx} {...cert} />)}
      </div>
    </section>
  );
};

export default Certificates;
