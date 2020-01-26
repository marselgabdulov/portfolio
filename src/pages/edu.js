import React from "react"
import "./styles/projects.scss"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import { graphql } from "gatsby"

function EduPage(props) {
  return (
    <Layout>
      <SEO title="Учебные работы" />
      <section className="projects">
        <ProjectCard
          image={props.data.tesla.childImageSharp.fluid.src}
          innerLink="spacex"
          role="разработка"
          name="spaceX heroku"
          outerLink="https://morning-mesa-87055.herokuapp.com/"
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
    tesla: file(relativePath: { eq: "projects/tesla.jpg" }) {
      ...fluidImage
    }
  }
`

export default EduPage
