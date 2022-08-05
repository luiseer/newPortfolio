import { logo } from '../assets/img';
const Header = () => {
  return (
    <nav className="flex justify-between items-center text-center">

      <div>
        <img src={logo} alt="logo" className='rounded-full w-1/3 p-1 ml-10 mt-5 opacity-80' />
      </div>

      <div className="py-5">
        <ul
          id="nav-mobile"
          className="flex flex-wrap items-center justify-end gap-5 mr-48  relative text-white"
        >
          <li>
            <a className="hover:border-b text-md" href="#portafolio">
              Portafio
            </a>
          </li>
          <li>
            <a className="hover:border-b text-md" href="#acerca-de-mi">
              Acerca de mí
            </a>
          </li>
          <li>
            <a className="hover:border-b text-md" href="#habilidades">
              Habilidades
            </a>
          </li>
          <li>
            <a className="hover:border-b text-md" href="#contacto">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
