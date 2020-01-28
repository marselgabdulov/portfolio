import React from "react"
import "./styles/index.scss"
import { Link } from "gatsby"
import Place from "../assets/place.svg"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage({ isEnglish }) {
  return (
    <Layout>
      <SEO title="Главная" />
      <section className="intro">
        <h1>{isEnglish ? "Frontend developer" : "Фронтенд разработчик"}</h1>
        <p>
          {isEnglish ? " Specializing in React" : "Специализируюсь на React"}
        </p>
        <p>
          <Place /> {isEnglish ? "Moscow, Russia" : "Москва, Россия"}
        </p>
        <p>{isEnglish ? "Status: available" : "Статус: доступен"}</p>
        <div className="intro__link">
          <Link to="/projects">{isEnglish ? "My projects" : "Мои работы"}</Link>
        </div>
        <p>
          <Link className="intro__contacts" to="/contacts">
            {isEnglish ? "Contacts" : "Контакты"}
          </Link>
        </p>
      </section>
    </Layout>
  )
}

export default connect(
  state => ({
    isEnglish: state.app.isEnglish,
  }),
  null
)(IndexPage)
