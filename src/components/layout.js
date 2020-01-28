import React from "react"
import "./layout.scss"
import Nav from "./Nav/Nav"
import NavPannel from "./NavPannel/NavPannel"
import { connect } from "react-redux"
import Footer from "./Footer/Footer"

const Layout = ({ children, isEnglish, isNavPannelOpened }) => {
  return (
    <>
      <div className="turn">
        <span>Пожалуйста переверните</span>
      </div>
      <Nav isEnglish={isEnglish} isNavPannelOpened={isNavPannelOpened} />
      <NavPannel isEnglish={isEnglish} isNavPannelOpened={isNavPannelOpened} />
      <div className="content">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default connect(
  state => ({
    isNavPannelOpened: state.app.isNavPannelOpened,
    isEnglish: state.app.isEnglish,
  }),
  null
)(Layout)

// Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
