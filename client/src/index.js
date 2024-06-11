import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './views/Home/Home';
import NewNote from './views/NewNote/NewNote';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/newnote",
    element: <NewNote />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router= {router}></RouterProvider>
);


