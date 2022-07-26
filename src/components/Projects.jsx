import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  blogcafe,
  festival,
  freelancer,
  store,
  poke_img,
  quotes
} from '../assets/img';

AOS.init();

const Projects = () => {
  return (
    <>
      <main data-aos="flip-right">
        <h1 className="uppercase text-ellipsis mt-5 text-xl text-white flex items-center justify-center bg-slate-500">
          Mis Proyectos
        </h1>
        {/* full responsive grid  */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 px-5 gap-3 mt-1">
          <div>
            <a href="">
              <img className="w-full h-full" src={blogcafe} alt="blog-cafe" />
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
