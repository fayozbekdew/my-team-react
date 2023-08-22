import './GetStarted.css'

//React-router-dom
import { NavLink } from 'react-router-dom'

const GetStarted = () => {
  return (
    <section className="started">
        <div className="container started-container">
          <h1 className="started-tittle">
            Ready to get started?
          </h1>
          <NavLink to="/contact" className="site-btn bright-btn started-btn">
            contact us
          </NavLink>
        </div>
      </section>
  )
}

export default GetStarted