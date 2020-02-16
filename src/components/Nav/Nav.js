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
          <Link
            to="/"
            title={isEnglish ? "back to home page" : "вернуться на главную"}
          >
            {isEnglish ? "Marsel Gabdulov" : "Марсель Габдулов"}
          </Link>
        </div>
        <div className="nav__links">
          <Link
            className="link"
            to="/projects"
            activeStyle={{ fontWeight: "bold" }}
          >
            {isEnglish ? "projects" : "работы"}
          </Link>
          <Link
            className="link"
            to="/contacts"
            activeStyle={{ fontWeight: "bold" }}
          >
            {isEnglish ? "contacts" : "контакты"}
          </Link>
          <Link
            className="link"
            to="/blog"
            activeStyle={{ fontWeight: "bold" }}
          >
            {isEnglish ? "blog" : "блог"}
          </Link>
        </div>
        <div
          className="nav__menu-button"
          onClick={() => dispatch(toggleNavPannel(!isNavPannelOpened))}
        >
          <BurgerMenu />
        </div>
        <LangButton />
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
