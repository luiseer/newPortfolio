import AOS from 'aos';
import 'aos/dist/aos.css';
import { me } from '../assets/img';
import { cv } from '../assets/docs/';

AOS.init();

const AboutMe = () => {
  return (
    <section className="bg-blue-color mb-56 py-16 shadow-2xl" id="about">
      <div
        data-aos="zoom-in"
        className="flex justify-around items-center gap-4  flex-wrap"
      >
        <div>
          <img
            className="py-10 px-5 w-full md:w-4/5 rounded-full"
            src={me}
            alt="me"
          />
        </div>
        <div className="text-white">
          <div className="mt-5 uppercase text-green-color font-bold text-2xl">
            <h2 className="mb-10 ml-3">Acerca de Mí</h2>
          </div>
          <div className="ml-3 mb-3">
            <h2 className="text-xl mb-2">
              Hola, soy{' '}
              <span className="text-green-color">
                Luis Emmanuel Estrada Rodríguez
              </span>
            </h2>
            <p>Desde pequeño sentí pasión por la tecnología en general.</p>
            <p>
              En el 2012 a 2016 estudie la licenciatura en sistemas
              computacionales.
            </p>
            <p>
              En el año 2020 inicie con varios cursos en Udemy como desarrollo
              web completo
            </p>
            <p>
              En 2021 inicio un bootcamp de programación en{' '}
              <a
                className="text-green-color"
                target="_blank"
                href="https://www.academlo.com/"
              >
                Academlo.
              </a>
            </p>
            <p>
              Actualmente he concluido el bootcamp y me encuentro buscando un
              trabajo
            </p>
          </div>
        </div>

        <div>
          <a href={cv} target="_blank">
            <button className="hover:animate-bounce bg-primary-color w-full py-3 px-5 m-5 rounded-md shadow-xl text-secondary-color font-bold uppercase hover:bg-green-color">
              Descargar CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
