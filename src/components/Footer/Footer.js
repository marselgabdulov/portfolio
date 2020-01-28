import React from "react"
import "./Footer.scss"

function Footer({ isEnglish }) {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__social">
          <a
            href="https://github.com/marselgabdulov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Github</b>
          </a>
        </div>
        <div className="footer__copy">
          © {new Date().getFullYear()},{" "}
          {isEnglish ? "Built with" : "Создано на"}
          {` `}
          <a href="https://www.gatsbyjs.org">
            <b>Gatsby</b>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
