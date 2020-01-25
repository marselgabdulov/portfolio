import React from "react"
import Layout from "../components/layout"
import "./styles/project.scss"
import SEO from "../components/seo"
import { Link } from "gatsby"

function AngelPage() {
  return (
    <Layout>
      <SEO title="angel8bar.ru" />
      <section className="project-page">
        <h2>Angel 8</h2>
        <p>
          <a
            href="https://angel8bar.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            angel8bar.ru
          </a>
        </p>
        <p>
          <b>Задача: </b>Создать сайт для ресторана/бара &laquo;Angel 8&raquo;
        </p>
        <p>
          <b>Предоставлено заказчиком: </b>текст, фотографии, видео
        </p>
        <p>
          Логотип и фирменный стиль был создан дизайнером{" "}
          <b>Катериной Семаевой</b> (
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
          <b>Вдохновлялся: </b>
          <a
            href="https://www.awwwards.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            awwwards.com
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
          <b>Разработка: </b> 13.01.2019 - 28.01.2019
        </p>
        <p>
          <b>Следующий проект</b>:{" "}
          <Link to="/alexey-gorbunov">alexeygorbunov.com</Link>
        </p>
      </section>
    </Layout>
  )
}

export default AngelPage
