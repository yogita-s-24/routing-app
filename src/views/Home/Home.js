import React from 'react'
import Navbar from './../../components/Navbar/Navbar'
import './Home.css'
import Image from './../Home/Images/img-1.png'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='main-container p-5 mt-5'>
        <div className='row'>
          <div className='col-sm'>
          <p className='about-me fs-4'>Hello, I'm Yogita Shete, <br/>A Web Developer. I create user-friendly websites that look great and work well. I'm skilled in both front-end and back-end technologies.
          </p>
          </div>
          <div className='col-sm ml-5'>
            <img src={Image} />
            
            </div>
        </div>
      </div>
    </>
  )
}