import AOS from 'aos';
import 'aos/dist/aos.css';
import { me } from '../assets/img';

AOS.init();

const AboutMe = () => {
  return (
    <>
      <section>
        <h2>Acerca de Mí</h2>
        <div>
          <div className='flex flex-col items-center justify-center'>
            <button className=''>Descargar CV</button>
          </div>
          <div data-aos="zoom-in">
            <img src={me} alt="me" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
