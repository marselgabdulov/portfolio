import React from "react"
import Layout from "../components/layout"
import "./styles/project.scss"
import SEO from "../components/seo"
import { Link } from "gatsby"

function AlexeyPage() {
  return (
    <Layout>
      <SEO title="alexeygorbunov.com" />
      <section className="project-page">
        <h2>alexey-gorbunov</h2>
        <p>
          <a
            href="https://alexeygorbunov.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            alexeygorbunov.com
          </a>
        </p>
        <p>
          <b>Задача: </b>Создать сайт-визитку для ведущего Алексея Горбунова
        </p>
        <p>
          <b>Предоставлено заказчиком: </b>текст, фотографии, видео
        </p>
        <p>
          <b>Пожелание заказчика: </b>Использование темной темы
        </p>
        <p>
          <b>Вдохновлялся: </b>
          <a
            href="https://maxkorzh.live/"
            target="_blank"
            rel="noopener noreferrer"
          >
            maxkorzh.live
          </a>
        </p>
        <p>
          <b>Использовал в дизайне: </b>шрифт{" "}
          <a
            href="https://fonts.google.com/specimen/Montserrat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Montserrat
          </a>
        </p>
        <p>
          <b>Использовал в разработке: </b>{" "}
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
          <b>Разработка: </b> 29.07.2019 - 21.08.2019
        </p>
        <p>
          <b>Следующий проект:</b> <Link to="/reklamada">reklama-da.ru</Link>
        </p>
      </section>
    </Layout>
  )
}

export default AlexeyPage
