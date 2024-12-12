import './App.css';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import Projects from './components/Projects/project';
import Skills from './components/Skills/skill';
import Contact from './components/Contact/contact';
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App
