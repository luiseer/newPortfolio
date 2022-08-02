const Header = () => {
  return (
    <nav>
      <div className="py-5">
        <ul
          id="nav-mobile"
          className="flex flex-wrap items-center justify-end gap-5 mr-48  relative text-white"
        >
          <li>
            <a className="hover:border-b" href="#portafolio">
              Portafio
            </a>
          </li>
          <li>
            <a className="hover:border-b" href="#acerca-de-mi" >
              Acerca de mí
            </a>
          </li>
          <li>
            <a className="hover:border-b" href="#habilidades">
              Habilidades
            </a>
          </li>
          <li>
            <a className="hover:border-b" href="#contacto">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
