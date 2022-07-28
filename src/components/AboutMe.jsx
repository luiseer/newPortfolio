import AOS from 'aos';
import 'aos/dist/aos.css';
import { me } from '../assets/img';

AOS.init();

const AboutMe = () => {
  return (
    <>
      <section className='mt-20'>
        <h2 className='text-center uppercase text-green-color font-bold'>Acerca de Mí</h2>
        <div data-aos="zoom-in" className="flex">
          <div>
            <img className="rounded-full" src={me} alt="me" />
          </div>
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-xl mb-2">
              Hola, soy{' '}
              <span className="text-green-color">
                Luis Emmanuel Estrada Rodríguez
              </span>
            </h2>
            <p>Desde pequeño sentí pasión por la tecnología en general.</p>
            <p>En el año 2010 monte un pequeño café internet con Ubuntu.</p>
            <p>
              Después en el 2012 a 2016 estudie la licenciatura en sistemas
              computacionales.
            </p>
            <p>
              Desde antes de ingresar a la carrera me desempeñaba laboralmente
              en puesto de soporte técnico.
            </p>
            <p>
              En el año 2017 me coloque como responsable de servicios
              informáticos para
            </p>
            <p>
              un edificio del poder judicial federal, en la ciudad de México
            </p>
            <p>
              servicios informaticos para un edificio del poder judicial
              federal, en la ciudad de mexico
            </p>
            <p>
              eEn el año 2020 inicie con varios cursos en Udemy como desarrollo
              web completo
            </p>
            <p>en 2021 inicio un bootcamp de programación en Academlo.</p>
            <p>
              Actualmente he concluido el bootcamp y me encuentro buscando un
              trabajo
            </p>
            <p></p>
          </div>
          <div className="m-auto">
            <button className="bg-primary-color w-full py-3 px-5 rounded-md shadow-xl text-secondary-color font-bold uppercase hover:bg-green-color">
              Descargar CV
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
