import React from "react"
import "./layout.scss"
import Nav from "./Nav/Nav"
import NavPannel from "./NavPannel/NavPannel"
import NavpannelState from "../context/navpannel/NavpannelState"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <NavpannelState>
        <Nav />
        <NavPannel />
        <div className="content">
          <main>{children}</main>
        </div>
        <Footer />
      </NavpannelState>
    </>
  )
}

export default Layout

// Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
