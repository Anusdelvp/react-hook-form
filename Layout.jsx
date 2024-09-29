import React from 'react'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <h1>Navbar</h1>
    <Outlet />
        </>
  )
}

export default Layout