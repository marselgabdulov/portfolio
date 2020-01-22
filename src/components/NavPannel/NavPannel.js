import React, { useContext } from "react"
import { Link } from "gatsby"
import "./NavPannel.scss"
import NavpannelContext from "../../context/navpannel/navpannelContext"
import CrossMenu from "../CrossMenu/CrossMenu"

const links = [
  {
    to: "/about",
    name: "обо мне",
  },
  {
    to: "/projects",
    name: "работы",
  },
  {
    to: "/edu",
    name: "учебные работы",
  },
  {
    to: "/resume",
    name: "резюме",
  },
]

function NavPannel() {
  const navpannelContext = useContext(NavpannelContext)
  const { navpannel, closeNavpannel } = navpannelContext

  function handleClose() {
    closeNavpannel()
  }

  return (
    <>
      <div className={navpannel === true ? "nav-opened" : "nav-closed"}>
        <button className="nav-pannel__close-button" onClick={handleClose}>
          <div className="button-icon">
            <CrossMenu />
          </div>
        </button>
        <div className="nav-pannel__logo">
          <Link to="/" title="вернуться на главную">
            Марсель Габдулов
          </Link>
        </div>

        <div className="nav-pannel__menu">
          {links.map((item, index) => (
            <div className="menu__item" key={index}>
              <Link to={item.to} onClick={handleClose}>
                {item.name}
              </Link>
            </div>
          ))}

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
