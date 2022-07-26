const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul
          id="nav-mobile"
          className="flex flex-wrap items-center justify-end gap-5 mr-48 mt-9 relative text-white"
        >
          <li>
            <a className="hover:border-b" href="#">
              Portafio
            </a>
          </li>
          <li>
            <a className="hover:border-b" href="#">
              Acerca de mí
            </a>
          </li>
          <li>
            <a className="hover:border-b" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
