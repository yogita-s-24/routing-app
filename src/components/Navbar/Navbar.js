import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  
  // Before optimizing code
  //const path = window.location.pathname;

  const currentPath = window.location.pathname;

  function getActiveClass(path){
    return currentPath === path ? "active" : 'text-gray-300 font-semibold'; 
  }

  return (
    <>
     {/* Before optimizing code */}
      {/* <nav className="bg-gray-900 p-3 px-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="#" className="text-white text-xl font-semibold">
            Portfolio
          </Link>
          <div className="space-x-20">
            <Link to="/"  className={path==='/' ? 'active' : 'text-gray-300 hover:text-white'}>
              Home
            </Link>
            <Link to="/about" className={path==='/about' ? 'active' : 'text-gray-300 hover:text-white'}>
              About
            </Link>
            <Link to="/projects" className={path==='/projets' ? 'active' : 'text-gray-300 hover:text-white'}>
              Projects
            </Link>
            <Link to="/skills" className={path==='/skills' ? 'active' : 'text-gray-300 hover:text-white'}>
              Skills
            </Link>
            <Link to="/contact" className={path==='/contact' ? 'active' : 'text-gray-300 hover:text-white'}>
              Contact
            </Link>
          </div>
        </div>
      </nav> */}



{/* After Optimizing Code */}

<nav className="bg-gray-900 p-3 px-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="#" className="text-white text-xl font-semibold">
            Portfolio
          </Link>
          <div className="space-x-20">
            <Link to="/" className={getActiveClass('/')}>
              Home
            </Link>
            <Link to="/about" className={getActiveClass('/about')}>
              About
            </Link>
            <Link to="/projects" className={getActiveClass('/projects')}>
              Projects
            </Link>
            <Link to="/skills" className={getActiveClass('/skills')}>
              Skills
            </Link>
            <Link to="/contact" className={getActiveClass('/contact')}>Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

