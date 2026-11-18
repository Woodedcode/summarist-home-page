import logo from "./assets/logo.png";
import landing from "./assets/landing.png"

function App() {
  return (
    <>
      <div>
        <nav className="nav">
          <div className="nav__wrapper">
            <figure className="nav__img--mask">
              <img className="nav__img" src={logo} alt="Summarist Logo" />
            </figure>
            <ul className="nav__list--wrapper">
              <li classname="nav__list nav__list--login">Login</li>
              <li className="nav__list nav__list--mobile">About</li>
              <li className="nav__list nav__list--mobile">Contact</li>
              <li className="nav__list nav__list--mobile">Help</li>
            </ul>
          </div>
        </nav>
        <div>
          <section id="landing">
            <div className="container">
              <div className="row">
                <div className="landing__wrapper">
                  <div className="landing__content">
                    <h1 className="landing__content__title">
                      Gain more knowledge in less time
                    </h1>
                    <div className="landing__content__subtitle">
                      Great summaries for busy people, individuals who barely
                      have time to read, and even people who don't like to read.
                    </div>
                    <div className="btn home__cta--btn">
                      Login
                    </div>
                  </div>
                  <figure className="landing__image--mask">
                    <img src={landing} alt="Summarist landing illustration"/>
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
