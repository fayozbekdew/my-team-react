import "./Contact.css";

//Images
import ExprienseImg from '../../assets/icon-feature-experience.svg'
import ImplementImg from '../../assets/icon-feature-implementation.svg'
import ProductivityImg from '../../assets/icon-feature-productivity.svg'

const Contact = () => {
  return (
    <section className="contact">
      <div className="container contact-container">
        <div className="contact__info">
          <h1 className="contact__info__tittle">Contact</h1>
          <ul className="features-advantage__list">
            <h4 className="conatct__info__list__tittle">Ask us about</h4>
            <li className="features-advantage__item">
              <div className="features-advantage__item__info">
                <img
                  src={ExprienseImg}
                  alt=""
                  className="features-advantage__item__info__img"
                  width="72"
                  height="72"
                />
                <div className="features-advantage__item__info__wrappers">
                  <p className="features-advantage__item__info__wrappers__text">
                    The quality of our talent network
                  </p>
                </div>
              </div>
            </li>

            <li className="features-advantage__item">
              <div className="features-advantage__item__info">
                <img
                  src={ImplementImg}
                  alt=""
                  className="features-advantage__item__info__img"
                  width="72"
                  height="72"
                />
                <div className="features-advantage__item__info__wrappers">
                  <p className="features-advantage__item__info__wrappers__text">
                    Usage & implementation of our software
                  </p>
                </div>
              </div>
            </li>

            <li className="features-advantage__item">
              <div className="features-advantage__item__info">
                <img
                  src={ProductivityImg}
                  alt=""
                  className="features-advantage__item__info__img"
                  width="72"
                  height="72"
                />
                <div className="features-advantage__item__info__wrappers">
                  <p className="features-advantage__item__info__wrappers__text">
                    How we help drive innovation
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact__form">
          <form action="https://echo.htmlacademy.ru" method="get">
            <input type="text" required name="name" placeholder="Name" />
            <br />
            <hr class="form-hr" />
            <input
              type="text"
              required
              name="Email Address"
              placeholder="Email Address"
            />
            <br />
            <hr class="form-hr" />
            <input
              type="text"
              required
              name="Company Name"
              placeholder="Company Name"
            />
            <br />
            <hr class="form-hr" />
            <input type="text" required name="Title" placeholder="Title" />{" "}
            <br />
            <hr class="form-hr" />
            <input type="text" required name="Message" placeholder="Message" />
            <br />
            <hr class="form-hr" />
            <button class="form-btn" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
