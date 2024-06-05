import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navBar'
const MainLayout = () => {
    {/*outlet is component used for layouts */}
  return (
   <>
   <NavBar />
   <Outlet />
   </>
  )
}

export default MainLayout