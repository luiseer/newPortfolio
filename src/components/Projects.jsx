import {
  blogcafe,
  festival,
  freelancer,
  store,
  poke_img,
  quotes
} from '../assets/img';

const Projects = () => {
  return (
    <>
      <main>
        <h1 className="uppercase text-ellipsis mt-5 text-xl text-white flex items-center justify-center bg-slate-500">
          Mis Proyectos
        </h1>
        {/* full responsive grid  */}
        <div className="grid grid-cols-3 gap-3 mt-1">
          <div>
            <img className="w-full h-full" src={blogcafe} alt="blog-cafe" />
          </div>
          <div>
            <img className="w-full h-full" src={festival} alt="festival" />
          </div>
          <div>
            <img className="w-full h-full" src={freelancer} alt="freelancer" />
          </div>
          <div>
            <img className="w-full h-full" src={store} alt="store" />
          </div>
          <div>
            <img className="w-full h-full" src={poke_img} alt="poke" />
          </div>
          <div>
            <img className="w-full h-full" src={quotes} alt="quotes" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
