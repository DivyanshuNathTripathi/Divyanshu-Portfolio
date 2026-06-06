import React from 'react'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import GithubStats from './components/GithubStats'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <GithubStats />
      <Contact />
      <Footer />

      {/* Floating Resume Button */}
      <a 
        href="/resume.pdf" 
        download 
        className="fixed bottom-6 right-6 z-[9999] p-4 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.7)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        title="Download Resume"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-bold tracking-wider uppercase">
          Resume
        </span>
      </a>
    </>
  )
}

export default App
