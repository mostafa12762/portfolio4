import React from "react";

const Header = () => (
  <header className="bg-white shadow-md fixed w-full z-50">
    <nav className="container mx-auto flex justify-between items-center py-4 px-6">
      <h1 className="font-bold text-xl">Mostafa Nader</h1>
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
        <li><a href="#certificates" className="hover:text-blue-500">Certificates</a></li>
        <li><a href="#cv" className="hover:text-blue-500">CV</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
