import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/section'
import section1 from './assets/section-1.webp'
import section2 from './assets/section-2.webp'
import section3 from './assets/section-3.webp'
import section4 from './assets/section-4.webp'
import About from './components/About'
import OurTeam from './components/OurTeam'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Section image={section1} />
      <Section image={section2} reverse={true} />
      <Section image={section3} />
      <Section image={section4} reverse={true} />
      <About />
      <OurTeam />
    </div>
  )
}

export default App
