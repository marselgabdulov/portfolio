import React from "react"
import Layout from "../components/layout"
import "./styles/project.scss"
import SEO from "../components/seo"
import { Link } from "gatsby"

function ReklamadaPage() {
  return (
    <Layout>
      <SEO title="reklama-da.ru" />
      <section className="project-page">
        <h2>reklama-da</h2>
        <p>
          <a
            href="https://reklama-da.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reklama-da.ru
          </a>
        </p>
        <p>
          <b>Задача: </b>Создать одностраничный сайт для небольшой студии
          рекламы
        </p>
        <p>
          <b>Предоставлено заказчиком: </b>текст
        </p>
        <p>
          <b>Пожелание заказчика: </b>Использование больших шрифтов для
          заголовков
        </p>
        <p>
          <b>Вдохновлялся: </b>
          <a
            href="https://b2basket.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            b2basket.ru
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
          , иллюстрации{" "}
          <a
            href="https://www.drawkit.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DrawKit
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
          <b>Разработка: </b> 09.01.2020 - 16.01.2020
        </p>
        <p>
          <b>Следующий проект:</b> <Link to="/angel8">angel8bar.ru</Link>
        </p>
      </section>
    </Layout>
  )
}

export default ReklamadaPage
