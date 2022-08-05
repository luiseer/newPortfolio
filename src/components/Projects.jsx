import {
  quotes,
  task,
  poke,
  rym,
  hanoi,
  fStore
} from '../assets/img';
import ModalProjects from '../helpers/ModalProjects';
import ModalProjectsTask from '../helpers/ModalProjectsTask';

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
              <a href="">
                <img className="w-full h-full rounded-md shadow-xl" src={task} alt="task" />
              </a>
            </div>
            <div className='mt-2'>
              <ModalProjectsTask />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <a href="">
                <img className="w-full h-full rounded-md shadow-xl" src={poke} alt="poke" />
              </a>
            </div>
            <div className='mt-2'>
              <ModalProjects />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <a href="">
                <img
                  className="w-full h-full rounded-md shadow-xl"
                  src={rym}
                  alt="rym"
                />
              </a>
            </div>
            <div className='mt-2'>
              <ModalProjects />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <a href="">
                <img className="w-full h-full rounded-md shadow-xl" src={hanoi} alt="hanoi" />
              </a>
            </div>
            <div className='mt-2'>
              <ModalProjects />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <a href="">
                <img className="w-full h-full rounded-md shadow-xl" src={fStore} alt="fstore" />
              </a>
            </div>
            <div className='mt-2'>
              <ModalProjects />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <a href="">
                <img className="w-full h-full rounded-md shadow-xl" src={quotes} alt="quotes" />
              </a>
            </div>
            <div className='mt-2'>
              <ModalProjects />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
