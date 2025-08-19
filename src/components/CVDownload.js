import React from "react";

const CVDownload = () => {
  const link = "https://drive.google.com/file/d/1jr7oRUpnK7PQ9jOgFEj6FWbP3tGzGm9k/view?usp=drivesdk";

  return (
    <section id="cv" className="text-center py-12" data-aos="fade-up">
      <a href={link} target="_blank" rel="noopener noreferrer"
         className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition">
        Download CV
      </a>
    </section>
  );
};

export default CVDownload;
