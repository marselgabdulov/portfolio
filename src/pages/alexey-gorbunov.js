import React from "react"
import Layout from "../components/layout"
import "./styles/project.scss"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { connect } from "react-redux"

function AlexeyPage({ isEnglish }) {
  return (
    <Layout>
      <SEO title="alexeygorbunov.com" />
      <section className="project-page">
        <h2>alexey-gorbunov</h2>
        <p>
          <b>{isEnglish ? "Link: " : "Ссылка: "}</b>
          <a
            href="https://alexeygorbunov.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            alexeygorbunov.com
          </a>
        </p>
        <p>
          <b>{isEnglish ? "Task: " : "Задача: "}</b>
          {isEnglish
            ? "Develop personal website for master of ceremony Alexey Gorbunov"
            : "Создать сайт-визитку для ведущего Алексея Горбунова"}
        </p>
        <p>
          <b>{isEnglish ? "Inspired by: " : "Вдохновлялся: "}</b>
          <a
            href="https://maxkorzh.live/"
            target="_blank"
            rel="noopener noreferrer"
          >
            maxkorzh.live
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
          29.07.2019 - 21.08.2019
        </p>
        <p>
          <b>{isEnglish ? "Next project: " : "Следующий проект: "}</b>{" "}
          <Link to="/reklamada">reklama-da.ru</Link>
        </p>
      </section>
    </Layout>
  )
}

export default connect(
  state => ({ isEnglish: state.app.isEnglish }),
  null
)(AlexeyPage)
