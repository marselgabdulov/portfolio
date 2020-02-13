import React from "react"
import "./layout.scss"
import Nav from "./Nav/Nav"
import NavPannel from "./NavPannel/NavPannel"
import Footer from "./Footer/Footer"
import { connect } from "react-redux"

const Layout = ({ isEnglish, children }) => {
  return (
    <>
      <div className="turn">
        <span>{isEnglish ? "Please turn over" : "Пожалуйста переверните"}</span>
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

export default connect(
  state => ({ isEnglish: state.app.isEnglish }),
  null
)(Layout)
