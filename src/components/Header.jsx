const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul
          id="nav-mobile"
          className="flex flex-wrap items-center justify-end gap-5 mr-48  relative text-white"
        >
          <li>
            <a className="hover:border-b" href="#">
              Portafio
            </a>
          </li>
          <li>
            <a className="hover:border-b" id="about" href="#">
              Acerca de mí
            </a>
          </li>
          <li>
            <a className="hover:border-b" href="#">
              Contacto
            </a>
          </li>
          <li>
            <a className="hover:border-b" href="#">
              Habilidades
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
