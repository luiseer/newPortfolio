import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactPlayer from 'react-player';
import video from './assets/video/keyboard.mp4';
import Header from './components/Header';
AOS.init();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="video-container">
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
      </div>
    </>
  );
}

export default App;
