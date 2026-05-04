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

export default function Home() {
  return (
    <main>
      {/* Animated background - sits behind everything */}
      <AnimatedBackground />
      <CustomCursor></CustomCursor>
      {/* Navigation bar at the top */}
      <Navbar />

      {/* All sections wrapped in content layer */}
      <div className="content">
        <Hero />
        <About />
        <Skills />
        <Education></Education>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
