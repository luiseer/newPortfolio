import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faGithub,
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
      <h2 className="text-center uppercase text-green-color font-bold text-2xl mt-56">
        Mis habilidades
      </h2>
      <section className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 text-white px-5 gap-3 mt-2">
        <div data-aos="fade-up-right">
          <div className="card text-center border-2 h-full">
            <div>
              <FontAwesomeIcon
                className="text-blue-color font-extrabold text-9xl"
                icon={faHtml5}
              />
            </div>
            <ul>
              <li>Conocimiento en SEO</li>
              <li>Maquetado de proyectos</li>
            </ul>
          </div>
        </div>
        <div data-aos="fade-up-right">
          <div className="text-center card border-2 h-full">
            <div>
              <FontAwesomeIcon
                className="text-blue-color font-extrabold text-9xl p-2"
                icon={faCss3}
              />
            </div>
            <ul>
              <li>Modelos CSS grid</li>
              <li>Modelos CSS Flexbox</li>
              <li>Uso de procesador de CSS SASS</li>
              <li>Uso de Tailwind CSS</li>
            </ul>
          </div>
        </div>

        <div data-aos="zoom-in">
          <div className="text-center card border-2 h-full">
            <div>
              <FontAwesomeIcon
                className="text-blue-color font-extrabold text-9xl p-2"
                icon={faJs}
              />
            </div>
            <ul>
              <li>Conocimiento intermedio en el uso de Java Script</li>
              <li>Conocimientos basicos en POO con JS</li>
              <li>Solucion de problemas de logica</li>
            </ul>
          </div>
        </div>

        <div data-aos="zoom-in">
          <div className="text-center card border-2 h-full">
            <div>
              <FontAwesomeIcon
                className="text-blue-color font-extrabold text-9xl p-2"
                icon={faReact}
              />
            </div>
            <ul>
              <li>Conocimiento intermedio en React</li>
              <li>Consumo de API`s</li>
              <li>Uso de React router dom</li>
              <li>Uso de Redux</li>
            </ul>
          </div>
        </div>

        <div data-aos="zoom-in">
          <div className="text-center card border-2 h-full">
            <div>
              <FontAwesomeIcon
                className="text-blue-color font-extrabold text-9xl p-2"
                icon={faNode}
              />
            </div>
            <ul>
              <li>
                Conocimento em bases de datos relacionales y no relacionales
              </li>
              <li>Uso de Express</li>
              <li>Creación de API`s</li>
              <li>Uso de MVC</li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up-left">
          <div className="text-center card border-2 h-full">
            <div>
              <FontAwesomeIcon
                className="text-blue-color font-extrabold text-9xl p-2"
                icon={faPython}
              />
            </div>
            <ul>
              <li>Conocimiento basico del lenjuage</li>
              <li>Creacion de API`s con Django</li>
              <li>Documentación usando swagger</li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up-left">
          <div className="text-center card border-2 h-full">
            <div>
              <FontAwesomeIcon
                className="text-blue-color font-extrabold text-9xl p-2"
                icon={faGithub}
              />
            </div>
            <ul>
              <li>Trabajo en equipo usando diferentes ramas</li>
              <li>Control de permisos</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;