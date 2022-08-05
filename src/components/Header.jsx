import { logo } from '../assets/img';
const Header = () => {
  return (
    <nav className="flex justify-evenly">
      <div className='mt-3'>
        <img
          src={logo}
          alt="logo"
          className="rounded-full w-1/3 p-1  opacity-80"
        />
      </div>

      <ul id="nav-mobile" className="relative text-white flex gap-10 text-center items-center">
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
    </nav>
  );
};

export default Header;
