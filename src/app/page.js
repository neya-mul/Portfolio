'use client'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AnimatedBackground from '../components/AnimatedBackground'
import CustomCursor from '../components/Cursor'
import Education from '../components/Education'
import SplashScreen from '../components/SplashScreen'
import { useState } from 'react'

export default function Home() {
  const [splashDone, setSplashDone] = useState(false)

  return (
    <main>
      {/* Splash sits on top, vanishes after 3 seconds */}
      {!splashDone && (
        <SplashScreen onFinished={() => setSplashDone(true)} />
      )}

      {/* Content is ALWAYS rendered underneath */}
      <AnimatedBackground />
      <CustomCursor />
      <Navbar />

      <div className="content">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}