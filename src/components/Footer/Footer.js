import React from "react"
import "./Footer.scss"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__social">
          <a
            href="https://www.facebook.com/marsel.gabdulov"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/marsel_gabdulov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.instagram.com/marsel_gabdulov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
        <div className="footer__copy">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
