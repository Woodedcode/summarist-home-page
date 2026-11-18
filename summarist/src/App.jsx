import logo from "./assets/logo.png";
import landing from "./assets/landing.png"
import { AiFillFileText,AiFillBulb,AiFillAudio } from "react-icons/ai";

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
                      Gain more knowledge
                      <br className="remove--tablet" />
                      in less time
                    </h1>
                    <div className="landing__content__subtitle">
                      Great summaries for busy people,
                      <br className="remove--tablet" /> 
                      individuals who barely have time to read, 
                      <br className="remove--tablet" />
                      and even people who don't like to read.
                    </div>
                    <button className="btn home__cta--btn">
                      Login
                    </button>
                  </div>
                  <figure className="landing__image--mask">
                    <img src={landing} alt="Summarist landing illustration"/>
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <section id="features">
            <div className="container">
              <div className="row">
                <h2 className="section__title">
                  Understand books in a few minutes
                </h2>
                <div className="features__wrapper">
                  <div className="features">
                  <div className="features__icon">
                    <AiFillFileText />
                  </div>
                    <div className="features__title">
                      Read or Listen
                    </div>
                    <div className="features__sub--title">
                      Save time by getting the core ideas from the best books.
                    </div>
                  </div>
                  <div className="features">
                  <div className="features__icon">
                    <AiFillBulb />
                  </div>
                    <div className="features__title">
                      Find your next read
                    </div>
                    <div className="features__sub--title">
                      Explore book lists and personalized recommendations.
                    </div>
                  </div>
                  <div className="features">
                  <div className="features__icon">
                    <AiFillAudio />
                  </div>
                    <div className="features__title">
                      Briefcasts
                    </div>
                    <div className="features__sub--title">
                      Gain valuable insights from briefcasts.
                    </div>
                  </div>
                </div>
                <div className="statistics__wrapper">
                  <div className="statistics__content--header">
                    <div className="statistics__heading">
                      Enhance your knowledge
                    </div>
                    <div className="statistics__heading">
                      Achieve greater success
                    </div>
                    <div className="statistics__heading">
                      Improve your health
                    </div>
                    <div className="statistics__heading">
                      Develop better parenting skills
                    </div>
                    <div className="statistics__heading">
                      Increase happiness
                    </div>
                    <div className="statistics__heading">
                      Be the best version of yourself!
                    </div>
                  </div>
                  <div className="statistics__content--details">
                  <div className="statistics__data">
                    <div className="statistics__data--number">
                      93%
                    </div>
                    <div className="statistics__data--title">
                      of Summarist members <b>significantly increase</b> reading frequency.
                    </div>
                  </div>
                  <div className="statistics__data">
                    <div className="statistics__data--number">
                      95%
                    </div>
                    <div className="statistics__data--title">
                      of Summarist members <b>establish better</b> habits.
                    </div>
                  </div>
                  <div className="statistics__data">
                    <div className="statistics__data--number">
                      90%
                    </div>
                    <div className="statistics__data--title">
                      have made <b>significant positive</b> change to their lives.
                    </div>
                  </div>
                  </div>
                </div>
                <div className="statistics__wrapper">
                  <div className="statistics__content--header statistics__content--details-second">
                  
                  </div>
                  <div className="statistics__content--header statistics__content--header-second">
                    
                  </div>
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
