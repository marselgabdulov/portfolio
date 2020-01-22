import React from "react"
import "./layout.scss"
import Nav from "./Nav/Nav"
import NavPannel from "./NavPannel/NavPannel"
import NavpannelState from "../context/navpannel/NavpannelState"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,700&display=swap"
        rel="stylesheet"
      ></link>
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
