import React from 'react'
import Navbar from './../../components/Navbar/Navbar'
import './About.css'

export default function About() {
  return (
    <>
      <Navbar />
      <>
      <h1 className='fs-1 text-center'>About Me</h1>

        <div className="about-container mt-5">
          <p className='para'>
            "Hello, I'm <b>Yogita Shete</b>, a <u>Full Stack Developer</u> with a passion for creating web applications using
            HTML,
            CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, MongoDB, and Node.js. I particularly enjoy crafting
            E-commerce web applications using React."
          </p>
        </div>
      </>
    </>
  )
}