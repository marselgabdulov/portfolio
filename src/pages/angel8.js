import React from "react"
import Layout from "../components/layout"
import "./styles/angel8.scss"

function AngelPage() {
  return (
    <Layout>
      <section className="angel-page">
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
          <b>Пожелание заказчика: </b>Использование темной темы
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
          <b>Деплой: </b>{" "}
          <a
            href="https://pages.github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Pages
          </a>
        </p>
        <p>
          <b>Разработка: </b> 13.01.2019 - 28.01.2019
        </p>
      </section>
    </Layout>
  )
}

export default AngelPage