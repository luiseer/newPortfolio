import AOS from 'aos';
import 'aos/dist/aos.css';
import { me } from '../assets/img';

AOS.init();

const AboutMe = () => {
  return (
    <>
      <section>
        

        <div data-aos="zoom-in" className="flex">
          <div>
            <img className='rounded-full' src={me} alt="me" />
          </div>
          <div className="flex flex-col justify-center text-white">
            <h2 className='text-xl mb-2'>
              Hola soy <span className="text-green-color">Luis Emmanuel Estrada Rodriguez</span>
            </h2>
            <p>
              Desde pequeño senti pasion por la tecnologia en general.
            </p>
            <p>
              En el año 2010 monte un pequño cafe internet con ubuntu.
            </p>
            <p>
              despues en el 2012 a 2016 estudie la licenciatura en sistemas computacionales.
            </p>
            <p>
              desde antes de ingresar a la carrera me desmpeñaba laboralmente 
            </p>
            <p>
              en puesto de soporte tecnico. en el año 2017 me coloque como responsable de 
            </p>
            <p>
              servicios informaticos para un edificio del poder judicial federal, en la ciudad de mexico
            </p>
            <p>
              en el año 2020 inicie con varios cursos en udemy como desarrollo web completo
            </p>
            <p>
              en el año 2021 inicio un bootcamp de programacion en Academlo.
            </p>
            <p>
              Actualmente he concluido el bootcamp y me encuentro buscando un trabajo
            </p>
            <p>
              
            </p>
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
