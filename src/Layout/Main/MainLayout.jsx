import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'


const MainLayout = () => {
  return (
    <>
      {/* header section here */}
      <header>
        <Navbar />
      </header>

      {/* main section start here */}
      <main className="pt-20 min-h-[80vh]"> {/* Add padding to push content below fixed navbar */}
        <Outlet />
      </main>

      {/* footer section here */}
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default MainLayout
