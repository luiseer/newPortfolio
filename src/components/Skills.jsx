import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faGit,
  faHtml5,
  faJs,
  faNode,
  faPython,
  faReact
} from '@fortawesome/free-brands-svg-icons';

AOS, init();

const Skills = () => {
  return (
    <>
      <h2 className="text-center text-white text-2xl mt-20 px-5 py-3">
        Mis habilidades
      </h2>
      <div className="flex flex-row flex-wrap justify-center mt-10 gap-20">
        <div data-aos="fade-up-right">
          <h3>html</h3>
          <FontAwesomeIcon
            className="text-blue-color font-extrabold text-9xl"
            icon={faHtml5}
          />
        </div>
        <div data-aos="fade-up-right">
          <h3>css</h3>
          <FontAwesomeIcon
            className="text-blue-color font-extrabold text-9xl"
            icon={faCss3}
          />
        </div>
        <div data-aos="zoom-in">
          <h3>JavaScript</h3>
          <FontAwesomeIcon
            className="text-blue-color font-extrabold text-9xl"
            icon={faJs}
          />
        </div>
        <div data-aos="zoom-in">
          <h3>React</h3>
          <FontAwesomeIcon
            className="text-blue-color font-extrabold text-9xl"
            icon={faReact}
          />
        </div>
        <div data-aos="zoom-in">
          <h3>NodeJS</h3>
          <FontAwesomeIcon
            className="text-blue-color font-extrabold text-9xl"
            icon={faNode}
          />
        </div>
        <div data-aos="fade-up-left">
          <h3>Python</h3>
          <FontAwesomeIcon
            className="text-blue-color font-extrabold text-9xl"
            icon={faPython}
          />
        </div>
        <div data-aos="fade-up-left">
          <h3>Git</h3>
          <FontAwesomeIcon
            className="text-blue-color font-extrabold text-9xl"
            icon={faGit}
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
