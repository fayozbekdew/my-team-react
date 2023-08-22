//css
import './Header.css'

//React-router-dom
import { NavLink } from 'react-router-dom'

//Images
import Logo from '../../assets/myteam-logo.svg'

const Header = () => {
  return (
    // HEADER 
    <header className="header">
      <div className="container header-container">
        <div className="site-logo">
          <NavLink to="/" className="site-logo__link">
            <img src={Logo} alt="" className="site-logo__img" width="159" height="40"/>
          </NavLink>
        </div>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <NavLink to="/" className="navbar__item--link">home</NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/about" className="navbar__item--link" >about</NavLink>
            </li>
          </ul>
        </nav>
        <NavLink to="/contact" className="site-btn bright-btn header-btn">
          contact us
        </NavLink>
      </div>
    </header>
  )
}

export default Header