import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

AOS.init();

const Footer = () => {
  return (
    <footer className="bg-primary-color text-secondary-color text-center py-10">
      <p className="text-sm">
        © {new Date().getFullYear()} - Todos los derechos reservados
      </p>
      <div className="flex gap-5 justify-center mt-4">
        <a href="https://github.com/luiseer">
          <FontAwesomeIcon
            className="text-secondary-color text-4xl"
            icon={faGithub}
          />
        </a>
        <a href="https://www.linkedin.com/in/luis-estrada-746701a3/">
          <FontAwesomeIcon
            className="text-secondary-color text-4xl"
            icon={faLinkedinIn}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
