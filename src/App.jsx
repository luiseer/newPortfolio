import { useState } from 'react';
import ReactPlayer from 'react-player';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from './assets/video/keyboard.mp4';
import Header from './components/Header';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
AOS.init();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative">
        <div className="absolute flex justify-center overflow-hidden top-0 left-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-auto max-w-none h-full"
          >
            <source src={video} type="video/mp4" />
            {/* <source src={video} type="video/webp" /> */}
          </video>
        </div>
        <div className="w-full items-center flex-wrap gap-6 relative">
          <div>
            <Header />
          </div>
          <div id='portafolio'>
            <Projects />
          </div>
          <div id='acerca-de-mi'>
            <AboutMe />
          </div>
          <div id='habilidades'>
            <Skills />
          </div>
          <div id='contacto'>
            <Contact />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;