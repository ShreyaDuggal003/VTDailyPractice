import React from 'react'
import { Outlet } from 'react-router'
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"


function Layout() {
    return (
        <>
          <Header/>
          <Outlet/> {/*things b/w header and footer will change now */} 
          <Footer/>
        </>
    )
}

export default Layout
