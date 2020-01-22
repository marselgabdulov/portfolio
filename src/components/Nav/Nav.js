import React, { useContext } from "react"
import "./Nav.scss"
import { Link } from "gatsby"
import NavpannelContext from "../../context/navpannel/navpannelContext"
import BurgerMenu from "../BurgerMenu/BurgerMenu"

function Nav() {
  const navpannelContext = useContext(NavpannelContext)
  const { openNavpannel } = navpannelContext

  function handleOpen() {
    openNavpannel()
  }

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <div className="nav__logo">
          <Link to="/" title="вернуться на главную">
            Марсель Габдулов
          </Link>
        </div>
        <div className="nav__links">
          <Link className="nav__link" to="/about">
            обо мне
          </Link>
          <Link className="nav__link" to="/projects">
            работы
          </Link>
          <Link className="nav__link" to="/edu">
            учебные работы
          </Link>
          <Link className="nav__link" to="/resume">
            резюме
          </Link>
        </div>
        <div className="nav__menu-button" onClick={handleOpen}>
          <BurgerMenu />
        </div>
      </div>
    </nav>
  )
}

export default Nav
