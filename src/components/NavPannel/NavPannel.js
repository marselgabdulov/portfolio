import React from "react"
import { Link } from "gatsby"
import "./NavPannel.scss"
import CrossMenu from "../CrossMenu/CrossMenu"
import { toggleNavPannel } from "../../state/app"
import LangButton from "../LangButton/LangButton"

function NavPannel({ isNavPannelOpened, isEnglish, dispatch }) {
  return (
    <>
      <div className={isNavPannelOpened ? "nav-opened" : "nav-closed"}>
        <button
          className="nav-pannel__close-button"
          onClick={() => dispatch(toggleNavPannel(!isNavPannelOpened))}
        >
          <div className="button-icon">
            <CrossMenu />
          </div>
        </button>
        <div className="nav-pannel__logo">
          <Link to="/" title="вернуться на главную">
            {isEnglish ? "MG" : "МГ"}
          </Link>
        </div>
        <div className="nav-pannel__menu">
          <LangButton />
          <div className="menu__item">
            <Link
              to="/about"
              onClick={() => dispatch(toggleNavPannel(!isNavPannelOpened))}
            >
              {isEnglish ? "about" : "обо мне"}
            </Link>
          </div>
          <div className="menu__item">
            <Link
              to="/projects"
              onClick={() => dispatch(toggleNavPannel(!isNavPannelOpened))}
            >
              {isEnglish ? "projects" : "работы"}
            </Link>
          </div>
          <div className="menu__item">
            <Link
              to="/pet-projects"
              onClick={() => dispatch(toggleNavPannel(!isNavPannelOpened))}
            >
              {isEnglish ? "pet projects" : "учебные работы"}
            </Link>
          </div>
          <div className="menu__item">
            <Link
              to="/resume"
              onClick={() => dispatch(toggleNavPannel(!isNavPannelOpened))}
            >
              {isEnglish ? "resume" : "резюме"}
            </Link>
          </div>
          <div className="nav-pannel__phone">
            <a href="tel:+79166228889">+7 916 622 88 89</a>
          </div>
          <div className="nav-pannel__email">
            <a href="mailto:marsel.gabdulov@gmail.com">
              marsel.gabdulov@gmail.com
            </a>
          </div>

          <div className="nav-pannel__social-links">
            <div className="nav-pannel__social-icon">
              <a
                href="https://www.facebook.com/marsel.gabdulov"
                title="facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fb
              </a>
            </div>
            <div className="nav-pannel__social-icon">
              <a
                href="https://www.instagram.com/marsel_gabdulov/"
                title="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inst
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavPannel
