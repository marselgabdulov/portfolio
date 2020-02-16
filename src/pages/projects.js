import React from "react"
import "./styles/projects.scss"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import { graphql } from "gatsby"
import { connect } from "react-redux"

function ProjectsPage({ isEnglish, ...props }) {
  return (
    <Layout>
      <SEO title={isEnglish ? "Projects" : "Работы"} />
      <section className="projects">
        <ProjectCard
          reverse={true}
          image={props.data.reklama.childImageSharp.fluid.src}
          link="https://reklama-da.ru/"
          name="reklama-da.ru"
          description={
            isEnglish
              ? "Landing page for small advertising company"
              : "Лендинг для небольшой студии рекламы"
          }
          tools="React(Gatsby)"
        />
        <ProjectCard
          image={props.data.alex.childImageSharp.fluid.src}
          name="alexeygorbunov.com"
          link="https://alexeygorbunov.com/"
          description={
            isEnglish
              ? "Personal website for master of ceremonies Alexey Gorbunov"
              : "Сайт визитка для ведущего Алексея Горбунова"
          }
          tools="React(Gatsby)"
        />
        <ProjectCard
          reverse={true}
          image={props.data.angel.childImageSharp.fluid.src}
          name="angel8bar.ru"
          link="https://angel8bar.ru/"
          description={
            isEnglish
              ? "Website for Angel8 restaturant"
              : "Сайт для ресторана Angel8"
          }
          tools="React(Gatsby)"
        />
        <ProjectCard
          image={props.data.matrix.childImageSharp.fluid.src}
          link="https://eisenhower-matrix-d5ff0.firebaseapp.com/"
          name="Eisehower matrix"
          githubLink="https://github.com/marselgabdulov/eisenhower-matrix"
          description={
            isEnglish
              ? "Eisenhower matrix ToDo application"
              : "ToDo приложение, основанное на матрице Эйзенхауэра"
          }
          tools="React, localStorage"
        />
        <ProjectCard
          reverse={true}
          image={props.data.toronto.childImageSharp.fluid.src}
          link="https://toronto-crime-cd3b1.firebaseapp.com/"
          name="Toronto crime activity 2018"
          githubLink="https://github.com/marselgabdulov/Toronto-Crime-2018"
          description={
            isEnglish
              ? "App showing Toronto crime activity in 2018"
              : "Приложение, показывающее криминальную активность в Торонто в 2018 году"
          }
          tools="React, Deckgl"
        />
        <ProjectCard
          image={props.data.tesla.childImageSharp.fluid.src}
          name="spaceX launches"
          link="https://spacex-launches-3b0bf.firebaseapp.com/"
          description={
            isEnglish
              ? "Pet project app showing SpaceX launches info"
              : "Учебный проект, показывающий информацию по запускам SpaceX"
          }
          tools="React, Graphql"
          githubLink="https://github.com/marselgabdulov/spacex_react"
        />
      </section>
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    angel: file(relativePath: { eq: "projects/angel.jpg" }) {
      ...fluidImage
    }
    matrix: file(relativePath: { eq: "projects/matrix.png" }) {
      ...fluidImage
    }
    toronto: file(relativePath: { eq: "projects/toronto.png" }) {
      ...fluidImage
    }
    alex: file(relativePath: { eq: "projects/alex.png" }) {
      ...fluidImage
    }
    reklama: file(relativePath: { eq: "projects/reklama-da.png" }) {
      ...fluidImage
    }
    tesla: file(relativePath: { eq: "projects/tesla.jpg" }) {
      ...fluidImage
    }
  }
`

export default connect(
  state => ({ isEnglish: state.app.isEnglish }),
  null
)(ProjectsPage)
