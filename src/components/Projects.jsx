import {
  quotes,
  task,
  poke,
  rym,
  hanoi,
  fStore
} from '../assets/img';
import ModalProjectsHanoi from '../helpers/ModalProjectsHanoi';
import ModalProjectsPoke from '../helpers/ModalProjectsPoke';
import ModalProjectsRyckYMorty from '../helpers/ModalProjectsRyckYMorty';
import ModalProjectsTask from '../helpers/ModalProjectsTask';
import ModalProjectsQuotes from '../helpers/ModalQuotes';
import ModalProjectsStoreFront from '../helpers/ModalStoreFront';

const Projects = () => {
  return (
    <>
      <main className='mb-56'>
        <h1 className="uppercase text-ellipsis mt-5 text-xl text-primary-color flex items-center justify-center bg-secondary-color opacity-75">
          Mis Proyectos
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 px-5 gap-3 mt-2">
          <div className="flex flex-col items-center">
            <div>
                <img className="w-full h-full rounded-md shadow-xl" src={task} alt="task" />
            </div>
            <div className='mt-2'>
              <ModalProjectsTask />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
                <img className="w-full h-full rounded-md shadow-xl" src={poke} alt="poke" />
          
            </div>
            <div className='mt-2'>
              <ModalProjectsPoke />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
                <img
                  className="w-full h-full rounded-md shadow-xl"
                  src={rym}
                  alt="rym"
                />
            </div>
            <div className='mt-2'>
              <ModalProjectsRyckYMorty />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
                <img className="w-full h-full rounded-md shadow-xl" src={hanoi} alt="hanoi" />
            </div>
            <div className='mt-2'>
              <ModalProjectsHanoi />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
                <img className="w-full h-full rounded-md shadow-xl" src={fStore} alt="fstore" />
            </div>
            <div className='mt-2'>
              <ModalProjectsStoreFront />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
                <img className="w-full h-full rounded-md shadow-xl" src={quotes} alt="quotes" />
            </div>
            <div className='mt-2'>
              <ModalProjectsQuotes />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
