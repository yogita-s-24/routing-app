import React from 'react';
import Cards from './../../components/Cards/Cards';
import Navbar from './../../components/Navbar/Navbar';
import './Projects.css';
import TODOImg from './Images/todoapp.png';
import ButtonXpert from './Images/buttonXpert.png';
import Wedding from './Images/wedding.png';
import Weather from './Images/weather-app.png'
import Clock from './Images/clock.png'
import Dice from './Images/dice.png'

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

    <div className='card-container flex justify-evenly mt-3'>

    <Cards title="Weather App 🌡" description="This is the code repository for a weather app that allows users to quickly check the weather forecast for their location and other locations around the world." githubUrl="https://github.com/yogita-s-24/WeatherWise" liveUrl='https://weatherwise-app-by-yogiii.netlify.app/'
     img={Weather}
     />

<Cards title="Analog Clock 🕒" description="🕐 Analog Clock -It is 12 hr clock. This is created by using HTML5 , CSS3 and Javascript. It is also display the current time using hr, min and sec hands." githubUrl="https://github.com/yogita-s-24/Analog-Clock" liveUrl='https://analog-clock-by-yogiii.netlify.app/'
     img={Clock}
     />
<Cards title="Dice-Roller-Game 🎲" description="This is my Dice Roller Game. I uesd HTML, CSS and JavaScript for creating this game and also added hover effects on image for scrolling the dice." githubUrl="https://github.com/yogita-s-24/Dice_Roller_Game" liveUrl='https://yogita-dice-roller-game.netlify.app/'
     img={Dice}
     />

</div>

    </>
  )
}

