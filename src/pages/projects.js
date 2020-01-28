import React from "react"
import "./styles/projects.scss"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import { graphql } from "gatsby"

function ProjectsPage(props) {
  return (
    <Layout>
      <SEO title="Работы" />
      <section className="projects">
        <ProjectCard
          image={props.data.reklama.childImageSharp.fluid.src}
          innerLink="reklamada"
          outerLink="https://reklama-da.ru/"
          name="reklama-da.ru"
        />
        <ProjectCard
          reverse={true}
          image={props.data.alex.childImageSharp.fluid.src}
          innerLink="alexey-gorbunov"
          name="alexeygorbunov.com"
          outerLink="https://alexeygorbunov.com/"
        />
        <ProjectCard
          image={props.data.angel.childImageSharp.fluid.src}
          innerLink="angel8"
          name="angel8bar.ru"
          outerLink="https://angel8bar.ru/"
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
    alex: file(relativePath: { eq: "projects/alex.png" }) {
      ...fluidImage
    }
    reklama: file(relativePath: { eq: "projects/reklama-da.png" }) {
      ...fluidImage
    }
  }
`

export default ProjectsPage
