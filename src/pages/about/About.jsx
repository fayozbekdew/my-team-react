//component
import GetStarted from '../../component/getStarted/GetStarted'
//css
import './About.css'
//Images

//Dirextors-img
import twittericon from '../../assets/twitter-img.svg'
import inIcon from '../../assets/in-img.svg'
import blueCircle from '../../assets/blue-circle.png'
import plusImg from '../../assets/red-circle.png'
import NikitaImg from '../../assets/nikita.jpg'
import CristianImg from '../../assets/cristian.jpg'
import CruzImg from '../../assets/cruz.jpg'
import DrakeImg from '../../assets/drake.jpg'
import GriffinImg from '../../assets/griffin.jpg'
import DirectorsCard from '../../component/directorscCard/DirectorsCard'
//Clients-img
import theVerse  from '../../assets/the-verge.svg'
import theJacarta from '../../assets/the-jakarta-post.svg'
import theDuardian from '../../assets/the-guardian.svg'
import techRadar from '../../assets/techradar.svg'
import gatjets from '../../assets/gadgets-now.svg'


const About = () => {
  const directorData = [
    {id:1, title:"Nikita Marks", exsperiense:"Founder & CEO",img:NikitaImg, plusImg: plusImg  },
    {id:2, title:"Cristian Duncan", exsperiense:"Co-founder & COO",img:CristianImg, plusImg: plusImg  },
    {id:3, title:"Cruz Hamer", exsperiense:"Co-founder & CTO",img:CruzImg, plusImg: plusImg  },
    {id:4, title:"Drake Heaton", exsperiense:"Business Development Lead",img:DrakeImg, plusImg: plusImg  },
    {id:5, title:"Griffin Wise", exsperiense:"Lead Marketing",img:GriffinImg, plusImg: plusImg  },
  ]

  return (
    <main className="main">
    {/*  HERO */}
    <section className="about-hero">
      <div className="container about-hero__container">
        <div className="about-hero__tittle">
          <h1 className="about-hero__tittle__text">
            About
          </h1>
        </div>
        <div className="about-hero__info">
          <hr className="site-hr about-hr"/>
          <p className="about-hero__info__text">
            We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </div>
    </section>

    <section className="directors">
      <div className="container directors-container">
        <h1 className="directors__tittle">
          Meet the directors
        </h1>
        <ul className="directors__list">
         <DirectorsCard data={directorData} />
          <li className="directors__item">
            <div className="directors__item__member">
              <h5 className="directors__item__member__user__name">
                Aden Allan
              </h5>
              <p className="directors__item__member__user__direction">
                “Empowered teams create truly amazing products. Set the north star and let them follow it.”
              </p>
              <ul className="directions__item__member__list">
                <li className="directions__item__member__item">
                  <a href="https://twitter.com" className="directions__item__member__item__link">
                    <img src={twittericon} alt="" className="directions__item__member__item__img" width="20" height="20"/>
                  </a>
                </li>
                <li className="directions__item__member__item">
                  <a href="#" className="directions__item__member__item__link">
                    <img src={inIcon} alt="" className="directions__item__member__item__img" width="20" height="20"/>
                  </a>
                </li>
              </ul>
              <img src={blueCircle} alt="" className="directors__item__member__img" width="56" height="56"/>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section className="clients">
      <div className="container clients-container">
        <h1 className="clients__tittle">
          Some of our clients
        </h1>
        <ul className="clients__list">
          <li className="clients__item">
            <img src={theVerse} alt="" className="clients__item__img"/>
          </li>
          <li className="clients__item">
            <img src={theJacarta} alt="" className="clients__item__img"/>
          </li>
          <li className="clients__item">
            <img src={theDuardian} alt="" className="clients__item__img"/>
          </li>
          <li className="clients__item">
            <img src={techRadar} alt="" className="clients__item__img"/>
          </li>
          <li className="clients__item">
            <img src={gatjets} alt="" className="clients__item__img"/>
          </li>
        </ul>
      </div>
    </section>
      {/*  GET-STARTED */}
    <GetStarted/>
    </main>
  )
}

export default About