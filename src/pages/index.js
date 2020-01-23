import React from "react"
import "./styles/index.scss"
import { Link } from "gatsby"
import Place from "../assets/place.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="intro">
        <h1>Фронтенд разработчик</h1>
        <p>Специализируюсь на React, интересуюсь дизайном</p>
        <p>
          <Place /> Москва, Россия
        </p>
        <p>Статус: доступен</p>
        <div className="intro__link">
          <Link to="/projects">Мои работы</Link>
        </div>
        <p>
          <Link className="intro__contacts" to="/contacts">
            Контакты
          </Link>
        </p>
      </section>
    </Layout>
  )
}

export default IndexPage
