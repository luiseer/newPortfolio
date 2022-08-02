
import {
  blogcafe,
  festival,
  freelancer,
  store,
  poke_img,
  quotes
} from '../assets/img';
import ModalProjects from '../helpers/ModalProjects'


const Projects = () => {
  return (
    <>
      <main>
        <h1 className="uppercase text-ellipsis mt-5 text-xl text-primary-color flex items-center justify-center bg-secondary-color opacity-75">
          Mis Proyectos
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 px-5 gap-3 mt-1">
          <div>
            <a href="">
              <img className="w-full h-full" src={blogcafe} alt="blog-cafe" />
              <div>
                <ModalProjects />
              </div>
            </a>
          </div>
          <div>
            <a href="">
              <img className="w-full h-full" src={festival} alt="festival" />
            </a>
          </div>
          <div>
            <a href="">
              <img
                className="w-full h-full"
                src={freelancer}
                alt="freelancer"
              />
            </a>
          </div>
          <div>
            <a href="">
              <img className="w-full h-full" src={store} alt="store" />
            </a>
          </div>
          <div>
            <a href="">
              <img className="w-full h-full" src={poke_img} alt="poke" />
            </a>
          </div>
          <div>
            <a href="">
              <img className="w-full h-full" src={quotes} alt="quotes" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
