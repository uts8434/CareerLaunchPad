import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Navroute/Header'
 import Footer from '../Navroute/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
