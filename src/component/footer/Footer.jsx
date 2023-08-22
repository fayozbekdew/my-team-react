import { NavLink } from 'react-router-dom'
import './Footer.css'

//Images
import FacebookImg from '../../assets/icon-facebook.svg'
import PinterestImg from '../../assets/icon-pinterest.svg'
import TwitterImg from '../../assets/icon-twitter.svg'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer-container">
        <div className="site-footer-logo">
          <img src="./images/svg/myteam-logo.svg" alt="" className="site-footer-logo__img"/>
          <ul className="site-footer-logo__list">
            <li className="site-footer-logo__item">
              <NavLink to="/" className="site-footer-logo__item-link">home</NavLink>
            </li>
            <li className="site-footer-logo__item">
              <NavLink to="/about" className="site-footer-logo__item-link">about</NavLink>
            </li>
          </ul>
        </div>
        <div className="site-footer-info">
            <p className="site-footer-info__text">
            987  Hillcrest Lane <br/> Irvine, CA <br/> California 92714 <br/> Call Us : 949-833-7432
            </p>
        </div>
        <div className="site-footer-social">
          <ul className="site-footer-info__list">
            <li className="site-footer-info__item">
              <a href="https://twitter.com" className="site-footer-info__link">
                <img src={TwitterImg} alt="" className="site-footer-info__img" width="24" height="24"/>
              </a>
            </li>
            <li className="site-footer-info__item">
              <a href="https://pinterest.com" className="site-footer-info__link">
                <img src={PinterestImg} alt="" className="site-footer-info__img" width="24" height="24"/>
              </a>
            </li>
            <li className="site-footer-info__item">
              <a href="https://facebook.com" className="site-footer-info__link">
                <img src={FacebookImg} alt="" className="site-footer-info__img" width="24" height="24"/>
              </a>
            </li>
          </ul>
          <p className="site-footer-social__text">
            Copyright 2023. All Created by Fayoz
          </p>
        </div>
        </div>
    </footer>
  )
}

export default Footer