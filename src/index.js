import React from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from './views/Home/Home';
import About from './views/About/About.js';
import Skills from './views/Skills/Skills';
import Projects from './views/Projects/Projects';
import Contact from './views/Contact/Contact';

const router = createBrowserRouter ([
  {
    path:'/',
    element: <Home/>,
  },
  {
    path:'/about',
    element: <About/>,
  },
  {
    path:'/skills',
    element:<Skills/>,
  },
  {
    path:'/projects',
    element:<Projects/>,
  },
  {
    path:'/contact',
    element: <Contact/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
