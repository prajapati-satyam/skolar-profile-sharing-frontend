import React, { useEffect, useState } from 'react'
import './index.css'
import gitimg from './assets/github.png'
import gitimg2 from './assets/github 2.png'
import linkdinImg from './assets/linked din.jpeg'
import formater from './componets/formater.js'
import Card from './componets/Card.jsx'
import Add from './componets/Add.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Card/>
    },
    {
      path: '/add',
      element: <Add/>
    }
  ])

  return (
    <>
      {/* <Card/> */}
      <RouterProvider router={router}/>

    </>
  )
}

export default App
