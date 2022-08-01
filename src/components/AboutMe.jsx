import AOS from 'aos';
import 'aos/dist/aos.css';
import { me } from '../assets/img';
import { cv } from '../assets/docs/';

AOS.init();

const AboutMe = () => {
  return (
    <>
      <section className="mt-20 h-full bg-blue-color opacity-95 " id="about">
          <div className="mt-5 flex uppercase text-green-color font-bold text-2xl">
            <h2 className='mt-10 m-auto'>
              Acerca de Mí
            </h2>
          </div>
        <div data-aos="zoom-in" className="flex">
          <div>
            <img className="py-10 px-5 rounded-full" src={me} alt="me" />
          </div>
          <div className="flex flex-col flex-wrap-reverse justify-center text-white">
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
            <p></p>
          </div>
          <div className="m-auto">
            <a href={cv} target="_blank">
              <button className="hover:animate-bounce bg-primary-color w-full py-3 px-5 mr-1 rounded-md shadow-xl text-secondary-color font-bold uppercase hover:bg-green-color">
                Descargar CV
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
