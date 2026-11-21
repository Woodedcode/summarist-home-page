import logo from '../assets/logo.png';

function Navbar({onOpenAuth}) {
  return (
    <>
      <nav className="nav">
        <div className="nav__wrapper">
          <figure className="nav__img--mask">
            <img className="nav__img" src={logo} alt="Summarist Logo" />
          </figure>
          <ul className="nav__list--wrapper">
            <li className="nav__list nav__list--login" onClick={onOpenAuth}>Login</li>
            <li className="nav__list nav__list--mobile">About</li>
            <li className="nav__list nav__list--mobile">Contact</li>
            <li className="nav__list nav__list--mobile">Help</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
