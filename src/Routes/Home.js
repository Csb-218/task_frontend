import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar ,NavBar } from '../Components/Navigation'
const Home = () => {

  return (

    <>
     <NavBar/>
     <SideBar/>
     <Outlet/>
    </>
  )
}

export default Home