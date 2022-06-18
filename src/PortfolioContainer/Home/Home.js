import React from 'react'
import Profile from './Profile'
import Footer from './Footer/Footer'
import './Home.css'
import Navbar from '../../Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from '../AboutMe/About'

import Services from '../Service/Services'
import Experience from '../../Experience/Experience'
import Portfolio from '../../Portfolio/Portfolio'
import Testimonial from '../../Testimonial/Testimonial'
import Contact from '../../Contact/Contact'

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />

      <Routes>
        <Route index path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />

        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}
