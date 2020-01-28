import React from "react"
import "./layout.scss"
import Nav from "./Nav/Nav"
import NavPannel from "./NavPannel/NavPannel"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <div className="turn">
        <span>Пожалуйста переверните</span>
      </div>
      <Nav />
      <NavPannel />
      <div className="content">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout

// Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
