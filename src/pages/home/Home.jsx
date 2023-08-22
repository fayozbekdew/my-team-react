//React-router-dom
import { NavLink } from 'react-router-dom'
//component
import GetStarted from '../../component/getStarted/GetStarted'
//css
import './Home.css'
// images
import exprienseImg from '../../assets/icon-feature-experience.svg'
import implementImg from '../../assets/icon-feature-implementation.svg'
import productivImg from '../../assets/icon-feature-productivity.svg'
//Users-img
import KadyImg from '../../assets/kady.jpg'
import AishaImg from '../../assets/aisha.jpg'
import ArturImg from '../../assets/arthur.jpg'


function Home() {
  return (
    <main className="main">
      {/* HERO  */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-tittle">
            <h1 className="hero-tittle__text">
              Find the <br/> best
              <span className="hero-tittle__red">
                talent
              </span>
            </h1>
          </div>
          <div className="hero-info">
            <hr className="site-hr hero-info__hr"/>
            <p className="hero-info__text">
              Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
            </p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container features-container">
          
          <div className="features-tittle">
            <hr className="site-hr features__hr"/>
            <h1 className="features-tittle__text">
              Build & manage <br/> distributed teams <br/> like no one else.
            </h1>
          </div>
          <div className="features-advantage">
            <ul className="features-advantage__list">
              <li className="features-advantage__item">
                  <div className="features-advantage__item__info">
                    <img src={exprienseImg} alt="" className="features-advantage__item__info__img" width="72" height="72"/>
                    <div className="features-advantage__item__info__wrappers">
                      <h4 className="features-advantage__item__info__wrappers__tittle">
                        Experienced Individuals
                      </h4>
                      <p className="features-advantage__item__info__wrappers__text">
                        Our network is made up of highly experienced professionals who are passionate about what they do.
                      </p>
                    </div>
                  </div>
              </li>
          
              <li className="features-advantage__item">
                <div className="features-advantage__item__info">
                  <img src={implementImg} alt="" className="features-advantage__item__info__img" width="72" height="72"/>
                  <div className="features-advantage__item__info__wrappers">
                    <h4 className="features-advantage__item__info__wrappers__tittle">
                      Easy to Implement
                    </h4>
                    <p className="features-advantage__item__info__wrappers__text">
                      Our processes have been refined over years of implementation meaning our teams always deliver.
                    </p>
                  </div>
                </div>
              </li>
          
              <li className="features-advantage__item">
                <div className="features-advantage__item__info">
                  <img src={productivImg} alt="" className="features-advantage__item__info__img" width="72" height="72"/>
                  <div className="features-advantage__item__info__wrappers">
                    <h4 className="features-advantage__item__info__wrappers__tittle">
                      Enhanced Productivity
                    </h4>
                    <p className="features-advantage__item__info__wrappers__text">
                      Our customized platform with in-built analytics helps you manage your distributed teams.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/*  USER-SECTION  */}

      <section className="users">
        <div className="container users-container">
          <h1 className="users__tittle">
            Delivering real results for top <br/> companies. Some of our 
            <span className="user__tittle__blue">
              success stories.
            </span>
          </h1>
          {/*  USERS  */}
          <ul className="users__list">
            <li className="users__item">
              <p className="users-item__info">
                “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
              </p>
              <h5 className="users__item__name">
                Kady Baker
              </h5>
              <p className="users__item__direction">
                Product Manager at Bookmark
              </p>
              <img src={KadyImg} alt="" className="users__item__img" width="62" height="62"/>
            </li>
            
            <li className="users__item">
              <p className="users-item__info">
                “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”
              </p>
              <h5 className="users__item__name">
                Aiysha Reese
              </h5>
              <p className="users__item__direction">
                Founder of Manage
              </p>
              <img src={AishaImg} alt="" className="users__item__img" width="62" height="62"/>
            </li>
            
            <li className="users__item">
              <p className="users-item__info">
                “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”
              </p>
              <h5 className="users__item__name">
                Arthur Clarke
              </h5>
              <p className="users__item__direction">
                Co-founder of MyPhysio
              </p>
              <img src={ArturImg} alt="" className="users__item__img" width="62" height="62"/>
            </li>
          </ul>
        </div>
      </section>

      {/* GET-STARTED  */}

      <GetStarted/>
    </main>
  )
}

export default Home