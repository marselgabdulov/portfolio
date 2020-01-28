import React from "react"
import Layout from "../components/layout"
import "./styles/project.scss"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { connect } from "react-redux"

function AngelPage({ isEnglish }) {
  return (
    <Layout>
      <SEO title="angel8bar.ru" />
      <section className="project-page">
        <h2>Angel 8</h2>
        <p>
          <b>{isEnglish ? "Link: " : "Ссылка: "}</b>
          <a
            href="https://angel8bar.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            angel8bar.ru
          </a>
        </p>
        <p>
          <b>{isEnglish ? "Task: " : "Задача: "}</b>
          {isEnglish
            ? "Develop website for restaurant Angel8"
            : "Создать сайт для ресторана Angel8"}
        </p>
        <p>
          <b>
            {isEnglish ? "Logo creator: " : "Логотип был создан дизайнером: "}
          </b>
          {isEnglish ? "Katerina Semaeva: " : "Катериной Семаевой "} (
          <a
            href="https://www.instagram.com/sema_katerina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          )
        </p>
        <p>
          <b>{isEnglish ? "Inspired by: " : "Вдохновлялся: "}</b>
          <a
            href="https://www.awwwards.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            awwwards.com
          </a>
        </p>
        <p>
          <b>{isEnglish ? "Design with: " : "Использовал в дизайне: "}</b>
          {isEnglish ? "font " : "шрифт "}
          <a
            href="https://fonts.google.com/specimen/Montserrat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Montserrat
          </a>
        </p>
        <p>
          <b>
            {isEnglish ? "Development with: " : "Использовал в разработке: "}
          </b>{" "}
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
          , React
        </p>
        <p>
          <b>{isEnglish ? "Development time: " : "Время разработки: "}</b>{" "}
          13.01.2019 - 28.01.2019
        </p>
        <p>
          <b>{isEnglish ? "Next project: " : "Следующий проект: "}</b>{" "}
          <Link to="/alexey-gorbunov">alexeygorbunov.com</Link>
        </p>
      </section>
    </Layout>
  )
}

export default connect(
  state => ({ isEnglish: state.app.isEnglish }),
  null
)(AngelPage)
