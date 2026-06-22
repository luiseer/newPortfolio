import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className="py-32 px-6 max-w-2xl mx-auto text-center">
      <p
        className="text-accent font-mono text-xs mb-2"
        data-aos="fade-up"
      >
        // contacto
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold text-text-primary mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <span className="text-accent">.</span> Contacto
      </h2>
      <p
        className="text-text-secondary text-base mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Disponible para proyectos freelance y oportunidades remotas.
      </p>

      <div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <a
          href="mailto:luiseer@example.com"
          className="inline-flex items-center justify-center gap-3 border border-accent text-accent px-6 py-3 rounded hover:bg-accent-dim transition-all duration-300 font-mono text-sm"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-base" />
          <span>Correo</span>
        </a>
        <a
          href="https://github.com/luiseer"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 border border-accent text-accent px-6 py-3 rounded hover:bg-accent-dim transition-all duration-300 font-mono text-sm"
        >
          <FontAwesomeIcon icon={faGithub} className="text-base" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/luis-estrada-746701a3/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 border border-accent text-accent px-6 py-3 rounded hover:bg-accent-dim transition-all duration-300 font-mono text-sm"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="text-base" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
