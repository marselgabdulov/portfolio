import React from "react"
import "./Nav.scss"
import { Link } from "gatsby"
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import { connect } from "react-redux"
import { toggleNavPannel } from "../../state/app"

function Nav({ isNavPannelOpened, dispatch }) {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <div className="nav__logo">
          <Link to="/" title="вернуться на главную">
            Марсель Габдулов
          </Link>
        </div>
        <div className="nav__links">
          <Link className="link" to="/about">
            обо мне
          </Link>
          <Link className="link" to="/projects">
            работы
          </Link>
          <Link className="link" to="/edu">
            учебные работы
          </Link>
          <Link className="link" to="/resume">
            резюме
          </Link>
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
  state => ({ isNavPannelOpened: state.app.isNavPannelOpened }),
  null
)(Nav)
