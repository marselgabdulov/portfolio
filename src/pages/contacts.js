import React from "react"
import Layout from "../components/layout"
import "./styles/contacts.scss"
import SEO from "../components/seo"
import { connect } from "react-redux"

function ContactsPage({ isEnglish }) {
  return (
    <Layout>
      <SEO title={isEnglish ? "Contacts" : "Контакты"} />
      <section className="contacts-page">
        <h2>{isEnglish ? "Contacts" : "Контакты"}</h2>
        <div className="contacts-page__info">
          <span className="contacts-page__item">
            <b>Email: </b>
            <a href="mailto:marsel.gabdulov@gmail.com">
              marsel.gabdulov@gmail.com
            </a>
          </span>
          <span className="contacts-page__item">
            <b>Telegram: </b>
            <a href="https://telegram.me/marsgabdulov">@marsgabdulov</a>
          </span>
          <span className="contacts-page__item">
            <b>Instagram: </b>
            <a
              href="https://www.instagram.com/marsel_gabdulov/"
              title="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              marsel_gabdulov
            </a>
          </span>
          <span className="contacts-page__item">
            <b>Facebook: </b>
            <a
              href="https://www.facebook.com/marsel.gabdulov"
              title="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              marsel.gabdulov
            </a>
          </span>
          <span className="contacts-page__item">
            <b>Github: </b>
            <a
              href="https://github.com/marselgabdulov"
              title="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              marselgabdulov
            </a>
          </span>
        </div>
      </section>
    </Layout>
  )
}

export default connect(
  state => ({ isEnglish: state.app.isEnglish }),
  null
)(ContactsPage)
