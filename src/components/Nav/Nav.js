import React from "react"
import "./Nav.scss"
import { Link } from "gatsby"
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import LangButton from "../LangButton/LangButton"
import { connect } from "react-redux"
import { toggleNavPannel } from "../../state/app"

function Nav({ isNavPannelOpened, isEnglish, dispatch }) {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <div className="nav__logo">
          <Link to="/" title="вернуться на главную">
            {isEnglish ? "Marsel Gabdulov" : "Марсель Габдулов"}
          </Link>
        </div>
        <div className="nav__links">
          <Link className="link" to="/about">
            {isEnglish ? "about" : "обо мне"}
          </Link>
          <Link className="link" to="/projects">
            {isEnglish ? "projects" : "работы"}
          </Link>
          <Link className="link" to="/pet-projects">
            {isEnglish ? "pet projects" : "учебные работы"}
          </Link>
          <Link className="link" to="/resume">
            {isEnglish ? "resume" : "резюме"}
          </Link>
          <LangButton />
        </div>
        <div
          className="nav__menu-button"
          onClick={() => dispatch(toggleNavPannel(!isNavPannelOpened))}
        >
          <BurgerMenu />
        </div>
      </div>
    </nav>
  )
}

export default connect(
  state => ({
    isNavPannelOpened: state.app.isNavPannelOpened,
    isEnglish: state.app.isEnglish,
  }),
  null
)(Nav)
