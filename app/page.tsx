
import React from 'react'

import Navbar from './component/Navbar'
import Home from "../app/landingpages/Home"
import Footer from './component/Footer'
import './globals.css'


const page = () => {
  return (
    <div>
      <Navbar />

      <Home />
      <Footer />

    </div>
  )
}

export default page
