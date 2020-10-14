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
        <h1>{isEnglish ? "Contacts" : "Контакты"}</h1>
        <div className="contacts-page__info">
          <p className="contacts-page__item">
            <b>Email: </b>
            <a href="mailto:marsel.gabdulov@gmail.com">
              marsel.gabdulov@gmail.com
            </a>
          </p>
          <p className="contacts-page__item">
            <b>Telegram: </b>
            <a href="https://telegram.me/marsgabdulov">@marsgabdulov</a>
          </p>
          <p className="contacts-page__item">
            <b>Github: </b>
            <a
              href="https://github.com/marselgabdulov"
              target="_blank"
              rel="noopener noreferrer"
            >
              marselgabdulov
            </a>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default connect(
  state => ({ isEnglish: state.app.isEnglish }),
  null
)(ContactsPage)
