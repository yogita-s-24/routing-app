import React from 'react';
import Cards from './../../components/Cards/Cards';
import TODOImg from './Images/todoapp.png';
import ButtonXpert from './Images/buttonXpert.png';
import Wedding from './Images/wedding.png';
import Navbar from './../../components/Navbar/Navbar';
import './Projects.css';

export default function Projects() {
  return (
    <>
    <Navbar/>
    <h1 className='fs-1 text-center'>Projects</h1>

    <div className='card-container flex justify-evenly mt-3'>

    <Cards title="TODO App 📝" description="A ToDo List App is an application that helps users to list everything that they have to do✅📃"
     img={TODOImg} githubUrl="https://github.com/yogita-s-24/todoapp-practice" liveUrl="https://todo-app-dtfn.onrender.com/"
     />

    <Cards title="ButtonXpert 🦋" description="The ButtonXpert project simplifies button creation for developers and designers using React."  githubUrl='https://github.com/roadtocode4u/buttonxpert' liveUrl="https://rtc-button-xpert.netlify.app/"
     img={ButtonXpert}
     />

    <Cards title="Wedding Planning 💏" description="Explore your dream wedding on our comprehensive planning website, covering venues, dresses and decor." githubUrl="https://github.com/yogita-s-24/The-wedding-planning" liveUrl='https://theweddingstorybook.netlify.app/'
     img={Wedding}
     />
    </div>

    <h1 className='fs-1 text-center mt-6'>Mini Projects</h1>


    </>
  )
}

