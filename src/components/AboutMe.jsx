import { me } from '../assets/img';

const AboutMe = () => {
  return (
    <>
      <section>
        <h2>Acerca de Mí</h2>
        <div>
          <div className='flex flex-col items-center justify-center'>
            <button className=''>Descargar CV</button>
          </div>
          <div>
            <img src={me} alt="me" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
