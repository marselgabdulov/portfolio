import React from "react"
import Layout from "../components/layout"
import "./styles/project.scss"
import SEO from "../components/seo"
import { Link } from "gatsby"

function SpaceXPage() {
  return (
    <Layout>
      <SEO title="SpaceX" />
      <section className="project-page">
        <h2>SpaceX Launches</h2>
        <p>
          <b>Ссылка: </b>
          <a
            href="https://morning-mesa-87055.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SpaceX heroku
          </a>
        </p>
        <p>
          <b>Задача: </b>Создать приложение, показывающие информацию по запускам
          SpaceX
        </p>
        <p>
          <b>Вдохновлялся: </b>
          <a
            href="https://www.youtube.com/watch?v=7wzR4Ig5pTI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase
          </a>
          ,{" "}
          <a
            href="https://www.youtube.com/watch?v=SEMTj8w04Z8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Traversy
          </a>
          ,{" "}
          <a
            href="https://codesandbox.io/s/spacex-react-graphql-giwhf?from-embed"
            target="_blank"
            rel="noopener noreferrer"
          >
            thiagokpelo
          </a>
        </p>
        <p>
          <b>Использовал в дизайне: </b>шрифт{" "}
          <a
            href="https://fonts.google.com/specimen/Courier+Prime"
            target="_blank"
            rel="noopener noreferrer"
          >
            Courier Prime
          </a>
        </p>
        <p>
          <b>Использовал в разработке: </b> create-react-app, graphql, appollo
        </p>
        <p>
          <b>Деплой: </b>{" "}
          <a
            href="https://www.heroku.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Heroku
          </a>
        </p>
        <p>
          <b>Репозиторий: </b>
          <a
            href="https://github.com/marselgabdulov/spacex_react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
        <p>
          <b>Разработка: </b> 25.01.2020 - 26.01.2020
        </p>
      </section>
    </Layout>
  )
}

export default SpaceXPage
