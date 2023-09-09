import React from 'react';
import Cards from './../../components/Cards/Cards';
import TODOImg from './Images/todoapp.png';
import ButtonXpert from './Images/buttonXpert.png'
import Navbar from './../../components/Navbar/Navbar';
import './Projects.css';

export default function Projects() {
  return (
    <>
    <Navbar/>
    <h1 className='fs-1 text-center'>Projects</h1>

    <div className='card-container flex justify-evenly mt-3'>

    <Cards title="TODO App 📝" description="A ToDo List App is an application that helps users maintain their day-to-day tasks or list everything that they have to do✅📃"
     img={TODOImg} githubUrl="https://github.com/yogita-s-24/todoapp-practice" liveUrl="https://todo-app-dtfn.onrender.com/"
     />

    <Cards title="ButtonXpert 🦋" description="The ButtonXpert project simplifies button creation for developers and designers using React. It enables easy customization of button styles like size, color, and hover effects."  githubUrl='https://github.com/roadtocode4u/buttonxpert' liveUrl="https://rtc-button-xpert.netlify.app/"
     img={ButtonXpert}
     />

    <Cards title="TODO App" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis vero debitis, libero culpa dolorem molestiae sequi eos fuga ab explicabo, error cum temporibus nulla deleniti, rerum voluptatem ad! Aliquam."
     img={TODOImg}
     />
    </div>
    
    
    </>
  )
}

