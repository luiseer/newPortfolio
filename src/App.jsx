import { useState } from 'react';
import ReactPlayer from 'react-player';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from './assets/video/keyboard.mp4';
import Header from './components/Header';
import Projects from './components/Projects';
AOS.init();

function App() {
  
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="video-container">
        <Header />
        <ReactPlayer
          width="100%"
          height="100%"
          className="video absolute -z-10"
          muted={true}
          playing
          loop
          controls={false}
          url={video}
        />
        <Projects />
      </div>
    </>
  );
}

export default App;
