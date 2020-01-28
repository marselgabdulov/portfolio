import React from "react"
import Layout from "../components/layout"
import "./styles/project.scss"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { connect } from "react-redux"

function ReklamadaPage({ isEnglish }) {
  return (
    <Layout>
      <SEO title="reklama-da.ru" />
      <section className="project-page">
        <h2>reklama-da</h2>
        <p>
          <b>{isEnglish ? "Link: " : "Ссылка: "}</b>
          <a
            href="https://reklama-da.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reklama-da.ru
          </a>
        </p>
        <p>
          <b>{isEnglish ? "Task: " : "Задача: "}</b>
          {isEnglish
            ? "Develop landing page for small advert agency"
            : "Создать одностраничный сайт для небольшой студии рекламы"}
        </p>
        <p>
          <b>{isEnglish ? "Inspired by: " : "Вдохновлялся: "}</b>
          <a
            href="https://b2basket.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            b2basket.ru
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
          , {isEnglish ? "illustrations " : "иллюстрации "}
          <a
            href="https://www.drawkit.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DrawKit
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
          09.01.2020 - 16.01.2020
        </p>
        <p>
          <b>{isEnglish ? "Next project: " : "Следующий проект: "}</b>{" "}
          <Link to="/angel8">angel8bar.ru</Link>
        </p>
      </section>
    </Layout>
  )
}

export default connect(
  state => ({ isEnglish: state.app.isEnglish }),
  null
)(ReklamadaPage)
