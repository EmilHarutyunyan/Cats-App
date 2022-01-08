import React from 'react'
import { Outlet } from "react-router-dom";
import Navigation from '../components/Navigation';
const layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
      
    
  )
}

export default layout