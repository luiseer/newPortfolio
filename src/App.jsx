import { videoWebm, videoMp4, videoMp4Compress } from './assets/video';
import Header from './components/Header';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Header />

      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
          >
            <source src={videoWebm} type="video/webm" />
            <source src={videoMp4} type="video/mp4" />
            <source src={videoMp4Compress} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-transparent to-[#0a0f1e]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
          <p className="text-accent font-mono text-sm mb-4" data-aos="fade-up">
            Hola, soy
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold text-text-primary"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Luis Emmanuel
          </h1>
          <h2
            className="text-3xl md:text-5xl font-bold text-text-secondary mt-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="typing-text"></span>
            Full Stack Developer & SysAdmin
          </h2>
          <p
            className="text-text-secondary text-base md:text-lg mt-6 max-w-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Construyo soluciones backend robustas y administro infraestructura IT en producción.
          </p>
          <div
            className="flex gap-4 mt-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="#proyectos"
              className="bg-accent text-background font-semibold px-8 py-3 rounded hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="border border-accent text-accent font-semibold px-8 py-3 rounded hover:bg-accent-dim transition-all duration-300"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      <div id="proyectos">
        <Projects />
      </div>
      <div id="acerca-de-mi">
        <AboutMe />
      </div>
      <div id="habilidades">
        <Skills />
      </div>
      <div id="contacto">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
