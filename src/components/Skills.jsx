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
      <h2 className="text-center uppercase text-green-color font-bold text-2xl mt-20">
        Mis habilidades
      </h2>
      <div className="flex flex-row flex-wrap justify-center mt-10 gap-10">
        <div data-aos="fade-up-right">
          <FontAwesomeIcon
            className="text-blue-color font-extrabold text-9xl"
            icon={faHtml5}
          />
        </div>
        <div data-aos="fade-up-right">
          <FontAwesomeIcon
            className="text-blue-color font-extrabold text-9xl p-2"
            icon={faCss3}
          />
        </div>
        <div data-aos="zoom-in">
          <FontAwesomeIcon
            className="text-blue-color font-extrabold text-9xl p-2"
            icon={faJs}
          />
        </div>
        <div data-aos="zoom-in">
          <FontAwesomeIcon
            className="text-blue-color font-extrabold text-9xl p-2"
            icon={faReact}
          />
        </div>
        <div data-aos="zoom-in">
          <FontAwesomeIcon
            className="text-blue-color font-extrabold text-9xl p-2"
            icon={faNode}
          />
        </div>
        <div data-aos="fade-up-left">
          <FontAwesomeIcon
            className="text-blue-color font-extrabold text-9xl p-2"
            icon={faPython}
          />
        </div>
        <div data-aos="fade-up-left">
          <FontAwesomeIcon
            className="text-blue-color font-extrabold text-9xl p-2"
            icon={faGit}
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
