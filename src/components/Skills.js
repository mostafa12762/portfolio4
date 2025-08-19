import React from "react";

const skills = ["Networking", "Linux", "SIEM", "Splunk", "Python", "C++"];

const Skills = () => (
  <section id="skills" className="py-12 bg-white" data-aos="fade-up">
    <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {skills.map((skill, idx) => (
        <div key={idx} className="bg-blue-100 p-4 rounded text-center transition transform hover:scale-110 hover:bg-blue-300 hover:shadow-lg">
          {skill}
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
