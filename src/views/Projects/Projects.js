import React from 'react';
import Cards from './../../components/Cards/Cards';
import TODOImg from './Images/todoapp.png';
import Navbar from './../../components/Navbar/Navbar';
import './Projects.css';

export default function Projects() {
  return (
    <>
    <Navbar/>
    <h1 className='fs-1 text-center'>Projects</h1>

    <div className='card-container flex justify-evenly mt-3'>

    <Cards title="TODO App" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis vero debitis, libero culpa dolorem molestiae sequi eos fuga ab explicabo, error cum temporibus nulla deleniti, rerum voluptatem ad! Aliquam."
     img={TODOImg}
     />
    <Cards title="TODO App" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis vero debitis, libero culpa dolorem molestiae sequi eos fuga ab explicabo, error cum temporibus nulla deleniti, rerum voluptatem ad! Aliquam."
     img={TODOImg}
     />
    <Cards title="TODO App" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis vero debitis, libero culpa dolorem molestiae sequi eos fuga ab explicabo, error cum temporibus nulla deleniti, rerum voluptatem ad! Aliquam."
     img={TODOImg}
     />
    </div>
    
    
    </>
  )
}

